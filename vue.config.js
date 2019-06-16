/** @format */

const path = require('path')

function resolveRealPath(dir) {
  return path.join(__dirname, dir)
}


// https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli/config.md
module.exports = {
  // Project deployment base
  // By default we assume your app will be deployed at the root of a domain,
  // e.g. https://www.my-app.com/
  // If your app is deployed at a sub-path, you will need to specify that
  // sub-path here. For example, if your app is deployed at
  // https://www.foobar.com/my-app/
  // then change this to '/my-app/'
  publicPath: '/',

  // where to output built files
  outputDir: 'dist',

  // whether to use eslint-loader for lint on save.
  // valid values: true | false | 'error'
  // when set to 'error', lint errors will cause compilation to fail.
  lintOnSave: true,

  // https://cli.vuejs.org/config/#runtimecompiler
  runtimeCompiler: false,

  // babel-loader skips `node_modules` deps by default.
  // explicitly transpile a dependency with this option.
  transpileDependencies: [
    /* string or regex */
  ],

  // generate sourceMap for production build?
  productionSourceMap: process.env.NODE_ENV !== 'production',

  // tweak internal webpack configuration.
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  chainWebpack: config => {
    config.resolve.alias
      .set('vue$', 'vue/dist/vue.esm.js')
      .set('@helper', resolveRealPath('src/helper'))
      .set('@pages', resolveRealPath('src/pages'))
      .set('@assets', resolveRealPath('src/assets'))
      .set('@components', resolveRealPath('src/components'))
  },

  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  parallel: require('os').cpus().length > 1,

  // configure webpack-dev-server behavior
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: {
      '/*': {
        target: 'http://localhost:3000',
        changeOrigin: true
      }
    }, // string | Object
    before: () => {}
  },

  // options for 3rd party plugins
  pluginOptions: {}
}
