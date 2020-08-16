'use strict'

const path = require('path')

module.exports = {
  src: path.resolve(__dirname, '../src'),
  out: path.resolve(__dirname, '../build'),
  assets: path.resolve(__dirname, '../src/assets'),
  public: path.resolve(__dirname, '../public'),
  showLintError: true,
  useLint: true,
  useAnalyzer: false,
  // App.tsx
  // serviceWorker.register()
  usePWA: false,
  devServer: {
    host: 'localhost',
    port: 9000,
    proxy: 9001
  },
  analyzer: {
    host: 'localhost',
    port: 9002
  }
}
