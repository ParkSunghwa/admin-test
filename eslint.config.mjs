// eslint.config.mjs
import js from "@eslint/js";
import next from "@next/eslint-plugin-next";
import prettier from "eslint-config-prettier";
import tseslint from "@typescript-eslint/eslint-plugin";
import tseslintParser from "@typescript-eslint/parser";

export default [
  js.configs.recommended,
  next.configs.coreWebVitals,
  prettier,
  {
    languageOptions: {
      parser: tseslintParser,
      ecmaVersion: "latest",
      sourceType: "module",
    },
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    plugins: {
      "@typescript-eslint": tseslint,
    },
    rules: {
      "linebreak-style": "off",
      "no-nested-ternary": "off",
      "no-undef": "off",
      "no-use-before-define": "off",
      "no-shadow": "off",
      "no-var": "off",
      "no-unused-vars": "off",
      "no-unused-expressions": "off",
      "no-plusplus": "off",
      "no-confusing-arrow": "off",
      "no-underscore-dangle": "off",
      "no-param-reassign": "off",
      "no-lonely-if": "off",
      "no-else-return": "off",
      "no-empty": "off",
      "operator-linebreak": "off",
      "object-curly-newline": "off",
      "object-shorthand": "off",
      "prettier/prettier": "off",
      "spaced-comment": "warn",
      "consistent-return": "off",
      "prefer-const": "warn",
      "import/no-cycle": "off",
      "import/extensions": "off",
      "import/prefer-default-export": "off",
      "import/no-unresolved": "off",
      "import/no-extraneous-dependencies": "off",
      "react-hooks/rules-of-hooks": "warn",
      "react/react-in-jsx-scope": "off",
      "react/no-array-index-key": "warn",
      "react/require-default-props": "off",
      "react/prop-types": "off",
      "react/jsx-filename-extension": ["warn", { extensions: [".ts", ".tsx"] }],
      "react/jsx-props-no-spreading": "off",
      "@next/next/no-document-import-in-page": "off",
      "@next/next/no-sync-scripts": "off",
      "jsx-a11y/no-noninteractive-element-interactions": "off",
      "jsx-a11y/click-events-have-key-events": "off",
      "jsx-a11y/no-static-element-interactions": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "variable",
          format: ["camelCase", "PascalCase", "UPPER_CASE", "snake_case"],
          leadingUnderscore: "allow",
        },
      ],
      "import/order": "off",
    },
  },
];
