# Testamently → v4 — Migration checklist

A developer-ready, ticket-by-ticket plan to roll the **v4 UX + new "you hold half" direction**
into the live app. Each ticket lists **Goal · Changes · Data · Done-when**, and links the v4
mockup to build against. Order is lowest-risk / highest-impact first; tickets merge independently.

> Principle: this is an **evolution, not a rewrite**. The data model (records/secrets, trustees,
> encryption tiers, check-in switch) already exists — most tickets are copy, presentation and flow.
> See [DESIGN-PROCESS.md](./DESIGN-PROCESS.md) §8–9 for the rationale.

Legend: ☐ = todo · **Data** = backend/schema notes · **DoD** = definition of done.

---

## Phase 0 — Foundations (do first; everything builds on these)

### ☐ T0.1 — Design tokens & typography
- **Goal:** one shared theme layer matching v4.
- **Changes:** add CSS variables — `--bg #F4F3EF · --surface #fff · --text #111 · --muted #6B7280 · --border #E4E3DC · --accent #5E7356 · --accent-fg #FAFAF7`; fonts **DM Serif Display** (headings) + **Inter** (body); radii 6–18px; hairline borders, no gradients.
- **Data:** none.
- **DoD:** tokens available app-wide; one page restyled to prove the system.

### ☐ T0.2 — Appearance switcher (optional to ship)
- **Goal:** light/dark + accent (Ink/Forest/Emerald/Slate) as a real preference.
- **Changes:** port the v4 switcher logic (CSS vars set from `MODES`+`ACC`); default **Forest / light**; expose in **Settings → Appearance**.
- **Data:** persist `theme_mode` + `accent` on the user profile (or cookie if not shipping per-user).
- **DoD:** toggling recolours the whole app; choice persists. *(Ship later if out of scope for v1.)*

### ☐ T0.3 — Copy & positioning pass (global)
- **Goal:** adopt the "you hold half" story everywhere.
- **Changes:** swap "passwords/secrets" framing for **codes · locations · last words**; add the *"store the PIN, not the phone"* line; the **legal/will notice** in the footer; "Records" not "Secrets".
- **Data:** none.
- **DoD:** no screen implies it's a password manager or a legal will. Mockup refs: `v4/screens/landing`, `welcome`.

### ☐ T0.4 — Language / i18n cleanup
- **Goal:** language is a setting, not a mid-flow choice (David's note).
- **Changes:** remove `<LanguageSwitcher/>` from **login + register**; auto-detect from browser → default EN; add **Settings → Language**; quiet switcher in marketing footer only.
- **Data:** store `locale` on profile + cookie; respect everywhere.
- **DoD:** signup/login show no language UI; language changeable in Settings; detection works.

### ☐ T0.5 — Record types + additive fields
- **Goal:** the new record types and the per-record fields v4 needs.
- **Changes:** type picker = **📱 Phone/device · 🔐 Crypto wallet · 🏦 Safe combo · 🔑 Keys & access · 📄 Document · ✉️ Letter · 🖼️ Photo** (drop generic "Password"); placeholders prompt for "the code / where it's kept".
- **Data:** additive columns on the record if missing — `hint` (text), `folder` (fk/nullable), `release_rule` enum (`inactivity` | `date` | `death_verified`) + optional `release_date`. Encryption tier already exists.
- **DoD:** records can carry hint/folder/release-rule; new types selectable. Mockup: `v4/screens/add-record`, `secret-detail`.

---

## Phase 1 — Core flow

### ☐ T1.1 — Records home  *(biggest UX win)*
- **Goal:** the vault explains itself at a glance.
- **Changes:** status summary row (protection %, trustee count, next check-in); a **gap nudge** for uncovered records; **plain-language status pills**; **always-visible** row actions (no hover-only); folder chips with counts.
- **Data (mappings):** `Will reach N` = count of **accepted** trustees assigned to the record · `No trustee` = unassigned · `Needs master password` = PBKDF2-locked tier · progress = covered/total records · "next check-in" = from check-in schedule.
- **DoD:** matches `v4/screens/main`; works for empty, partial, locked states (verify on demo account).

### ☐ T1.2 — Add a record (2-step)
- **Goal:** creating is effortless; advanced is optional.
- **Changes:** **Step 1** type quick-pick + name + secret (+ "Advanced" disclosure: encryption + release rule); **Step 2** "Who should receive it?" — pick existing trustee or invite new; skippable. Stepper + "we hold one half" note.
- **Data:** writes record (default tier Standard, default rule inactivity); Step 2 creates assignment(s); inviting a new person creates a **pending** trustee invite.
- **DoD:** matches `v4/screens/add-record` + `add-record-step2`; defaults applied silently.

### ☐ T1.3 — Edit a record (advanced home)
- **Goal:** one place to change anything per record.
- **Changes:** editable name · reveal/edit secret · **hint** · **folder** · encryption tier (override default) · release rule (inactivity/date/after-death) · add/remove trustees · **delete**. *No expiry / no view-limit.*
- **Data:** updates the record + assignments; per-record encryption override; `hint`/`folder`/`release_rule` from T0.5.
- **DoD:** matches `v4/screens/secret-detail`; opened from a record row.

### ☐ T1.4 — Onboarding / Welcome (first run)
- **Goal:** teach the model, then add the first record.
- **Changes:** "two halves" explainer + **example bank** (Access / They'd never find / Irreplaceable) → CTA into Add (Step 1).
- **Data:** shown when the vault has 0 records.
- **DoD:** matches `v4/screens/welcome`; first-run only.

---

## Phase 2 — Trustees & lifecycle

### ☐ T2.1 — Trustees
- **Goal:** understand coverage and gaps.
- **Changes:** per-person **"will receive N records"**, reassurance line, **Active vs Invited** status, gap nudge; "they confirm once, not per record".
- **Data:** `Active` = accepted invite · `Invited` = pending · coverage = records assigned to that trustee.
- **DoD:** matches `v4/screens/trustees`.

### ☐ T2.2 — Check-in (heartbeat)
- **Goal:** make the dead-man's switch reassuring and concrete.
- **Changes:** "You're checked in" status · **"what if I stop?"** with the **exact release date** · schedule · recent history · primary "I'm OK" action.
- **Data:** release date = last check-in + release window; schedule = check-in frequency + reminder channels + release-after window (account-level).
- **DoD:** matches `v4/screens/checkin`.

### ☐ T2.3 — Trustee view (released)
- **Goal:** plain-language release experience.
- **Changes:** "X's vault is now open to you" · the owner's **hints/notes** · reveal each assigned record (persistent) · take-your-time guidance.
- **Data:** only assigned records, only after vault release; decrypt on reveal.
- **DoD:** matches `v4/screens/trustee-view`.

---

## Phase 3 — Surfaces

### ☐ T3.1 — Settings
- **Goal:** account defaults + lifecycle in one place.
- **Changes:** Account · **default encryption** for new records · **Release & activation** (release-after window, check-in reminders/frequency) · Appearance (T0.2) · Language (T0.4) · danger zone.
- **Data:** account-level defaults; release window + check-in cadence.
- **DoD:** matches `v4/screens/settings`.

### ☐ T3.2 — Landing (marketing)
- **Goal:** sell the new direction.
- **Changes:** hero "the half they'll need" · **two-halves** section · "what people leave" (Access/Find/Irreplaceable) · legal + will-pointer notice.
- **Data:** none.
- **DoD:** matches `v4/screens/landing`.

### ☐ T3.3 — Investor page (optional)
- **Goal:** refresh the password-gated `/investor` to the new direction.
- **Changes:** port `v4/screens/investor` content; fill real figures (raise, traction, market, pricing, contact).
- **Data:** keep existing password gating.
- **DoD:** `/investor` reflects v4; placeholders replaced.

---

## Phase 4 — Polish & QA
- ☐ Run the full **demo account** through every migrated screen (owner + both trustees, locked/unlocked).
- ☐ Mobile pass for each screen.
- ☐ Empty / error / loading states.
- ☐ Accessibility (labels, focus, contrast in both light & dark).
- ☐ Remove dead "Secrets/Password" copy and old auth language UI.

---

**Suggested sequence:** T0.1 → T0.3 → T0.4 → T0.5 → T1.1 → T1.2 → T1.3 → T1.4 → T2.x → T3.x → T0.2 (appearance, if shipping) → T4.

*Each ticket links a `v4/screens/*` mockup — open it side-by-side while building.*
