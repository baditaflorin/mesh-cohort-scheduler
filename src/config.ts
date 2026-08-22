import { createMeshConfig } from "@baditaflorin/mesh-common";

export const config = createMeshConfig({
  appName: "Mesh Cohort Scheduler",
  description: "A browser-local shared availability picker for small cohorts.",
  accentHex: "#5dd39e",
  version: __APP_VERSION__,
  commit: __GIT_COMMIT__,
});
