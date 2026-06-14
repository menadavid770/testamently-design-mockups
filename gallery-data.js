// Shared screen list for the v1 and v2 galleries. Add a screen here and it shows in both.
window.GALLERY_GROUPS = [
  { title:'Marketing & Auth', who:'public — no login', screens:[
    ['landing','Landing page','Hero, value props, pricing teaser, footer'],
    ['login','Login','Email/password sign-in with lockout + social'],
    ['signup','Sign up','Create account — name, email, phone, password'],
    ['how-it-works','How it works','Explainer of the dead-man-switch flow'],
    ['pricing','Pricing','Free / Premium / Gold / ZK tiers'],
    ['security','Security','Encryption tiers + zero-knowledge explainer'],
    ['blog','Blog','Article index'],
    ['privacy','Privacy policy','Legal'],
    ['terms','Terms','Legal'],
  ]},
  { title:'First-time experience', who:'fresh account', screens:[
    ['first-login','First login (onboarding)','Empty vault auto-opens the add-secret form'],
  ]},
  { title:'Owner experience', who:'demo@testamently.com — Sarah Mitchell', screens:[
    ['vault','Vault','Secrets, folders, search, per-secret status'],
    ['trustees','Trustees','Manage the people who can unlock the vault'],
    ['settings','Settings','Account, plan, MFA, danger zone'],
    ['heartbeat','Heartbeat','Dead-man-switch check-in schedule'],
    ['family','Family','Shared family members'],
  ]},
  { title:'Trustee experience', who:'michael.demo@testamently.com — Michael Mitchell', screens:[
    ['trustee-home','Trustee home','The trustee’s own logged-in dashboard'],
    ['trustee-locked','Trustee — locked vault','Active vault, not yet triggered — countdown + upload'],
    ['trustee-unlocked','Trustee — unlocked vault','Vault triggered — reveal each assigned secret'],
  ]},
  { title:'Invitations', who:'invite links', screens:[
    ['trustee-accept','Trustee invite — accepted','Confirmation after accepting a trustee invite'],
    ['trustee-decline','Trustee invite — declined','Confirmation after declining a trustee invite'],
    ['family-accept','Family invite','“Sarah invited you to join their family plan”'],
  ]},
  { title:'New screens — to implement', who:'proposals · not yet in the app', proposed:true, screens:[
    ['first-login-simple','Simplified onboarding — Step 1 ⭐','David’s feedback: the current onboarding asks for too much. Step 1 strips it to the essentials — quick-pick what to protect, name it, paste it, Save. Protection level + trustees are deferred. Friendly and fast (“20 seconds”, progress bar).'],
    ['first-login-simple-step2','Simplified onboarding — Step 2','After the first secret is saved: “Who should receive it?” — one trusted person (name + email + optional relationship). Shows the just-saved secret for context. Skippable.'],
    ['first-login-simple-done','Simplified onboarding — Done','“You’re protected.” Confirms setup is complete, then surfaces the deferred settings as OPTIONAL, anytime: stronger encryption (per secret, from its card) and when access activates (check-in timing in Settings).'],
    ['first-login-banner','First login + guidance banner','The real (full) onboarding screen with a “what to do” banner added on top — a 3-step explainer so a first-time user knows exactly what this screen is for. Alternative to simplifying.'],
    ['welcome-intro','Welcome / first sign-in','Standalone onboarding before the vault: explains what Testamently is, then lets the user choose which secrets to protect and add trustees. Interactive — click the cards.'],
    ['minimal-main','Main screen — minimalist','A pared-back take on the vault: hairline rows instead of cards, lots of whitespace, status dots, reveal-on-hover. Same demo content, far less visual noise.'],
    ['minimal-settings','Settings — minimalist + new options','Minimalist settings that DEFINE the deferred options: default encryption level for new records, and Release & activation (release-after timing, check-in reminders + frequency). Answers “where do encryption / when-to-activate live”.'],
    ['minimal-secret-detail','Per-record encryption & activation','Open a record to OVERRIDE the defaults just for it: encryption level (Standard→Zero-knowledge) and when trustees get it (on inactivity / a specific date / after death verified). The “global default in Settings + per-record override” pattern.'],
  ]},
];
