---
title: Python — f-strings
description: Comment formater des chaînes de caractères en Python avec les f-strings.
---

Les f-strings (Python 3.6+) permettent d'interpoler des expressions directement
dans une chaîne. C'est la méthode recommandée pour formater du texte.

## Syntaxe de base

```python
name = "Younes"
age = 22
print(f"{name} a {age} ans")  # Younes a 22 ans
```

## Options utiles

- Largeur et alignement : `f"{value:>10}"` (aligné à droite sur 10 caractères).
- Précision décimale : `f"{pi:.2f}"` → `3.14`.
- Séparateur de milliers : `f"{1000000:,}"` → `1,000,000`.
- Expressions : `f"{2 + 2}"` → `4`.

## Exemple d'utilisation

```python
price = 199.995
print(f"Prix: {price:,.2f} €")  # Prix: 200,00 €
```

## Pièges à éviter

- Ne pas utiliser `%` ou `.format()` pour du nouveau code : les f-strings sont
  plus lisibles et plus rapides.
- Ne pas mettre d'accolades littérales sans les doubler : `f"{{"` → `{`.

## Références

- [PEP 498 — Literal String Interpolation](https://peps.python.org/pep-0498/)