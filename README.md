# Testamently — Design Mockups

Editable, pixel-accurate HTML snapshots of **every screen** of the Testamently app,
captured from the live site (testamently.com) with real demo content. Each screen
is saved at **desktop (1440px)** and **mobile (390px)**, with CSS inlined and scripts
removed, so every file opens offline and renders exactly like the real app — but is
safe to edit. Tailwind utility classes stay in the markup, so design tweaks are easy.

## 🔗 Live

| | |
|---|---|
| **Gallery (GitHub Pages)** | https://menadavid770.github.io/testamently-design-mockups/ |
| **Gallery (Vercel)** | https://testamently-design-mockups.vercel.app |

> Open the gallery and click **Desktop** / **Mobile** on any card to open that screen.

## 📁 Layout

```
index.html     gallery / launcher (start here)
screens/       editable standalone HTML, one per screen+viewport
               e.g. vault-desktop.html, vault-mobile.html
shots/         PNG screenshots used as gallery thumbnails
```

## 🖥️ Screens  (each ×2: `-desktop` / `-mobile`)

| Area | Account | Screens |
|---|---|---|
| Marketing / Auth | public | landing, login, signup, how-it-works, pricing, security, blog, privacy, terms |
| First-time | fresh account | first-login (empty vault, onboarding add-secret form) |
| Owner | demo@ — Sarah Mitchell (Premium) | vault, trustees, settings, heartbeat, family |
| Trustee | michael.demo@ — Michael Mitchell | trustee-home, trustee-locked, trustee-unlocked |
| Invitations | invite links | trustee-accept, trustee-decline, family-accept |
| New screens — to implement | proposals | first-login simplified (step 1/2/done), first-login + banner, welcome-intro |
| Minimalist version — to implement | proposals | login, main (records), add-record, record encryption & activation, trustees, trustee view, check-in, settings |

Captured screens are the real app; the two **to-implement** groups are new design proposals.

## 🎛️ Versions (v1 / v2 tabs)

The gallery has a **v1 / v2** switcher at the top:

- **v1 · Captured** — everything above (`index.html`).
- **v2 · Minimalist** — `v2/` — the **"Dylaw style"** minimalist direction (David's): warm off-white paper, one ink colour, DM Serif Display headings. Includes David's full landing (`mockup-landing-dylaw.html` from the app repo) plus matching app screens (minimalist landing, Records, Settings). Live at `/v2`.

The screen list lives in **`gallery-data.js`** (shared) — add a screen there and it appears in the gallery.

## ✏️ Edit & publish

It's a plain static site — editing and publishing is just git:

```bash
git clone https://github.com/menadavid770/testamently-design-mockups.git
# edit any file in screens/ or index.html (open the .html in a browser to preview)
git add -A
git commit -m "tweak design"
git push
```

**GitHub Pages rebuilds automatically on every push to `main`** (~30–60s) — the live
Pages URL updates with no build step or extra tooling.

### Vercel (optional)
GitHub Pages already auto-deploys. To also auto-deploy the `.vercel.app` URL, authorize
Vercel's GitHub app once at
`vercel.com/testamently/testamently-design-mockups → Settings → Git`, or deploy manually:

```bash
vercel deploy --prod
```

## 🔄 Regenerate from the live app

The capture scripts live in the **testamently-app** repo (`apps/web/scripts/`):

```bash
cd apps/web
node scripts/capture-design-mockups.mjs   # all screens, desktop + mobile
node scripts/capture-invites.mjs          # invite-accept screens
```

## Notes

- Fonts and a few images load from testamently.com, so keep internet on for 100%
  fidelity (layout/colors/text render offline regardless).
- Capture created temporary throwaway accounts + a temporary family invite; both were
  cleaned up afterward — nothing is left in the production database.
