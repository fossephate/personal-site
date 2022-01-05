// tailwind.config.js

module.exports = {
  darkMode: "class",
  //   plugins: [require("nightwind")],
  purge: ["./src/**/*.tsx"],
  variants: {
    // The 'active' variant will be generated in addition to the defaults
    extend: {
      backgroundColor: ["active"],
    },
  },
};
