const bundleLibs = require("./libs/bundleLibs");
// const bla = require("../node_modules/bootstrap/dist/js/bootstrap.bundle.js")
  
module.exports = () => {
    return bundleLibs([
        "./node_modules/jquery/dist/jquery.js", 
        // "./node_modules/bootstrap/dist/js/bootstrap.js", //bootstrap causes onclick event to file multiple times
        // "./node_modules/bootstrap/dist/js/bootstrap.bundle.js",
        // "./node_modules/object-hash/dist/object_hash.js"    
    ], "libs.js", "");    
};