const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'nSANE dESIGNs',
    },
  },
  configureWebpack: {
    watchOptions: {
      ignored: /node_modules/,
      poll: true,
    },
    experiments: {
      topLevelAwait: true,
    },
  },
});
