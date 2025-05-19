import { codeInput } from "@sanity/code-input";
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { latexInput } from "sanity-plugin-latex-input";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemaTypes";

export default defineConfig({
  name: "default",
  title: "Portfolio",

  projectId: "hjgqpc4c",
  dataset: "portfolio",

  plugins: [structureTool(), visionTool(), codeInput(), latexInput()],

  schema: {
    types: schemaTypes,
  },
});
