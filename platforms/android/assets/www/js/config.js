//Setup Angular Arrival
var MyApp = {},
$$ = Dom7;

MyApp.config = {};

MyApp.angular = angular.module('MyApp', []);
MyApp.angular.config(['$compileProvider', function($compileProvider){
	$compileProvider.debugInfoEnabled(false);
}]);

MyApp.fw7 = {
		app : new Framework7({
			material: true,
			fastClicks: true,
			notificationHold: 3000,
			modalTitle: "Kasha",
			materialRipple: false
		}),
		options : {
			uniqueHistory: true
		},
		views : [],
		domAccess: $$
};

MyApp.fw7.app.showPreloader('Please wait');