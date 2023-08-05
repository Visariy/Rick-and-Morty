module.exports = {
  root: true,
  env: {
    "vue/setup-compiler-macros": true,
    browser: true,
    node: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  extends: ["@nuxtjs/eslint-config-typescript", "plugin:prettier/recommended"],
  plugins: [],
  rules: { "prettier/prettier": "warn", "no-console": "off" },
};
