---
title: Ajouter une note
description: La méthode pour créer une nouvelle note en quelques minutes.
---

## Méthode rapide (recommandée)

1. Duplique le modèle `_note-template.md` situé dans `src/content/docs/fr/`.
2. Renomme le fichier en fonction du sujet (ex. `python-f-strings.md`).
3. Place-le dans le bon dossier de catégorie (ou crée un sous-dossier).
4. Complète le frontmatter : `title` et `description`.
5. Écris le contenu en Markdown.
6. Enregistre, puis `git add . && git commit -m "docs: nouvelle note ..." && git push`.

Quelques minutes après le push, la note est en ligne et indexée par la recherche.

## Structure d'une note

```md
---
title: Titre de la note
description: Une phrase décrivant le contenu (utile pour la recherche).
---

Résumé en 2-3 phrases de ce que tu veux retenir.

## Points clés

- Point 1
- Point 2

## Détails

...

## Références

- Lien ou source utile
```

## Règles pour bien chercher plus tard

- **Un concept = une note.** Fractionne plutôt que d'empiler.
- **Titre clair et précis.** Tu le retrouveras avec la recherche.
- **Écris pour toi-même** dans 6 mois : du contexte, des exemples, des pièges.
- Ajoute des liens internes vers d'autres notes : `[nom](/fr/programming/...)`.

## Terminologie

- Une **note** = un fichier `.md`.
- Une **catégorie** = un dossier.
- La **recherche** = barre en haut à droite, indexée automatiquement à chaque build.