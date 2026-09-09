# Empire Audition — Design System

## Intent

Une présence clinique premium conçue pour Douala : la précision de l’audiométrie alliée à une hospitalité calme et humaine. La signature visuelle est l’onde acoustique, utilisée uniquement pour orienter le regard vers la consultation et l’écoute retrouvée.

## Tokens

- Navy clinique : `#071A2E`, `#0A2540`
- Teal diagnostic : `#0A6C74`
- Or acoustique : `#E59819`, `#FFBF58`
- Surfaces : `#F7F9FC`, `#EDF3FA`, `#FFFFFF`
- Texte : `#111C2D`, `#566377`
- Titres : Plus Jakarta Sans Variable
- Texte et contrôles : Inter Variable
- Conteneur : `80rem`
- Cibles tactiles : `44px` minimum, `52px` pour les actions principales

## Interaction

- Deux moments animés : entrée orchestrée du hero et révélation douce au défilement.
- Le CTA principal conduit toujours à la prise de rendez-vous.
- Les animations sont neutralisées avec `prefers-reduced-motion`.
- Les formulaires utilisent des libellés persistants, des focus visibles et une confirmation explicite.

## Anti-patterns

- Aucun décor acoustique sans rôle de hiérarchie.
- Pas de statistiques ou badges concurrençant le rendez-vous dans le premier écran.
- Pas de carte flottante générique ni de gradient violet.
- Pas de texte inférieur à 12px sur les informations essentielles.
- Pas de promesse médicale absolue ou de faux diagnostic.
