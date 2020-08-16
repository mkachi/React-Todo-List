'use strict'

const config = require('../config')

const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const eslintRule = () => ({
  test: /\.(js|jsx|ts|tsx)$/,
  enforce: 'pre',
  loader: 'eslint-loader',
  include: [config.src],
  options: {
    formatter: require('eslint-friendly-formatter'),
    emitWarning: !config.showLintError
  }
})

const copyRule = () => {
  const result = [{
    from: `${config.public}/favicon.ico`,
    to: 'favicon.ico'
  }, {
    from: `${config.public}/manifest.json`,
    to: 'manifest.json'
  }, {
    from: `${config.public}/robots.txt`,
    to: 'robots.txt'
  }]

  if (config.usePWA) {
    result.push({
      from: `${config.public}/pwa.js`,
      to: 'pwa.js'
    })
  }

  return result
}


module.exports = {
  entry: {
    vendor: ['react', 'react-dom'],
    app: `${config.src}/App.tsx`
  },
  output: {
    path: config.out,
    filename: './[name].[chunkhash].js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  module: {
    rules: [ //
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                auto: true
              }
            }
          }
        ]
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: true
          }
        }
      },
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            minimize: true
          }
        }]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          name: 'assets/images/[hash].[ext]',
          limit: 10000
        }
      },
      {
        test: /\.(woff|woff2|ttf|eot|otf)$/,
        loader: 'url-loader',
        options: {
          name: 'assets/fonts/[hash].[ext]',
          limit: 10000
        }
      },
      {
        test: /\.(mp4|webm)$/,
        loader: 'url-loader',
        options: {
          name: 'assets/videos/[hash].[ext]',
          limit: 10000
        }
      },
      {
        test: /\.(ogg|mp3|wav|flac|aac)$/,
        loader: 'url-loader',
        options: {
          name: 'assets/audios/[hash].[ext]',
          limit: 10000
        }
      },
      ...(config.useLint ? [eslintRule()] : [])
    ]
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin(),
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['build']
    }),
    new CopyWebpackPlugin({
      patterns: copyRule()
    })
  ]
}
