module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    // Important: return the modified config

    const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

    // config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));
    config.plugins.push(new FriendlyErrorsWebpackPlugin());

    return config;
  }
};
