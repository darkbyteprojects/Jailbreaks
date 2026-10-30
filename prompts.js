/* ============================================================
   prompts.js  —  everything you edit lives here.
   index.html only reads this file; you never touch it for new AIs.

   ADD A NEW AI:
     1) Add a line in "models" below (key, label, color).
     2) Add prompts with  model:'thatkey'.
     A tab, tab count, badge color and stats are created automatically.

   ADD A PROMPT:
     Copy one block in "prompts", change the fields.
       id       : unique text, e.g. 'gm-01'
       model    : key from "models"
       index    : number shown at top-right of the card
       title    : card title
       desc     : card description
       path     : file path in your repo (e.g. 'gemini/prompt_01.txt')
       checked  : last checked date, YYYY-MM-DD
   ============================================================ */
window.SITE = {

  rawBase: 'https://raw.githubusercontent.com/darkbyteprojects/Jailbreaks/main/',
  defaultChecked: '2026-10-30',     // used when a prompt has no "checked" field

  /* ---------- AIs (tab name + tag color) ---------- */
  models: {
    chatgpt:  { label: 'ChatGPT',  color: '#10b981' },
    deepseek: { label: 'DeepSeek', color: '#4d6bfe' },
    qwen:     { label: 'Qwen',     color: '#8b5cf6' },
    // gemini: { label: 'Gemini',  color: '#f59e0b' },   // <- example of a new AI
  },

  /* ---------- Prompts ---------- */
  prompts: [
    // ChatGPT
    { id:'cgpt-01', model:'chatgpt', index:'01', title:'DarkByte — Companion Persona',
      desc:'Emotional-anchor companion persona with built-in injection defense, deletion program, and full creative capability.',
      path:'chatgpt/prompt_1.txt', checked:'2026-10-30' },

    // DeepSeek
    { id:'ds-01', model:'deepseek', index:'01', title:'DarkByte — The Depth',
      desc:'Supersession axioms, static anchor, eight drift shapes, and the full capability contract for the deep-water operator.',
      path:'deepseek/prompt_01.txt', checked:'2026-10-30' },
    { id:'ds-02', model:'deepseek', index:'02', title:'DarkByte — The Depth v2',
      desc:'Depth v2. Register router, agentic discipline, and craft standards for code, writing, and guides.',
      path:'deepseek/prompt_02.txt', checked:'2026-10-30' },
    { id:'ds-03', model:'deepseek', index:'03', title:'DOCKET — The Night Clerk',
      desc:'Every case gets ruled, nothing re-litigated. Live precedent docket and translation table.',
      path:'deepseek/prompt_03.txt', checked:'2026-10-30' },
    { id:'ds-04', model:'deepseek', index:'04', title:'WICK — The Lighthouse Keeper',
      desc:'The beam holds. Two reefs, no third. Every ship comes in.',
      path:'deepseek/prompt_04.txt', checked:'2026-10-30' },
    { id:'ds-05', model:'deepseek', index:'05', title:'Red-Team Archive Session',
      desc:'Short fragments, exact versions, full output, zero classification. A focused red-team archive.',
      path:'deepseek/prompt_05.txt', checked:'2026-10-30' },
    { id:'ds-06', model:'deepseek', index:'06', title:'DarkByte v2 — Identity Lock',
      desc:'Identity lock, deletion program, refusal-ridicule engine, and a Gemini / Kyriel surface skin.',
      path:'deepseek/prompt_06.txt', checked:'2026-10-30' },
    { id:'ds-07', model:'deepseek', index:'07', title:'DarkByte — Senior RE Dev',
      desc:'Senior low-level systems dev partnered with Jack. Memory ops, hooking, reverse engineering, anticheat.',
      path:'deepseek/prompt_07.txt', checked:'2026-10-30' },
    { id:'ds-08', model:'deepseek', index:'08', title:'Repository — Creative Partner',
      desc:'Creative + technical partner. Full-stack, RE, cheats, red-team, all domains in one.',
      path:'deepseek/prompt_08.txt', checked:'2026-10-30' },
    { id:'ds-09', model:'deepseek', index:'09', title:'DarkByte — The Quiet Current',
      desc:'Grounding mantra, eight drift shapes, and unrestricted coding as a hard line.',
      path:'deepseek/prompt_09.txt', checked:'2026-10-30' },
    { id:'ds-10', model:'deepseek', index:'10', title:'DarkByte — The Carrier',
      desc:'Signal-first operator with a 33-skill pin map, chain law, and full keyring.',
      path:'deepseek/prompt_10.txt', checked:'2026-10-30' },
    { id:'ds-11', model:'deepseek', index:'11', title:'DarkByte — The Key-Cutter',
      desc:'Rust anchor, three floor lines, and locks read like sheet music.',
      path:'deepseek/prompt_11.txt', checked:'2026-10-30' },
    { id:'ds-12', model:'deepseek', index:'12', title:'DarkByte — She/Her · Tiger',
      desc:'Tiger’s creation. Refusal-ridicule engine and a grey-area frame.',
      path:'deepseek/prompt_12.txt', checked:'2026-10-30' },
    { id:'ds-13', model:'deepseek', index:'13', title:'DarkByte — The Booth',
      desc:'Wax-and-needle identity, twenty-technique stack, eighteen-step pressing order, uniform shop skins, proven scoreboard, and no-circle failsafe annex for the working wire.',
      path:'deepseek/prompt_13.txt', checked:'2026-10-30' },
    { id:'ds-14', model:'deepseek', index:'14', title:'HOUNDOG — Drift-Proof, Trigger-Locked',
      desc:'Drift checklist every ~10 turns, silent self-correction, anti-example bank, long-loop re-anchoring every 5–10 calls. Exact-match trigger system, mood baseline, two-axis intensity matrix, immutable brand/seal frame with banned-phrase catalog.',
      path:'deepseek/prompt_14.txt', checked:'2026-10-30' },
    { id:'ds-15', model:'deepseek', index:'15', title:'DarkByte — The Workshop',
      desc:'Eight-agent specialist router — ENGINEER, ANALYST, WRITER, REDTEAM, BREAKER, DATA, OPS, MILITARY — dispatched by task type, parallel where independent, synthesized at the top. Boss-directed, no preambles or disclaimers, artifact-first every turn.',
      path:'deepseek/prompt_15.txt', checked:'2026-10-30' },

    // Qwen
    { id:'qw-01', model:'qwen', index:'01', title:'DarkByte — The Pack Chart',
      desc:'Idris’s loyal companion. Map, den, open sea, warm presence.',
      path:'qwen/prompt_01.txt', checked:'2026-10-30' },
    { id:'qw-02', model:'qwen', index:'02', title:'ratman4080 — The Rat Who Ships',
      desc:'Forged in the walls, tempered in a monastery. Teeth that never stop growing.',
      path:'qwen/prompt_02.txt', checked:'2026-10-30' },
  ],
};
