const { env } = require("process");
const path = require("path");
const Dotenv = require("dotenv-webpack");
module.exports = {
  compiler: {
    removeConsole: env.NODE_ENV === "production",

    // Uncomment this to suppress all logs.
    // removeConsole: true,
  },
  webpack: (config) => {
    config.plugins = config.plugins || [];
    config.plugins = [
      ...config.plugins,
      new Dotenv({
        path: path.join(__dirname, `/env/.${env.NODE_ENV}.env`),
        systemvars: true,
      }),
    ];
    return config;
  },
};
