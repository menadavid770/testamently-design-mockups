# Testamently — New demo account (seed spec)

The demo owner's vault, **rebuilt for the new direction**. Replaces the old password-heavy demo
(Gmail/Netflix/Coinbase logins) with records that fit *"the half they'll need"* — and gives the
three threads equal weight, **including the sentimental ones**. Use this to update `seed:demo`.

**Owner:** Sarah Mitchell · Premium · master password for the one Premium/locked record:
`SeedVault2026`
**Trustees:** Michael Mitchell (Spouse, accepted) · Jennifer Roth (Attorney, accepted) ·
David Klein (Brother, **invited/pending**)

> Convention: the **value** holds the code/secret **and** where the physical item is kept (free
> text). `hint` = what the trustee sees before revealing. One record is intentionally **unassigned**
> (drives the "gap nudge"). Most are `standard` encryption (it's table-stakes).

## Records

### 🔐 Access — the split-knowledge half
| Record | Category | Value (incl. location) | Hint | Enc | Release | Trustees |
|---|---|---|---|---|---|---|
| Home safe — combination & contents | safe_combo | combination + "safe is behind the painting in the study" | "Combination + what's inside" | standard | inactivity | Michael, Jennifer |
| iPhone passcode | phone_device | 6-digit code + "phone is with me / bedside drawer" | "Face ID backup" | standard | inactivity | Michael |
| Bitcoin wallet — PIN & recovery | crypto_wallet | device PIN + "Ledger is in the home safe" · **never the seed phrase** | "Ledger in the safe" | premium 🔒 | inactivity | Michael |
| Spare keys & storage unit | keys_access | where spare keys are + unit no. + gate code | "Garage + Big Yellow unit 214" | standard | inactivity | **— (unassigned)** |
| Old laptop passcode | phone_device | passcode + "laptop in the office cupboard" | — | standard | inactivity | Jennifer |

### 🧭 They'd never find it — knowledge that vanishes
| Record | Category | Value (incl. location) | Hint | Enc | Release | Trustees |
|---|---|---|---|---|---|---|
| My will — solicitor & where it's kept | document | "Hartley & Co (+44…), original with them, copy in home safe" | "The official will" | standard | inactivity | Michael, Jennifer |
| Life-insurance policy | document | "Aviva, policy #ML-4471-982 — would pay out, call them" | "Claim this — it's easy to miss" | standard | inactivity | Jennifer |
| Account abroad (Switzerland) | document | "UBS Geneva, ref…, relationship manager…" | "Few people know this exists" | gold | death_verified | Jennifer |
| Old workplace pension | document | "former employer scheme, provider + ref" | — | standard | inactivity | Michael |

### 🤍 Irreplaceable — sentimental (not monetary)
| Record | Category | Value (incl. location) | Hint | Enc | Release | Trustees |
|---|---|---|---|---|---|---|
| Letter to my children | letter | the letter itself | "Please read together" | standard | inactivity | Michael, Jennifer |
| Where the family photos are | photo | "external drive in the safe + Google Photos on the shared iPad" | "20 years of us" | standard | inactivity | Michael |
| The story behind Grandma's ring | letter | whose it was, the story, who it should go to | "For Emma" | standard | inactivity | Jennifer |

### 🗂️ General — free text
| Record | Category | Value | Hint | Enc | Release | Trustees |
|---|---|---|---|---|---|---|
| Funeral wishes | general | preferences, music, who to tell | — | standard | inactivity | Jennifer |
| Subscriptions to cancel | general | list so no one keeps getting billed | — | standard | inactivity | Michael |

## Resulting demo states (so every UI state is exercised)
- **14 records**, 3 folders (Finances / Personal / Legal & Documents).
- **13 of 14 covered**; "Spare keys & storage unit" is **unassigned** → the gap nudge.
- One **Premium, master-password-locked** record (Bitcoin wallet) → the "Needs master password" state.
- One **pending** trustee (David Klein) → the "Invited · pending" state.
- One **gold / after-death-verified** record (Swiss account) → release-rule variety.
- One **sentimental** record per thread visible high in the list, so the demo *feels* human, not just a safe.
