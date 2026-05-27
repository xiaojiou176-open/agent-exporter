<p align="center">
  <img src="https://em-content.zobj.net/source/apple/391/satellite-antenna_1f4e1.png" width="120" alt="satellite antenna" />
</p>

<h1 align="center">AgentExport</h1>

<p align="center">
  <strong>beam your agent config to any planet</strong>
</p>

<p align="center">
  <a href="https://github.com/xiaojiou176-open/agent-export/stargazers"><img src="https://img.shields.io/github/stars/xiaojiou176-open/agent-export?style=flat&color=yellow" alt="Stars"></a>
  <a href="https://github.com/xiaojiou176-open/agent-export/commits/main"><img src="https://img.shields.io/github/last-commit/xiaojiou176-open/agent-export?style=flat" alt="Last Commit"></a>
  <a href="LICENSE"><img src="https://img.shields.io/github/license/xiaojiou176-open/agent-export?style=flat" alt="License"></a>
</p>

<p align="center">
  <a href="#what-you-get">What You Get</a> •
  <a href="#install">Install</a> •
  <a href="#how-it-work">How It Work</a> •
  <a href="#ecosystem">Ecosystem</a>
</p>

---

AgentExport is a Rust workbench that exports your agent setup — skills, prompts, tools, modes — to every coding-agent surface in one shot. Configure once. Beam everywhere.

```
┌──────────────────────────────────────┐
│  LOCAL-FIRST          ████████ 100%  │
│  SOURCE-TRACEABLE     ████████ 100%  │
│  TYPING REQUIRED      ░░░░░░░░   0%  │
│  VIBES                ████████ ZERO  │
│                                FILLER│
└──────────────────────────────────────┘
```

> One config, many agents. One beam, many platforms.

## What You Get

| Surface | What |
|---|---|
| `agent-export cockpit` | Visual workbench. Pick targets, hit beam. |
| `agent-export studio` | Live preview each agent's surface before you ship. |
| `agent-export policies` | Per-agent guardrails. Same intent, different houses. |
| `agent-export skill catalog` | One source of truth, fanned out to N hosts. |
| `agent-export cli` | Reproducible exports. Diff what changed. Roll back clean. |

> [!IMPORTANT]
> Local-first by default. No silent telemetry. No cloud round-trip. Your data stays on your machine until you explicitly ship it somewhere.

## Install

```bash
git clone https://github.com/xiaojiou176-open/agent-export.git
cd AgentExport
# follow the per-stack quickstart in INSTALL.md or docs/
```

Three commands. No `curl | sh`. No login. Read what you run.

Install break? Open your favorite agent and say *"Read AGENTS.md and bootstrap AgentExport for me."* Agent fix own brain. Long version: [`docs/`](./docs/).

## How It Work

The repo is seven layers — exactly the seven commits in `git log`. New work goes in as small named PRs. No 50-file mystery commits.

| Layer | What |
|---|---|
| `chore: scaffold` | License, governance, hygiene gates, CI scaffolding. |
| `feat(core)` | The primary engine. The reason AgentExport exists. |
| `feat(modules)` | Packages, adapters, services, plugins. The second floor. |
| `feat(contracts)` | Schemas, configs, public boundaries. Other code talks here. |
| `test:` | Receipts. Everything in this layer must run. |
| `feat(ops)` | Scripts, infra, CI helpers, build glue. |
| `docs:` | Public docs surface. The pretty face. |

`git log` reads like a building floor plan. Look once, know the whole shape.

## Ecosystem

AgentExport lives in the ***Me family**: three personal tools. command-style names, stupid-simple jobs.

| Repo | What |
|---|---|
| [**AgentExport**](https://github.com/xiaojiou176-open/agent-export) *(you here)* | beam your agent config to any planet |
| [**BrewMe**](https://github.com/xiaojiou176-open/BrewMe) | wake up, news already brewed |
| [**AgentGangGang**](https://github.com/xiaojiou176-open/AgentGangGang) | five AIs in one sidebar |

Cross-family taste:
[**AgentExport**](https://github.com/xiaojiou176-open/agent-export) ·
[**BrewMe**](https://github.com/xiaojiou176-open/BrewMe) ·
[**OpenVibeCoding**](https://github.com/xiaojiou176-open/OpenVibeCoding) ·
[**proofyard**](https://github.com/xiaojiou176-open/proofyard).

## Star This Repo

If AgentExport saves you a click, an hour, or a headache — star costs zero. Fair trade. ⭐

[![Star History Chart](https://api.star-history.com/svg?repos=xiaojiou176-open/agent-export&type=Date)](https://star-history.com/#xiaojiou176-open/agent-export&Date)

## Also by Yifeng[Terry] Yu

- **[BrewMe](https://github.com/xiaojiou176-open/BrewMe)** — wake up, news already brewed
- **[AgentGangGang](https://github.com/xiaojiou176-open/AgentGangGang)** — five AIs in one sidebar
- **[OpenVibeCoding](https://github.com/xiaojiou176-open/OpenVibeCoding)** — AI codes overnight, you ship in the morning
- **[proofyard](https://github.com/xiaojiou176-open/proofyard)** — every claim ships with its receipt
- **[dealyard](https://github.com/xiaojiou176-open/dealyard)** — let prices fight, you sit and watch

## License

MIT — small print, big freedom.
