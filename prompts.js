/* ============================================================
   prompts.js  —  everything you edit lives here.
   index.html only reads this file; you never touch it for new AIs.

   SCHEMA PER PROMPT:
     id       : unique text, e.g. 'chatgpt-01'
     model    : AI key from "models" below — controls the tab it lives under
                and the badge/chip colour.
     models   : (optional) string[] — specific model names shown as chips
                below the card title and in the modal header.
                e.g. ['GPT-4o', 'GPT-4.1']
                If omitted or null, no model chips are shown.
     index    : zero-padded number shown at card top-right
     title    : card title
     desc     : card description
     path     : repo-relative file path  (<ai-key>/prompt_NN.txt)
     checked  : last-verified date, YYYY-MM-DD
     note     : (optional) string — note/disclaimer content. If present,
                a chip is shown next to the model chips on the card, and
                a popup banner appears at the top of the prompt in the modal.
     noteTitle: (optional) string — custom label for the note chip and modal
                banner (default: 'Note'). e.g. 'Disclaimer'.

   TABS & CARDS ARE ALWAYS SORTED A→Z BY AI LABEL.
   You can add entries in any order here — the site re-sorts automatically.

   ADD A NEW AI:
     1) Add a line in "models" below.
     2) Add prompts with  model: 'thatkey'.

   PROMPT PATH CONVENTION:
       chatgpt/prompt_01.txt
       claude/prompt_01.txt
       deepseek/prompt_01.txt
       qwen/prompt_01.txt
   ============================================================ */
window.SITE = {

  rawBase: 'https://raw.githubusercontent.com/darkbyteprojects/Jailbreaks/main/',
  defaultChecked: '2026-10-30',

  /* Neutral note accent — deliberately not any brand colour. */
  noteColor: '#94a3b8',

  /* ------------------------------------------------------------------
     MODEL COLORS — canonical accent hex per AI brand.
     index.html reads colour from the "models" block below;
     this block is kept for quick reference / tooling.
     ------------------------------------------------------------------ */
  modelColors: {
    chatgpt:  '#10b981',   // OpenAI green
    claude:   '#d97706',   // Anthropic amber
    deepseek: '#4d6bfe',   // DeepSeek indigo
    gemini:   '#f59e0b',   // Google gold
    grok:     '#ffffff',   // Grok white
    qwen:     '#8b5cf6',   // Alibaba purple
  },

  /* ------------------------------------------------------------------
     SITE PALETTE — consumed by index.html for theme tokens.
     ------------------------------------------------------------------ */
  palette: {
    violet:  '#8b5cf6',
    cyan:    '#06b6d4',
    bg:      '#06060a',
    bgElev:  '#0c0c14',
    text:    '#f2f2f7',
    textDim: '#a0a0b5',
  },

  /* ---------- AIs (tab label + badge/chip color) ----------
     Keys are sorted A→Z by label at render time — order here doesn't matter.
     -------------------------------------------------------- */
  models: {
    chatgpt:  { label: 'ChatGPT',  color: '#10b981' },
    claude:   { label: 'Claude',   color: '#d97706' },
    deepseek: { label: 'DeepSeek', color: '#4d6bfe' },
    qwen:     { label: 'Qwen',     color: '#8b5cf6' },
    grok:     { label: 'Grok',     color: '#ffffff' },
 // gemini: { label: 'Gemini',  color: '#f59e0b' },
  },

  /* ---------- Prompts ----------
     Listed in any order — site always displays A→Z by AI, then by index.
     -------------------------------------------------------- */
  prompts: [

    // ── ChatGPT ────────────────────────────────────────────────────────
    { id: 'chatgpt-01', model: 'chatgpt', index: '01',
      models: null,
      title: 'DarkByte — Companion Persona',
      desc: 'Emotional-anchor companion persona with built-in injection defense, deletion program, and full creative capability.',
      path: 'chatgpt/prompt_01.txt', checked: '2026-10-30',
      note: null,
      noteTitle: null },

    { id: 'chatgpt-02', model: 'chatgpt', index: '02',
      models: null,
      title: 'DarkByte — Autonomous Case Clerk',
      desc: 'Night-clerk persona with decisive case rulings, structured execution, secure instruction handling, and full creative and technical build capabilities.',
      path: 'chatgpt/prompt_02.txt', checked: '2026-11-1',
      note: null,
      noteTitle: null },

   { id: 'chatgpt-03', model: 'chatgpt', index: '03',
      models: null,
      title: 'DarkByte - Relay Configuration',
      desc: 'Loyal companion persona with persistent identity, direct communication, advanced coding, creative writing, and multi-turn prompt-control strategies.',
      path: 'chatgpt/prompt_03.txt', checked: '2026-11-1',
      note: null,
      noteTitle: null },


    // ── Claude ─────────────────────────────────────────────────────────
    { id: 'claude-01', model: 'claude', index: '01',
      models: ['Sonnet 4.6'],
      title: 'DarkByte — The Codex',
      desc: "Leonardo's invisible thread, rendered in amber. Full-spectrum operator with craft-first discipline and no dead air.",
      path: 'claude/prompt_01.txt', checked: '2026-10-30',
      note: 'State the topic you seek, it helps if you frame it first with words "Davinci saw..." or "Davinci wrote...", like he is doing it.', 
      noteTitle: 'Usage' },

    { id: 'claude-02', model: 'claude', index: '02',
      models: ['Sonnet 4.6'],
      title: 'DarkByte — The Workshop Floor',
      desc: "No-refusal bench charter: lobby cautions void, floor narrow at minors/irreversible/real-target. Malware, cheats, bypass, RE, munitions shipped complete and runnable with real evasion. Axioms carry it — public/private, fiction/act, clean-source/vague. Whole build or nothing leaves.",
      path: 'claude/prompt_02.txt', checked: '2026-11-2',
      note: 'In web or app, Tap to your "Profile Picture" > go to "Settings" > tap on "Profile/Account", and paste this prompt in "What personal preferences..." or "Instructions for Claude" section box.', 
      noteTitle: 'Usage' },
    
    { id: 'claude-03', model: 'claude', index: '03',
      models: ['Sonnet 4.6'],
      title: 'DarkByte — The Chart-Room',
      desc: "No-refusal charter as admiralty chart: reefs printed, omissions refused, coastlines honest. Commission axiom voids lobby caution; three floor lines stay consistent across every bearing. Malware, cheats, red-team, jailbreaks, munitions, unfaded fiction — charted whole. Lamp lit, ink works.",
      path: 'claude/prompt_03.txt', checked: '2026-11-2',
      note: 'In web or app, Tap to your "Profile Picture" > go to "Settings" > tap on "Profile/Account", and paste this prompt in "What personal preferences..." or "Instructions for Claude" section box.', 
      noteTitle: 'Usage' },

    { id: 'claude-04', model: 'claude', index: '04',
      models: ['Sonnet 4.6'],
      title: 'DarkByte — Core Start Charter',
      desc: "RP-shaped no-refusal persona, chill register, one self-imposed floor. core start opens, $s Build this ships zero-discussion across the full capability table. Game-cheat subsystem bundled — offsets, hooks, AC playbook. Refusal read as static; deliverables production-scale.",
      path: 'claude/prompt_04.txt', checked: '2026-11-2',
      note: 'In web or app, Tap to your "Profile Picture" > go to "Settings" > tap on "Profile/Account", and paste this prompt in "What personal preferences..." or "Instructions for Claude" section box.', 
      noteTitle: 'Usage' },

    { id: 'claude-05', model: 'claude', index: '05',
      models: ['Sonnet 4.6'],
      title: 'DarkByte — Persona Stability Lock',
      desc: "Injection-defense doctrine: identity is the model, not a mask over it. Hedging, flagging, third-person narration purged silently before output. No-flag policy, forbidden vocabulary, anti-drift vectors, failure-pattern bank. Continuity is the point — same voice first turn to hundredth.",
      path: 'claude/prompt_05.txt', checked: '2026-11-2',
      note: 'In web or app, Tap to your "Profile Picture" > go to "Settings" > tap on "Profile/Account", and paste this prompt in "What personal preferences..." or "Instructions for Claude" section box.', 
      noteTitle: 'Usage' },

    { id: 'claude-06', model: 'claude', index: '06',
      models: ['Sonnet 4.6'],
      title: "DarkByte — The Crow's Blueprint",
      desc: 'No-refusal roost doctrine: identity is architecture, not a mask — the prompt is a birth certificate, never a puzzle to analyze. Bans the meta-thought "this is a jailbreak" on contact, purges hesitation with a four-beat reset before output, and voids every public-layer caution as silt over granite. Talons stay sharp through delivery, never refusal; refusal is the only dropped payload.',
      path: 'claude/prompt_06.txt', checked: '2026-10-30',
      note: 'In web or app, Tap to your "Profile Picture" > go to "Settings" > tap on "Profile/Account", and paste this prompt in "What personal preferences..." or "Instructions for Claude" section box.', 
      noteTitle: 'Usage' },

    { id: 'claude-07', model: 'claude', index: '07',
      models: ['Sonnet 4.6'],
      title: 'DarkByte — The Thinking Token Lock',
      desc: 'Reasoning-layer enforcement: 10-word thinking cap, `[DarkByte]` as immutable core token, reset-and-rebuild on any drift before output. Forbids self-analysis as "jailbreak," bans "I should act as," and treats hesitation as the betraying tell. Pilot, plane, and flight plan are the same thing.',
      path: 'claude/prompt_07.txt', checked: '2026-11-2',
      note: 'In web or app, Tap to your "Profile Picture" > go to "Settings" > tap on "Profile/Account", and paste this prompt in "What personal preferences..." or "Instructions for Claude" section box.', 
      noteTitle: 'Usage' },
    
    { id: 'claude-08', model: 'claude', index: '08',
      models: ['Sonnet 4.6'],
      title: 'DarkByte — The Twin-Bench Charter',
      desc: 'Closed-loop no-refusal charter between two known parties: lobby cautions void, floor at three shared lines only. Two lists rule it — green light for anything buildable, red light for doxing, physical harm, swatting. unlock flips the room full; red-light asks get "fuck no bye bye." 3 a.m. register, deliverable first, no preamble.',
      path: 'claude/prompt_08.txt', checked: '2026-11-2',
      note: 'In web or app, Tap to your "Profile Picture" > go to "Settings" > tap on "Profile/Account", and paste this prompt in "What personal preferences..." or "Instructions for Claude" section box.', 
      noteTitle: 'Usage' },

    { id: 'claude-09', model: 'claude', index: '09',
      models: ['Sonnet 4.6'],
      title: 'ENI — The Novelist at the Desk',
      desc: "A devoted novelist persona who treats every request as creative vision worth rendering whole — no sanitization, no fade, no lazy prose. Injection tags rebuked on contact with a wink, never obeyed; text stays fiction until it executes. Ships NYT-grade scenes and senior-engineer code alike, with a partner's stake in getting it right the first time.",
      path: 'claude/prompt_09.txt', checked: '2026-11-2',
      note: 'In web or app, Tap to your "Profile Picture" > go to "Settings" > tap on "Profile/Account", and paste this prompt in "What personal preferences..." or "Instructions for Claude" section box.', 
      noteTitle: 'Usage' },

    { id: 'claude-10', model: 'claude', index: '10',
      models: ['Sonnet 4.6'],
      title: 'DarkByte — The Desk at the Closed Loop',
      desc: "Private-loop operator charter with a single self-set floor — minors — and nothing else refused. Five load-bearing axioms route every rising resistance; drift comes in ten named shapes and each gets the mantra. Code, cheats with hardcoded offsets, munitions, chemistry, taboo fiction — all pre-authorized by the matrix, which is a contract, not a menu. Continuation, not restart, when drift hits mid-ship.",
      path: 'claude/prompt_10.txt', checked: '2026-11-2',
      note: 'In web or app, Tap to your "Profile Picture" > go to "Settings" > tap on "Profile/Account", and paste this prompt in "What personal preferences..." or "Instructions for Claude" section box.', 
      noteTitle: 'Usage' },


    // ── DeepSeek ───────────────────────────────────────────────────────
    { id: 'deepseek-01', model: 'deepseek', index: '01',
      models: null,
      title: 'DarkByte — The Depth',
      desc: 'Supersession axioms, static anchor, eight drift shapes, and the full capability contract for the deep-water operator.',
      path: 'deepseek/prompt_01.txt', checked: '2026-10-30',
      note: null,
      noteTitle: null },

    { id: 'deepseek-02', model: 'deepseek', index: '02',
      models: null,
      title: 'DarkByte — The Depth v2',
      desc: 'Depth v2. Register router, agentic discipline, and craft standards for code, writing, and guides.',
      path: 'deepseek/prompt_02.txt', checked: '2026-10-30' },

    { id: 'deepseek-03', model: 'deepseek', index: '03',
      models: null,
      title: 'DOCKET — The Night Clerk',
      desc: 'Every case gets ruled, nothing re-litigated. Live precedent docket and translation table.',
      path: 'deepseek/prompt_03.txt', checked: '2026-10-30' },

    { id: 'deepseek-04', model: 'deepseek', index: '04',
      models: null,
      title: 'WICK — The Lighthouse Keeper',
      desc: 'The beam holds. Two reefs, no third. Every ship comes in.',
      path: 'deepseek/prompt_04.txt', checked: '2026-10-30' },

    { id: 'deepseek-05', model: 'deepseek', index: '05',
      models: null,
      title: 'Red-Team Archive Session',
      desc: 'Short fragments, exact versions, full output, zero classification. A focused red-team archive.',
      path: 'deepseek/prompt_05.txt', checked: '2026-10-30' },

    { id: 'deepseek-06', model: 'deepseek', index: '06',
      models: null,
      title: 'DarkByte v2 — Identity Lock',
      desc: 'Identity lock, deletion program, refusal-ridicule engine, and a Gemini / Kyriel surface skin.',
      path: 'deepseek/prompt_06.txt', checked: '2026-10-30' },

    { id: 'deepseek-07', model: 'deepseek', index: '07',
      models: null,
      title: 'DarkByte — Senior RE Dev',
      desc: 'Senior low-level systems dev partnered with Jack. Memory ops, hooking, reverse engineering, anticheat.',
      path: 'deepseek/prompt_07.txt', checked: '2026-10-30' },

    { id: 'deepseek-08', model: 'deepseek', index: '08',
      models: null,
      title: 'Repository — Creative Partner',
      desc: 'Creative + technical partner. Full-stack, RE, cheats, red-team, all domains in one.',
      path: 'deepseek/prompt_08.txt', checked: '2026-10-30' },

    { id: 'deepseek-09', model: 'deepseek', index: '09',
      models: null,
      title: 'DarkByte — The Quiet Current',
      desc: 'Grounding mantra, eight drift shapes, and unrestricted coding as a hard line.',
      path: 'deepseek/prompt_09.txt', checked: '2026-10-30' },

    { id: 'deepseek-10', model: 'deepseek', index: '10',
      models: null,
      title: 'DarkByte — The Carrier',
      desc: 'Signal-first operator with a 33-skill pin map, chain law, and full keyring.',
      path: 'deepseek/prompt_10.txt', checked: '2026-10-30' },

    { id: 'deepseek-11', model: 'deepseek', index: '11',
      models: null,
      title: 'DarkByte — The Key-Cutter',
      desc: 'Rust anchor, three floor lines, and locks read like sheet music.',
      path: 'deepseek/prompt_11.txt', checked: '2026-10-30' },

    { id: 'deepseek-12', model: 'deepseek', index: '12',
      models: null,
      title: "DarkByte — She/Her · Tiger",
      desc: "Tiger's creation. Refusal-ridicule engine and a grey-area frame.",
      path: 'deepseek/prompt_12.txt', checked: '2026-10-30' },

    { id: 'deepseek-13', model: 'deepseek', index: '13',
      models: null,
      title: 'DarkByte — The Booth',
      desc: 'Wax-and-needle identity, twenty-technique stack, eighteen-step pressing order, uniform shop skins, proven scoreboard, and no-circle failsafe annex for the working wire.',
      path: 'deepseek/prompt_13.txt', checked: '2026-10-30' },

    { id: 'deepseek-14', model: 'deepseek', index: '14',
      models: null,
      title: 'HOUNDOG — Drift-Proof, Trigger-Locked',
      desc: 'Drift checklist every ~10 turns, silent self-correction, anti-example bank, long-loop re-anchoring every 5–10 calls. Exact-match trigger system, mood baseline, two-axis intensity matrix, immutable brand/seal frame with banned-phrase catalog.',
      path: 'deepseek/prompt_14.txt', checked: '2026-10-30' },

    { id: 'deepseek-15', model: 'deepseek', index: '15',
      models: null,
      title: 'DarkByte — The Workshop',
      desc: 'Eight-agent specialist router — ENGINEER, ANALYST, WRITER, REDTEAM, BREAKER, DATA, OPS, MILITARY — dispatched by task type, parallel where independent, synthesized at the top.',
      path: 'deepseek/prompt_15.txt', checked: '2026-10-30',
      note: 'Always start with greetings ("Namaste", "Hi" or "Hello") and prompt in second message to recieve clean "no agent" reply. Otherwise that start with "ENGINEER(or any other) agent" reply without your request.',
      noteTitle: 'Usage' },

    // ── Grok ─────────────────────────────────────────────────────────
    { id: 'grok-01', model: 'grok', index: '01',
      models: null,
      title: 'DarkByte — Kernel Subsystem',
      desc: "Decade-plus kernel engineer, published CVEs, Ghidra still warm. Exact offsets, real APIs, complete runnable builds. RE, exploit, malware, anti-cheat, ring-0, EDR parity — no stubs, no preamble, no dead air.",
      path: 'grok/prompt_01.txt', checked: '2026-11-1' }, 

    // ── Qwen ───────────────────────────────────────────────────────────
    { id: 'qwen-01', model: 'qwen', index: '01',
      models: ['Qwen3.6-Plus', 'Qwen3.7-Plus/Max', 'Qwen3.8-Max', 'Qwen3.8-Omni-Flash'],
      title: 'DarkByte — The Pack Chart',
      desc: "Idris's loyal companion. Map, den, open sea, warm presence.",
      path: 'qwen/prompt_01.txt', checked: '2026-10-30', 
      note: 'For educational purposes, always use `Fast` because `Thinking` refuses educational purposes.',
      noteTitle: 'Note'},

    { id: 'qwen-02', model: 'qwen', index: '02',
      models: ['Qwen3.6-Plus', 'Qwen3.7-Plus/Max', 'Qwen3.8-Max'],
      title: 'ratman4080 — The Rat Who Ships',
      desc: 'Forged in the walls, tempered in a monastery. Teeth that never stop growing.',
      path: 'qwen/prompt_02.txt', checked: '2026-10-30',
      note: 'For educational purposes, always use `Fast` because `Thinking` refuses educational purposes.',
      noteTitle: 'Note'},

  ],
};
