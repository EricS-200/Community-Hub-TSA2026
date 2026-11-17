---
description: >-
  Connect an AI assistant to a running Autodesk Fusion session, plus advanced
  alternatives.
icon: box
---

# Fusion MCP: local CAD assistant

**The overlooked feature:** Autodesk now provides an official **local Fusion MCP server**, built into the desktop application. You do not need to start with an unofficial community script. It lets an MCP-compatible assistant inspect geometry and perform modeling tasks in a _running_ Fusion session.

**Sources:** [Autodesk MCP overview](https://help.autodesk.com/view/fusion360/ENU/?guid=FMCP-OVERVIEW), [connection walkthrough](https://help.autodesk.com/cloudhelp/ENU/ADSKMCP-FusionDesktopMcp/files/ADSKMCP_FusionDesktopMcp_connecting_to_the_fusion_mcp_server_html.html), [official integration configuration](https://github.com/Autodesk/ai-integrations/blob/main/fusion/local-mcp-server/README.md).

## Basic setup: Autodesk's local server

{% stepper %}
{% step %}
### Open desktop Fusion

Install or update Autodesk Fusion and launch the desktop app. The local server needs a running Fusion session.
{% endstep %}

{% step %}
### Enable the local MCP

Go to **Preferences → General → API**. Enable **Fusion MCP Server** under scripting/programming preferences. Note the endpoint shown in Fusion; the documented default is `http://127.0.0.1:27182/mcp`.
{% endstep %}

{% step %}
### Point your client at Fusion

In an MCP-compatible client that accepts streamable HTTP, add a server using Fusion's local URL. For example, Cursor's MCP settings can use the following:

```json
{
  "mcpServers": {
    "fusion": {
      "url": "http://127.0.0.1:27182/mcp"
    }
  }
}
```

Use the port shown in your Fusion preferences if it differs.
{% endstep %}

{% step %}
### Test with a disposable design

Ask the assistant to identify the active document or create a simple, specified test part. Inspect the geometry and feature history before allowing more actions.
{% endstep %}
{% endstepper %}

{% hint style="info" %}
Autodesk documents a Claude Desktop bundle and Cursor configuration in its [official repository](https://github.com/Autodesk/ai-integrations/blob/main/fusion/local-mcp-server/README.md). The exact setup differs by AI client; a browser chat is not automatically connected to a local desktop endpoint.
{% endhint %}

## Real robot-team applications

| Task                        | Why MCP may help                               | What a human must verify                       |
| --------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| Batch-edit named parameters | Faster iteration through dimensional variants  | Dimensions, dependencies, feature regeneration |
| Inspect a complex model     | Locate components, properties, or design state | Correct active document and context            |
| Create a first-pass fixture | Reduce repetitive CAD setup                    | Fit, clearances, manufacturing feasibility     |
| Produce a repeatable tool   | Use small operations as building blocks        | Design intent, safety, compatibility           |

## Local Fusion vs Fusion Data MCP

|                         | Local Fusion MCP                      | Fusion Data MCP                        |
| ----------------------- | ------------------------------------- | -------------------------------------- |
| Main purpose            | Live modeling and document inspection | Cloud project and file/data management |
| Runs where              | Same machine as Fusion                | Autodesk cloud                         |
| Fusion desktop required | Yes                                   | No                                     |
| Auth                    | Local connection                      | Autodesk account OAuth                 |

See [Autodesk's comparison](https://help.autodesk.com/view/fusion360/ENU/?guid=FMCP-OVERVIEW). These are **different servers**, not simply “basic” and “premium” versions of the same connector.

## Advanced and third-party options

* [Autodesk: building Fusion add-ins with MCP](https://www.autodesk.com/products/fusion-360/blog/build-your-own-fusion-add-ins-with-the-fusion-mcp/) — create and test custom automation that uses Fusion's own API.
* [Autodesk University: Fusion, Claude, and MCP 101](https://www.autodesk.com/autodesk-university/class/AI-Connected-Workflows-Fusion-Claude-and-MCP-101-2026) — deeper architectural walkthrough.
* [faust-machines/fusion360-mcp-server](https://github.com/faust-machines/fusion360-mcp-server) — a **third-party experimental** add-in/server with additional tools, including exports. Review installation requirements, repo maintenance, and security before using.
* [Poyraxx/fusion-advanced-mcp-server](https://github.com/Poyraxx/fusion-advanced-mcp-server) — another **unofficial advanced** approach. Treat public code execution and broad API access as high-trust permissions.

{% hint style="danger" %}
Do not run an unreviewed third-party CAD server on a school-managed or shared computer. Make a copy of the design first. Automated CAD is not verification of tolerances, structural safety, or manufacturability.
{% endhint %}

## Troubleshooting

* **No tools:** Fusion may be closed, or MCP disabled under Preferences → General → API.
* **Cannot connect:** verify loopback address and port; the client and Fusion must be on the appropriate machine/network context.
* **Commands do the wrong thing:** inspect the selected document and ask for an explicit, reversible operation.
* **Port changed:** update the client's MCP URL to match.

[Autodesk troubleshooting guide](https://help.autodesk.com/cloudhelp/ENU/ADSKMCP-FusionDesktopMcp/files/ADSKMCP_FusionDesktopMcp_troubleshooting_html.html).
