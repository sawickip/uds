const withSass = require('@zeit/next-sass');

module.exports = withSass({
  cssModules: true,
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  }
});