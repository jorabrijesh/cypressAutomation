const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: false,
  video: false,
  viewportWidth: 1920,
  viewportHeight: 1080,
  screenshotsFolder: "mochawesome-report/assets",
  chromeWebSecurity: false,

  firefoxGcInterval: {
    runMode: null,
    openMode: null,
  },
  e2e: {
    setupNodeEvents(on, config) {
      
    },
  },
  retries: {
    runMode: 2,
    openMode: 0,
  },

  execTimout: 60000,
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 60000,
  requestTimeout: 10000,
  responseTimeout: 30000,
});
