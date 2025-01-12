import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const importSortGroupings = {
  groups: [
    // Packages. `react` related packages come first.
    // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
    ["^react", "^@?\\w", "^@?\\w.*\\u0000$"],
    // Absolute imports
    ["^(src|@)/", "^(src|@)/.*\\u0000$"],
    // relative imports
    ["^\\.", "^\\..*\\u0000$"],
  ],
};

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
    "plugin:tailwindcss/recommended",
  ),
  ...compat.plugins("react", "@typescript-eslint", "simple-import-sort"),
  {
    rules: {
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { varsIgnorePattern: "^_" },
      ],
      "simple-import-sort/imports": ["error", importSortGroupings],
      "simple-import-sort/exports": "error",
      "react/prop-types": "off",
      "tailwindcss/no-custom-classname": [
        "warn",
        {
          whitelist: [
            "-filling",
            "cursor-fill",
            "cursor-fill-\\[.*\\]",
            "scrollbar-hidden",
            "filter-muted-foreground",
          ],
        },
      ],
    },
  },
];

export default eslintConfig;
