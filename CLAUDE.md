## gstack (recommended)

This project uses [gstack](https://github.com/garrytan/gstack) for AI-assisted workflows.
Install it for the best experience:

```bash
git clone --depth 1 https://github.com/garrytan/gstack.git ~/.claude/skills/gstack
cd ~/.claude/skills/gstack && ./setup --team
```

Skills like /qa, /ship, /review, /investigate, and /browse become available after install.
Use /browse for all web browsing. Use ~/.claude/skills/gstack/... for gstack file paths.


---

<!--K13_BROADCAST_START · managed by War Room — do not hand-edit-->
## 📡 War Room Broadcasts (org-wide rules)
> Synced from the K13 War Room. Each entry is a house rule that applies to every K13 project. Managed automatically — edit the rule in the War Room, not here.

<!--bc:2026-06-26-imagegen-global-->
### 2026-06-26 · Image generation — free, via /imagegen (Gemini Nano Banana) + central pool
**Need an image? Generate it free with `/imagegen`.** Run `/imagegen <subject, style, aspect>` (or read `/Users/k13/Desktop/PROJECTS/K13-WarRoom/starter-kit/IMAGEGEN.md` and follow it). Engine: GStack Browser → Google Gemini (Nano Banana), free / no credits; fallback Bing Image Creator. The agent never types your password — it asks you to log in if prompted.

**Central pool, zero duplicates.** Every generated image lands first in the shared pool `/Users/k13/Desktop/PROJECTS/generatedAssets/` with a raw name (`gen_<proj>_<topic>_<n>.png`) and is **never committed**. On your approval the used image is **moved** (not copied) into this project's correct folder with a proper name; unused variants stay in the pool. Only the final relocated, renamed asset enters the repo — under this project's own git rules (branch → PR → merge).

<!--K13_BROADCAST_END-->
