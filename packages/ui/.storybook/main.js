const { resolve } = require('path')

function webpackFinal (config) {
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      {
        loader: 'style-loader'
      },
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          modules: true
        }
      },
      {
        loader: 'sass-loader'
      }
    ],
    include: resolve(__dirname, '..', 'src')
  })
  return config
}

module.exports = {
  webpackFinal,
  addons: [
    '@storybook/addon-storysource',
  ]
}
