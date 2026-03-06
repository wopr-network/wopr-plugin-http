import type { WOPRPluginManifest, WOPRPluginContext } from "@wopr-network/plugin-types";

export const manifest: WOPRPluginManifest = {
  id: "http",
  name: "HTTP Fetch",
  version: "0.1.0",
  description: "Provides HTTP fetch capability for making external requests",
  capabilities: [],
  tools: ["http_fetch"],
};

export async function init(ctx: WOPRPluginContext): Promise<void> {
  ctx.security.registerPermission("inject.network");
  ctx.security.registerToolPermission("http_fetch", "inject.network");
  ctx.logger.info("[wopr-plugin-http] Registered inject.network permission and http_fetch tool");
}
