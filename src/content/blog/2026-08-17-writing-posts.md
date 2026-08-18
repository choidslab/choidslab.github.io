---
title: 'How Posting Works on This Site'
date: 2026-08-17
description: 'A quick reference for writing posts in Markdown: frontmatter, code blocks, tables, and images.'
tags: ['meta', 'guide']
---

Every post on this site is a single Markdown file in `src/content/blog/`. This post doubles as a formatting reference.

## Frontmatter

Each post starts with a small metadata block:

```yaml
---
title: 'Post title'
date: 2026-08-18
description: 'One-line summary shown in the post list.'
tags: ['research', 'pdf']
draft: false   # set true to hide from the site
---
```

## Code blocks

Syntax highlighting works out of the box, in both light and dark mode:

```python
from sklearn.ensemble import RandomForestClassifier

clf = RandomForestClassifier(n_estimators=300, random_state=42)
clf.fit(X_train, y_train)
print(f"Accuracy: {clf.score(X_test, y_test):.4f}")
```

## Tables

| Model | Accuracy | F1 |
|-------|----------|----|
| Random Forest | 0.981 | 0.979 |
| XGBoost | 0.983 | 0.981 |
| Stacking | 0.985 | 0.983 |

## Images

Put image files in `public/img/posts/` and reference them:

```markdown
![Feature importance plot](/img/posts/example.png)
```

That's it — commit, push, and the site rebuilds automatically.
