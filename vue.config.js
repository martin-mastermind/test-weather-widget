const { defineConfig } = require('@vue/cli-service');
const Dotenv = require('dotenv-webpack');

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new Dotenv({ systemvars: true })
    ]
  },
  chainWebpack: (config) => {
    config
      .plugin("copy")
      .use(require.resolve("copy-webpack-plugin"), [
        {
          patterns: [
            {
              from: 'public',
              to: 'public'
            }
          ]
        }
      ]);
  }
});
