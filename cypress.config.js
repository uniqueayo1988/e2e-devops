const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://abookstore.azurewebsites.ne/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  reporter: "junit",
  reporterOptions: {
    mochaFile: "results/TEST-[hash].xml"
  }
});

require('@applitools/eyes-cypress')(module);
