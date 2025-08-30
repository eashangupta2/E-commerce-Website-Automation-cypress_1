const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "utgouw", // Add your Project ID here
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});