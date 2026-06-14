TESTAMENTLY — DESIGN MOCKUPS (captured from the live app)
=========================================================

WHAT THIS IS
  Every screen of the real Testamently app (testamently.com), each captured at
  DESKTOP (1440px) and MOBILE (390px), frozen into a standalone, editable HTML
  file. CSS is inlined and scripts are removed, so each file opens offline and
  renders exactly like the real app — but is safe to edit. Tailwind utility
  classes are intact in the markup, so design tweaks are easy.

HOW TO USE  (for David)
  1. Open  index.html  in a browser — it's a gallery of every screen with
     desktop + mobile previews, grouped by area.
  2. Click "Desktop" or "Mobile" on any card to open that screen's editable HTML
     (in the /screens/ folder).
  3. Edit the HTML / inline styles / Tailwind classes to redesign. Nothing here
     is connected to production — these are frozen copies.

FOLDERS
  index.html        gallery / launcher (start here)
  screens/          editable standalone HTML, one per screen+viewport
                    e.g. vault-desktop.html, vault-mobile.html
  shots/            PNG screenshots used as gallery thumbnails

SCREENS INCLUDED  (x2: -desktop / -mobile)
  Marketing/Auth : landing, login, signup, how-it-works, pricing, security,
                   blog, privacy, terms
  First-time     : first-login  (empty vault, onboarding add-secret form)
  Owner          : vault, trustees, settings, heartbeat, family
  Trustee        : trustee-home, trustee-locked, trustee-unlocked
  Invitations    : trustee-accept, trustee-decline, family-accept

DEMO CONTENT
  Owner screens  : demo@testamently.com  (Sarah Mitchell, Premium —
                   10 secrets, 3 folders, 2 trustees)
  Trustee screens: michael.demo@testamently.com (Michael Mitchell)
  First-login    : a fresh throwaway account

NOTES
  - Fonts and a few images load from testamently.com, so keep internet on for
    100% fidelity (layout/colors/text all render offline regardless).
  - Capturing created two throwaway accounts named design.preview.<number>@
    testamently.com with empty vaults — safe to delete from the admin panel.
  - To regenerate after a deploy:
      cd apps/web && node scripts/capture-design-mockups.mjs
    (script lives in the testamently-app repo: apps/web/scripts/)
