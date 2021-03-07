const bundleMe = require("./libs/bundleMe");

module.exports = () => {
    return bundleMe([
        "./app/src/app-source.js",
    ], "app.js", "");    
};