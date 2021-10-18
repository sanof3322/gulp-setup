"use strict";

var app = {
  loginTPL: function loginTPL() {
    return (
      /*html*/
      "\n        <div class=\"row\">\n            <div class=\"col-md-3\"></div>\n            <div class=\"col\">\n                <div class=\"card bg-light mb-3 mt-3\">\n                    <div class=\"card-header\">Log In</div>\n                    <div class=\"card-body\">\n                    <h4 class=\"card-title\">Light card title</h4>\n                    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-3\"></div>\n        </div>\n        "
    );
  },
  init: function init() {
    $("#main-content").html(this.loginTPL());
  }
};
app.init();