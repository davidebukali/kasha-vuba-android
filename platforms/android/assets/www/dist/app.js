var MyApp={},$$=Dom7;MyApp.config={},MyApp.angular=angular.module("MyApp",[]),MyApp.angular.config(["$compileProvider",function(n){n.debugInfoEnabled(!1)}]),MyApp.fw7={app:new Framework7({material:!0,fastClicks:!0,notificationHold:3e3,modalTitle:"Kasha",materialRipple:!1}),options:{uniqueHistory:!0},views:[],domAccess:$$},MyApp.fw7.views.push(MyApp.fw7.app.addView(".view-main",MyApp.fw7.options)),MyApp.fw7.app.showPreloader("Please wait"),MyApp.angular.factory("InitService",["$document",function(n){"use strict";var e={},o={ready:[]};function t(){var e=MyApp.fw7;document.addEventListener("backbutton",function(n){n.preventDefault(),t?(clearInterval(i),navigator.app.exitApp()):t=!0},!1);var o,t=!1,i=setInterval(function(){t=!1},2e3);(o=$.Deferred(),document.addEventListener("deviceready",function(){var e=navigator.connection.type;setTimeout(function(){e=navigator.connection.type;var n={};n[Connection.UNKNOWN]="Unknown connection",n[Connection.ETHERNET]="Ethernet connection",n[Connection.WIFI]="WiFi connection",n[Connection.CELL_2G]="Cell 2G connection",n[Connection.CELL_3G]="Cell 3G connection",n[Connection.CELL_4G]="Cell 4G connection",n[Connection.CELL]="Cell generic connection",(n[Connection.NONE]="No network connection")==n[e]||"Unknown connection"==n[e]?o.reject():o.resolve()},1e3)},!1),o).then(function(){var n=cordova.InAppBrowser.open("https://kasha.co.ke","_self","location=no,zoom=no,hidden=yes,toolbar=no,clearcache=no,clearsessioncache=no");n.addEventListener("loadstop",function(){n.show(),e.app.hidePreloader()}),n.addEventListener("exit",function(){n.close(),navigator.app.exitApp()})}).fail(function(){var n;n="Check your internet connection",MyApp.fw7.app.addNotification({message:n,button:{text:"Close",color:"blue"}}),e.app.hidePreloader(),e.views[0].router.loadPage("html/error.html")})}return e.addEventListener=function(n,e){o[n].push(e)},n.ready(function(){-1===document.URL.indexOf("http://")&&-1===document.URL.indexOf("https://")?(console.log("Using Cordova/PhoneGap setting"),document.addEventListener("deviceready",t,!1)):(console.log("Using web browser setting"),t())}),e}]),MyApp.angular.controller("IndexPageController",["$scope","InitService","$compile",function(o,n,t){"use strict";n.addEventListener("ready",function(){var e;console.log("IndexPageController: ok, DOM ready"),MyApp.fw7.domAccess(document).on("pageInit",function(n){e=n.detail.page.name,console.log("page is "+e),t(n.target)(o),setTimeout(function(){o.$apply()},1)})})}]);