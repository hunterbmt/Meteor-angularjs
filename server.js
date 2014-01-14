var connect = Npm.require("connect");
var fs = Npm.require("fs");
var path = Npm.require("path");
var Fiber = Npm.require("fibers");

WebApp.connectHandlers
    .use(connect.query())
    .use(function (req, res, next) {
      // Need to create a Fiber since we're using synchronous http calls
      Fiber(function() {
        WebApp.addHtmlAttributeHook(function(){
          return 'ng-app="meteorapp"';
        });
        next();
      }).run();
    });
