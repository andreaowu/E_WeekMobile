
/*  app.js  */

// create the module and name it eweekApp
var eweekApp = angular.module('eweekApp', ['ngRoute']);

// configure our routes
eweekApp.config(function($routeProvider) {
	$routeProvider

		.when('/:filter', {
			templateUrl : 'pages/all-events.html',
			controller  : 'EventListCtrl'
		})

		.otherwise({
			redirectTo : '/'
		});
});

