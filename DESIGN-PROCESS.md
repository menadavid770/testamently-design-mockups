# Testamently — Design & UX Process

How the mockups in this repo evolved, the **minimalist** principles behind them, and the
**user-experience** decisions that shaped the final direction. Written so David (and anyone
picking this up) can see *why* each screen looks the way it does — not just *what* it looks like.

> **The product in one line:** an encrypted vault that releases your most important
> information (passwords, crypto, documents, last words) to people you trust — but only if
> your regular check-ins ever stop. Every design choice serves that promise: *calm, trustworthy,
> and effortless.*

---

## 0. What it's for — the "you hold half" model

The sharpest idea in the project. Testamently deliberately stores information that is
**useless on its own** — it only has value next to a *physical thing* you keep, or as a
*pointer/instruction*. That gives a rare, honest security claim:

> **"Even if Testamently were breached, a thief gets nothing — the other half (your phone,
> your wallet, your safe) is in your home."**

The test for whether something belongs: **on its own, is it harmless?**
- ✅ A wallet **PIN** (needs the device) · a safe **combination** (needs the safe) · a phone
  **passcode** (needs the phone) · **where** the documents are.
- ❌ A live email/banking **password** — that *is* full access, dangerous the moment it leaks.
  So the generic "Password" type was **dropped**.

This also lowers the emotional barrier: people are far more comfortable storing "the safe combo"
than "my live bank login."

### Two classes of record
1. **Access & instructions — the valuable half.** Phone/device passcode, crypto-wallet PIN,
   safe combination, keys & storage, where documents are, accounts to know about. The
   split-knowledge security matters most here.
2. **Messages & memories — lower stakes.** A letter, a photo's whereabouts, funeral wishes.
   Less sensitive even if leaked — these are simply things you want delivered. Good security
   still applies, but the "half" framing isn't the point.

**The "What is it?" types:** 📱 Phone / device · 🔐 Crypto wallet · 🏦 Safe combo ·
🔑 Keys & access · 📄 Document · ✉️ Letter · 🖼️ Photo *(+ accounts-to-know, instructions/wishes
as needed)*. The one-line guidance in the UI: *"Store the PIN, not the phone — the code, not the
wallet. We keep one half; your home keeps the other."*

---

## 1. The exploration — four versions

Each version is a deliberate step, not a redo. Use the **v1 · v2 · v3 · v4** tabs to compare.

| Version | Question it answers | Outcome |
|---|---|---|
| **v1 · Captured** | What does the app *actually* look like today? | Pixel-accurate, editable snapshots of every live screen + proposed new screens. The baseline. |
| **v2 · Minimalist** | What if it were quieter and more editorial? | David's **"Dylaw"** language — warm off-white paper, one ink colour, serif display headings. |
| **v3 · Themes** | What colour should it be? | Same minimalist base, but the **accent is a choice** (Ink / Forest / Emerald / Slate) with a **light ↔ dark** toggle. Default: blank + forest green. |
| **v4 · UX** | How do we make it *understandable*? | The v3 look, reworked so the app explains itself — status at a glance, plain language, fewer dead-ends. **The recommended direction.** |

---

## 2. Minimalist design principles

What "minimalist" means here — concrete rules, not just a vibe:

- **One ink, one accent.** A single text colour and a single accent. Colour is used to mean
  something (an action, a status), never for decoration.
- **Hairlines over boxes.** Rows separated by 1px lines instead of heavy cards or shadows.
  Less visual weight, more content.
- **Type does the hierarchy.** A serif display face (DM Serif Display) for page titles +
  Inter for everything else. Size and weight create structure so borders don't have to.
- **Whitespace is a feature.** Generous padding; let screens breathe.
- **No gradients, minimal shadow.** Flat, paper-like surfaces. The only shadow is the
  floating theme switcher, so it reads as an overlay.
- **Show less by default.** Advanced controls live behind a disclosure ("Advanced ▸"),
  not on the first screen.

---

## 3. UX optimisation (what changed in v4)

Driven by one goal: **simple and understandable.** The biggest wins:

### Understand your vault at a glance
The Records home opens with a **status summary** — *"8 of 10 records will reach a trustee"*
with a progress bar, *2 trustees*, and *next check-in in 28 days*. The user grasps their whole
situation in one line, before scrolling.

### Plain language over symbols
Coloured dots are ambiguous. v4 uses **words that describe the outcome**:
`Will reach 2` · `No trustee` · `Needs master password`. The status tells you what will
*happen*, not an internal state.

### Surface gaps, offer the fix
A record with no trustee silently fails its whole purpose. v4 shows a gentle **nudge** —
*"Netflix Family won't reach anyone"* — with a one-tap **Assign trustee →**.

### Actions are always visible
No hover-only buttons (invisible on touch, undiscoverable on desktop). Every row shows its
action (`Reveal` / `Assign` / `Unlock`) at all times.

### Progressive disclosure & short flows
- **Adding a record is 2 small steps**, not one dense form:
  **Step 1** what + name + secret → **Step 2** who receives it (skippable).
- Encryption / release rule sit behind **Advanced** with sensible defaults, so most people
  never touch them.
- First-run onboarding is reduced to the essentials with an explainer (see the v1 proposals).

### Reassurance where it counts
Security copy is placed exactly where doubt arises: *"Encrypted on your device — we can never
read your secrets"* near inputs; *"They can't see anything until your vault is released"* near
trustee assignment.

---

## 4. Key product decisions

- **Two tiers: simple *add*, advanced *edit*.** Creating a record is deliberately light —
  a 2-step flow (what + name + secret → who receives it) with smart defaults. Everything else
  (rename, change encryption, change the release rule, swap trustees, delete) lives on the
  **Edit record** screen, reached by tapping a record. Low friction to create; full control on
  demand. *(So you're never forced through the advanced options just to save something.)*
  The **Edit record** screen holds: name · secret · **hint** (what the trustee sees before
  revealing) · **folder** · encryption · release rule · trustees · delete. Two options from the
  old app were **deliberately cut** — *expiry* and *view-limit / one-time view* — because a
  self-destructing inheritance secret works *against* the promise of reliable delivery.
- **Encryption is per-record, with an account default.** Settings holds a *default* tier for
  new records (a convenience); each record can **override** it on its own
  *"Record — encryption & activation"* screen (opened by tapping a record). Tiers:
  Standard → Premium → Gold → Zero-knowledge.
- **Release timing is per-record too.** Default "when my check-ins stop", but a record can be
  scheduled *on a date* (e.g. a birthday letter) or gated behind *death verified*.
- **Activation cadence is account-wide.** The check-in frequency and the "release after N days"
  window live in Settings — they're about *you*, not a single record.
- **Trustees see nothing until release.** Assignment only invites + verifies; access is granted
  only when the dead-man's-switch triggers.

---

## 5. The theming system (v3 / v4)

Palette is driven entirely by CSS variables, switched live by a small widget (bottom-right of
every screen) and remembered in `localStorage`:

- **Accent switch** — `Ink` (David's black) · `Forest` (default) · `Emerald` · `Slate`.
  The Ink accent inverts to cream in dark mode so buttons stay visible.
- **Light / Dark toggle** — swaps the background/surface/text set; the accent rides on top.

To recolour a static screen by hand, change the `:root` variables at the top of any file
(`--bg`, `--surface`, `--text`, `--border`, `--accent`, `--accent-fg`).

---

## 6. Reusable patterns

Consistent building blocks across screens:

- **Status pill** — small rounded label + dot; colour = meaning (`ok` / `warn` / `lock`).
- **Segmented control** — for mutually-exclusive choices (encryption tier, reminders).
- **Row** — icon · name + meta · status · action. The unit of every list.
- **Stepper** — `① ——— ②` for short flows (add-record, onboarding).
- **Disclosure** — `Advanced ▸` to hide power-user options.
- **Nudge** — left-accent-bar callout for "you should fix this", with the fix inline.

---

## 7. Recommendation & open questions

**Recommended direction:** **v4** (UX) with the **Forest** accent on the **light** base —
calm, trustworthy, and the easiest to understand. Dark mode + other accents stay available
via the switcher.

Still to decide:
- Keep the **Settings encryption default**, or make encryption *purely* per-record (simpler
  mental model)?
- Roll the v4 plain-language / at-a-glance treatment through the remaining screens
  (Trustees "covers 6 records", Check-in "you're safe until…", Trustee view).

---

*Mockups: [v1](./) · [v2](./v2/) · [v3](./v3/) · [v4](./v4/) — all live and editable. Built from the real app with demo content.*
