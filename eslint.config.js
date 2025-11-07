// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");

module.exports = defineConfig([
  ...expoConfig,
  {
    ignores: ["dist/*", "node_modules/*", ".expo/*", "android/*", "ios/*"],
  },
  {
    plugins: {
      "react-native": require("eslint-plugin-react-native"),
    },
    rules: {
      // React Native specific
      "react-native/no-unused-styles": "warn",
      "react-native/no-inline-styles": "off", // Allow inline styles (common with NativeWind)
      "react-native/no-color-literals": "off", // Allow color literals

      // React
      "react/prop-types": "off", // Using TypeScript
      "react/react-in-jsx-scope": "off", // Not needed in React 17+
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // TypeScript
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-explicit-any": "off", // Allow any (can be strict if preferred)
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-require-imports": "off", // Allow require() for images

      // Imports
      "import/no-named-as-default": "off", // Allow default imports with same name

      // Formatting
      "eol-last": ["warn", "always"],
      "semi": ["error", "always"],

      // General
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-debugger": "warn",
      "prefer-const": "warn",
      "no-var": "error",

      // Code quality
      eqeqeq: ["error", "always", { null: "ignore" }],
      curly: ["warn", "all"],
      "no-empty": "warn",
      "no-duplicate-imports": "warn",
    },
  },
]);
