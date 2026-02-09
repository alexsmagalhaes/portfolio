import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import importPlugin from "eslint-plugin-import";
import perfectionist from "eslint-plugin-perfectionist";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import securityPlugin from "eslint-plugin-security";
import { defineConfig, globalIgnores } from "eslint/config";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

  {
    plugins: {
      perfectionist,
      react: reactPlugin,
      import: importPlugin,
      security: securityPlugin,
      "react-hooks": reactHooks,
    },
    rules: {
      "@next/next/no-page-custom-font": "off",
      curly: ["error", "all"],
      "arrow-parens": ["error", "always"],
      "brace-style": ["error", "1tbs", { allowSingleLine: false }],
      "no-mixed-operators": "error",
      "react/jsx-curly-brace-presence": [
        "error",
        { props: "never", children: "never" },
      ],
      "react/jsx-curly-newline": [
        "error",
        { multiline: "consistent", singleline: "consistent" },
      ],
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react-hooks/config": "error",
      "react-hooks/error-boundaries": "error",
      "react-hooks/component-hook-factories": "error",
      "react-hooks/gating": "error",
      "react-hooks/globals": "error",
      "react-hooks/immutability": "error",
      "react-hooks/preserve-manual-memoization": "error",
      "react-hooks/purity": "error",
      "react-hooks/refs": "error",
      "react-hooks/set-state-in-effect": "error",
      "react-hooks/set-state-in-render": "error",
      "react-hooks/static-components": "error",
      "react-hooks/unsupported-syntax": "warn",
      "react-hooks/use-memo": "error",
      "react-hooks/incompatible-library": "warn",
      "perfectionist/sort-classes": [
        "error",
        { type: "natural", order: "asc" },
      ],
      "perfectionist/sort-decorators": [
        "error",
        { type: "natural", order: "asc" },
      ],
      "perfectionist/sort-enums": ["error", { type: "natural", order: "asc" }],
      "perfectionist/sort-heritage-clauses": [
        "error",
        { type: "natural", order: "asc" },
      ],
      "perfectionist/sort-imports": [
        "error",
        { type: "natural", order: "asc" },
      ],
      "perfectionist/sort-intersection-types": [
        "error",
        { type: "natural", order: "asc" },
      ],
      "perfectionist/sort-jsx-props": [
        "error",
        {
          type: "natural",
          order: "asc",
          ignoreCase: true,
          customGroups: [
            { groupName: "key", elementNamePattern: "^key$" },
            { groupName: "id", elementNamePattern: "^(id|name|ref)$" },
            { groupName: "className", elementNamePattern: "^className$" },
            { groupName: "callback", elementNamePattern: "^on.+" },
          ],
          groups: [
            "key",
            "id",
            "className",
            "shorthand",
            "unknown",
            "callback",
          ],
        },
      ],
      "perfectionist/sort-named-exports": [
        "error",
        { type: "natural", order: "asc" },
      ],
      "perfectionist/sort-named-imports": [
        "error",
        { type: "natural", order: "asc" },
      ],
      "perfectionist/sort-sets": ["error", { type: "natural", order: "asc" }],
      "perfectionist/sort-switch-case": [
        "error",
        { type: "natural", order: "asc" },
      ],
      "perfectionist/sort-union-types": [
        "error",
        { type: "natural", order: "asc" },
      ],
      "perfectionist/sort-variable-declarations": [
        "error",
        { type: "natural", order: "asc" },
      ],
      "import/no-default-export": "warn",
      "security/detect-object-injection": "warn",
      "security/detect-non-literal-fs-filename": "warn",
      "security/detect-eval-with-expression": "error",
      "security/detect-new-buffer": "warn",
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "func-style": ["error", "declaration", { allowArrowFunctions: false }],
      "capitalized-comments": [
        "error",
        "always",
        {
          ignorePattern: "pragma|ignored",
          ignoreInlineComments: false,
          ignoreConsecutiveComments: false,
        },
      ],
      "require-await": "error",
    },
  },
  globalIgnores([".next/", "out/", "build/**", "next-env.d.ts"]),
]);

export default eslintConfig;
