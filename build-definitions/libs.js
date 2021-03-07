const bundleLibs = require("./libs/bundleLibs");
  
module.exports = () => {
    return bundleLibs([
        "./node_modules/jquery/dist/jquery.js",        
    ], "libs.js", "");    
};