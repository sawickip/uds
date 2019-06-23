const withPreact = require('@zeit/next-preact');
const withSass = require('@zeit/next-sass');

module.exports = withPreact(withSass({
    cssModules: true,
    webpack(config, options) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });
      return config;
    }
}));