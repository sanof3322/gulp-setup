const bundleCSS = require("./libs/bundleCSS");
// const bla = require("../node_modules/bootstrap/scss/boostrap.scss")


module.exports = () => {
    return bundleCSS([
        //"./node_modules/bootstrap/dist/css/bootstrap.css",
        // "./node_modules/bootstrap/scss/bootstrap.scss",
        "./app/src/styles.scss"
    ], "styles.css", "", true);    
};