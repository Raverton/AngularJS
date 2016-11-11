var App = angular.module('App', [ 'ngRoute', 'controllers', 'services' ]);

App.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl : 'views/agente/agente.html',
		controller : 'AgenteCtrl'
	})

	.when('/create', {
		templateUrl : 'views/agente/cadastrarAgente.html',
		controller : 'AgenteCtrl'
	})

	.when('/editarAgente', {
		templateUrl : 'views/agente/editarAgente.html',
		controller : 'AgenteCtrl'
	})

	.when('/infracao', {
		templateUrl : 'views/infracoes/infracoes.html',
		controller : 'InfraCtrl'
	})

	.when('/cadinfracao', {
		templateUrl : 'views/infracoes/cadastroInfracao.html',
		controller : 'InfraCtrl'//,
		//controller : 'AgenteCtrl'
	})
		.when('/veiculos', {
		templateUrl : 'views/Veiculos/veiculos.html',
		controller : 'veiculosCtrl'//,
		//controller : 'AgenteCtrl'
	})
		.when('/cadveiculos', {
		templateUrl : 'views/infracoes/cadastroInfracao.html',
		controller : 'InfraCtrl'//,
		//controller : 'AgenteCtrl'
	})

});

App.value('API', 'http://localhost:8080/primefaces-app/service/');