# ATL BTP – Énergies & Télécoms

Site vitrine statique (une page) d'ATL BTP : **Performance et innovation sans frontières**.

Stack : Vite + React + TypeScript + Tailwind CSS. Aucune API, aucun back-end.

## Démarrer

```bash
pnpm install
pnpm dev        # http://localhost:5173
pnpm build      # génère le site statique dans dist/
pnpm preview    # sert dist/ en local
```

Le dossier `dist/` peut être déposé tel quel sur n'importe quel hébergement statique.

## Modifier le contenu

Tous les textes sont dans `src/data/site.ts` : coordonnées, chiffres clés, services,
réalisations, partenaires. Les valeurs marquées « à compléter » sont provisoires
(téléphone, adresse, numéro WhatsApp, chiffres, projets).

- Couleurs et polices de la charte : `src/index.css` (bloc `@theme`).
- Photos : `public/images/` (photos Unsplash provisoires, à remplacer par les vraies).
- Logo provisoire : `src/components/Logo.tsx` et `public/favicon.svg`.

## Formulaire de contact

Pas de back-end pour l'instant : à l'envoi, le formulaire ouvre la messagerie du
visiteur avec la demande pré-remplie vers l'adresse définie dans `src/data/site.ts`.
