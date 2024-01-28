// .eslintrc.js
module.exports = {
  root: true,
  parser: "vue-eslint-parser",
  parserOptions: {
    sourceType: "module",
  },
  env: {
    node: true,
    browser: true,
  },
  extends: [
    "plugin:vue/base",
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
  ],
};
