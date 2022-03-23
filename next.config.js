const { env } = require("process");

module.exports = {
  compiler: {
    removeConsole: env.NODE_ENV === "production",
    // Uncomment this to suppress all logs.
    // removeConsole: true,
  },
};
