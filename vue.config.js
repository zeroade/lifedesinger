const webpack = require('webpack')
module.exports = {
  // publicPath: '/my-life-design-platform-dist',
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ]
  }
  // outputDir: process.env.NODE_ENV === 'production' ? '../dist' : 'dist'
}
