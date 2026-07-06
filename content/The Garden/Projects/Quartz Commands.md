---
created: 2025-03-19
edited_seconds: 0
publish: true
tags: [🌱Seed, 😐Neutral, 🟡Consideration]
updated: 2026-04-01T14:30:09.071-07:00
---

> [!Summary] The Big Idea
> Easy reference for commands I use to update my Digital Garden.

****

## Site for Quartz Docs

[Quartz Docs](https://quartz.jzhao.xyz/)


### Fetch upstream changes from main quartz repo: 
```SH
git fetch upstream v4
```
### Merge changes from main repo into local copy:
```SH
git merge upstream/v4
```

### Build Preview of site:
```SH
npx quartz build --serve
```