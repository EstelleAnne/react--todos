/**
 * Created by lhj on 16/3/29.
 */
var path = require('path');

module.exports = function(config) {
  config.set({
    basePath: '',
    browsers: [ 'Chrome' ],
    frameworks: ['jasmine'],
    files: [
      'tests/**/*.js'
    ],
    preprocessors: {
      'tests/**/*.js': ['webpack']
    },
    webpack: { //kind of a copy of your webpack config
      module: {
          loaders: [
              {
                  test: /\.js$/,
                  loader: 'babel',
                  exclude: path.resolve(__dirname, 'node_modules')
              },
              {
                  test: /\.scss$/,
                  loader: "style!css!sass",
                  exclude : /node_modules/
              },
              {
                  test: /\.json$/,
                  loader: 'json'
              }
          ]
      },
      externals: {
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
      }
      //,
      //resolve: {
      //    alias: {
      //        "ReactTransformTenchmark": "./node_modules/@beisen/talent-core/libs/react-transform-benchmark"
      //    }
      //}
    },

    webpackServer: {
      noInfo: true //please don't spam the console when running in karma!
    },

    plugins: [
      'karma-webpack',
      'karma-jasmine',
      'karma-chrome-launcher'
    ],

    webpackServer: {
      noInfo: true //please don't spam the console when running in karma!
    },

    plugins: [
      'karma-webpack',
      'karma-jasmine',
      'karma-chrome-launcher'
    ],

    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: false
  })
};
