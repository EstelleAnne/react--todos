var path = require('path');
var extend = require('lodash/extend');
var root = path.join(__dirname, "../");

//入口文件
var entry = {
    main: './src/entry.js'
};

options = extend({
  "root": root
  ,"entry": entry
  ,"devtool": "cheap-source-map"
  ,"debug": false
  ,"env": "prod"
},{

})

module.exports =  require("@beisen/talent-core/webpack/desktop/webpack.prod.config")(options);