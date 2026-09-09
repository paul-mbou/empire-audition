#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

REPO_NAME="empire-audition"
EXPECTED_USER="paul-mbou"
EMAIL="paulmbou068@gmail.com"

echo "==> 1/4 Delete local git"
rm -rf .git

echo "==> 2/4 Create fresh git repository"
git init -b main
git config user.name "$EXPECTED_USER"
git config user.email "$EMAIL"

# Keep helper scripts local-only
touch .gitignore
grep -q '^push-github.sh$' .gitignore 2>/dev/null || echo 'push-github.sh' >> .gitignore
grep -q '^reconfigure-git-paul-mbou.sh$' .gitignore 2>/dev/null || echo 'reconfigure-git-paul-mbou.sh' >> .gitignore
grep -q '^reset-and-push.sh$' .gitignore 2>/dev/null || echo 'reset-and-push.sh' >> .gitignore

git add -A
git commit -m "$(cat <<'EOF'
Initial commit: site Empire Audition Douala.

Site Nuxt vitrine prêt pour publication.
EOF
)"

echo "==> 3/4 Verify GitHub auth as ${EXPECTED_USER}"
if ! gh auth status -h github.com >/dev/null 2>&1; then
  echo "GitHub CLI not authenticated. Logging in..."
  gh auth login -h github.com -p https -w
fi

LOGIN="$(gh api user --jq .login)"
echo "Logged in as: ${LOGIN}"
if [[ "$LOGIN" != "$EXPECTED_USER" ]]; then
  echo "ERROR: expected ${EXPECTED_USER}, got ${LOGIN}"
  echo "Run: gh auth logout -h github.com && gh auth login -h github.com -p https -w"
  exit 1
fi

FULL="${LOGIN}/${REPO_NAME}"

echo "==> 4/4 Create GitHub repo (if needed) and push"
if gh repo view "$FULL" >/dev/null 2>&1; then
  git remote remove origin 2>/dev/null || true
  git remote add origin "https://github.com/${FULL}.git"
  git push -u origin main --force
else
  gh repo create "$REPO_NAME" --private --source=. --remote=origin --push
fi

echo
echo "Done: $(gh repo view "$FULL" --json url -q .url)"
git status -sb
git remote -v
