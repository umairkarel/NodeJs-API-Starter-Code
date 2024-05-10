module.exports = {
    root: true,
    env: { browser: true, es2020: true, jest: true },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
        "prettier",
        "plugin:prettier/recommended",
    ],
    ignorePatterns: ["dist", ".eslintrc.cjs"],
    parserOptions: { ecmaVersion: "latest", sourceType: "module" },
    settings: { react: { version: "18.2" } },
    plugins: ["react", "react-refresh", "prettier"],
    rules: {
        "prettier/prettier": ["error", {}, { usePrettierrc: true }],
        "react-refresh/only-export-components": [
            "warn",
            { allowConstantExport: true },
        ],
        "react/prop-types": 0, // ignore props validation
        "no-console": "error", // no use of console log
    },
};
