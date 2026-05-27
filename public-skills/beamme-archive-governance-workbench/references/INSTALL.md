# Install

## What you need

1. a local checkout of `BeamMe`
2. `python3`
3. either:
   - `target/release/BeamMe`
   - `target/debug/BeamMe`
   - or a working `cargo` toolchain

The bridge script is:

```text
/absolute/path/to/BeamMe/scripts/beamme_mcp.py
```

## OpenHands-style MCP config

Use `OPENHANDS_MCP_CONFIG.json` as the starting point.

## OpenClaw-style MCP config

Use `OPENCLAW_MCP_CONFIG.json` as the starting point.

## Important boundary

- local stdio only
- repo checkout required
- no hosted service
- no auto-install into a live host root

## First attach check

After wiring the bridge, use one low-risk tool call first:

- `integration_evidence_policy_list`

That proves the bridge is attached before you ask it to work on a workspace.

