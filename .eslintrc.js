module.exports = {
  extends: [
    "@cybozu/eslint-config/presets/react-typescript-prettier",
    "plugin:@next/next/recommended",
  ],
  rules: {
    "spaced-comment": "off",
    "react/react-in-jsx-scope": "off",
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
      },
    ],
  },
};
