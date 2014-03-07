
/*  app.js  */

// create the module and name it eweekApp
var eweekApp = angular.module('eweekApp', ['ngRoute']);

// configure our routes
eweekApp.config(function($routeProvider) {
	$routeProvider

		// route for the home page
		.when('/', {
			templateUrl : 'pages/all-events.html',
			controller  : 'EventListCtrl'
		})

		// route for the about page
		.when('/:filter', {
			templateUrl : 'pages/all-events.html',
			controller  : 'EventListCtrl'
		})

		.otherwise({
			redirectTo : '/'
		});
});

