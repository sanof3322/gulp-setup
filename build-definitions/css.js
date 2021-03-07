const bundleCSS = require("./libs/bundleCSS");

module.exports = () => {
    return bundleCSS([
        "./app/src/paralax.css",
        "./app/src/styles.scss",
    ], "styles.css", "", true);    
};