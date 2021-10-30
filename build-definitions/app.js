const bundleMe = require("./libs/bundleMe");

module.exports = () => {
    return bundleMe([
        "./src/app-source.js",
    ], "app.js", "");    
};