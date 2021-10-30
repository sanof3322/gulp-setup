const { watch, series, parallel } = require('gulp');
const browserSync = require("browser-sync").create();

let libs = require("./build-definitions/libs");
libs.displayName = "libs";
exports.libs = libs;

let app = require("./build-definitions/app");
app.displayName = "app";
exports.app = app;

let css = require("./build-definitions/css");
css.displayName = "css";
exports.css = css;

const reload = (done) => {
    browserSync.reload();
    done();
};
const serve = () => {   
    browserSync.init({
        logLevel: "silent", //to disable browserSync snippet message
    //    socket: {
    //        domain: "localhost:3000"
    //    },
    //    proxy: "local.dev"
        server: {
            baseDir: "app",
        },
   });
   console.log("watching files for changes");        
   watch(['./src/styles.scss'], series(css, reload));    
   
   watch('./app/index.html', reload);

   //watching all js files except ones in node_modules and Bundles folders
   watch(['./src/app-source.js'], series(app, reload));
}
exports.serve = serve;

exports.default = series(
    parallel(
        app,
        css
    ),
 
    //watchTasks
    serve
 );