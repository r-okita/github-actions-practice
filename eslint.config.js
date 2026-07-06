import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    rules: {
      // 必要に応じてルールを追加
    },
  },
  {
    ignores: ["node_modules/", "dist/", "build/"],
  },
];