var path = require('path');
var extend = require('lodash/extend');

var root = path.join(__dirname, "../");

//i18n
var makeAllFile = require("./geti18n").makeAllFile;

makeAllFile("./src/i18n/*", ["./src/components/*","./node_modules/@beisen/*"],"./dist/i18nAll/" )

//入口文件
var entry = {
    main: './src/entry.js'
};

options = extend({
    "root": root
    ,"entry": entry
    ,"host": "127.0.0.1"
    ,"port": "3001"
    ,"hot": true
    ,"devtool": "cheap-source-map"
    ,"debug": false
    ,"env": "dev"
});
module.exports =  require("@beisen/talent-core/webpack/desktop/webpack.config")(options);