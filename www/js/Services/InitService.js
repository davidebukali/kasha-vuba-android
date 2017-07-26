/*jslint browser: true*/
/*global console, Framework7, MyApp, $document*/

MyApp.angular.factory('InitService', 
		[
		 '$document', 
		 function (
				 $document) {
			 'use strict';

			 var pub = {},
			 eventListeners = {
					 'ready' : []
			 };

			 pub.addEventListener = function (eventName, listener) {
				 eventListeners[eventName].push(listener);
			 };

			 function onReady() {
				 var fw7 = MyApp.fw7;

				 //Override default back button behavior
				 document.addEventListener('backbutton', onBackKeyDown, false);
				 function onBackKeyDown(e) {
					 e.preventDefault();
				 }
				 
				 var browser = cordova.InAppBrowser.open(
						 'http://kasha.rw/vuba',
						 '_self',
						 'location=no,zoom=no,hidden=yes,toolbar=no,clearcache=no,clearsessioncache=no');
				 browser.addEventListener("loadstop", function(){
					 browser.show();
					 fw7.app.hidePreloader();
				 });

				 browser.addEventListener("exit", function () {
					 browser.close();
					 navigator.app.exitApp();
				 });
			 }

			 // Init
			 (function () {
				 $document.ready(function () {

					 if (document.URL.indexOf("http://") === -1 && document.URL.indexOf("https://") === -1) {
						 // Cordova
						 console.log("Using Cordova/PhoneGap setting");
						 document.addEventListener("deviceready", onReady, false);
					 } else {
						 // Web browser
						 console.log("Using web browser setting");
						 onReady();
					 }

				 });
			 }());

			 return pub;

		 }]);