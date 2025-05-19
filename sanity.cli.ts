import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: "hjgqpc4c",
    dataset: "portfolio",
  },
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
});
