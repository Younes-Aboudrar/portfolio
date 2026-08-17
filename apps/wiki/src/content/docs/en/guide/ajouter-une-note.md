---
title: Adding a note
description: How to create a new note in a few minutes.
---

## Quick method (recommended)

1. Duplicate the `_note-template.md` template in `src/content/docs/fr/`.
2. Rename the file after the topic (e.g. `python-f-strings.md`).
3. Place it in the right category folder (or create a subfolder).
4. Fill in the frontmatter: `title` and `description`.
5. Write the content in Markdown.
6. Save, then `git add . && git commit -m "docs: new note ..." && git push`.

A few minutes after the push, the note is live and indexed by search.

## Note structure

```md
---
title: Note title
description: One sentence describing the content (useful for search).
---

Summary in 2-3 sentences of what you want to remember.

## Key points

- Point 1
- Point 2

## Details

...

## References

- Useful link or source
```

## Rules for finding things later

- **One concept = one note.** Split rather than pile up.
- **Clear, precise titles.** You'll find them with search.
- **Write for yourself in 6 months:** context, examples, pitfalls.
- Add internal links to other notes: `[name](/fr/programming/...)`.