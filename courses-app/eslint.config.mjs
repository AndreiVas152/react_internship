import {Linter} from "eslint";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import prettierPlugin from "eslint-plugin-prettier";

const config = {
    root: true,
    env: {
        browser: true,
        es2021: true,
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "./tsconfig.json",
    },
    plugins: {
        "@typescript-eslint": typescriptPlugin,
        "prettier": prettierPlugin,
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
    ],
    rules: {
        "prettier/prettier": [
            "error",
            {
                printWidth: 80,
                trailingComma: "es5",
                semi: true,
                jsxSingleQuote: true,
                singleQuote: true,
                useTabs: true,
                endOfLine: "auto",
                "max-len": ["error", {code: 80}],
                importOrder: [
                    "^react(.*)$",
                    "<THIRD_PARTY_MODULES>",
                    "./types",
                    "^[.](?!.*.(scss|css)$).*$",
                    "(.*).(scss|css)$",
                ],
                importOrderSeparation: true,
                importOrderSortSpecifiers: true,
            },
        ],
        "@typescript-eslint/no-namespace": "off",
        "no-duplicate-imports": "error",
    },
    files: ["**/*.ts, **/*.tsx"],
};

export default config;