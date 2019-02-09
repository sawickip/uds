const withPreact = require('@zeit/next-preact');
const withSass = require('@zeit/next-sass');

module.exports = withPreact(withSass({
    cssModules: true
}));