App.controller('InfraCtrl', function($scope, InfracaoService, $route,$routeParams,$location,EnvioService){
	$scope.infracao = [];
	$scope.infracaoEditar = {};

	$scope.notFound = false;
	InfracaoService.list().then(function(data){
		$scope.infracao = data.data;
		if(data.data.length == 0){
			$scope.notFound = true;
		}
	},function(data){
		console.log("data", data);
	});
	$scope.infracaoEditar = EnvioService.getParametro();
	
	$scope.deletar = function(id){
		InfracaoService.remover(id).then(function(id) {
			$route.reload();
			
		})
	}
	
	$scope.editar = function(item){
		$scope.infracaoEditar = {};
		EnvioService.addParametro(item);
		$location.path('/editarinfracao');
	}

	/*$scope.create = function(infracaoEditar){
		console.log("Ta chegando aqui brother")
		
		InfracaoService.salvar(infracao).then(function(data){
				$location.path('/');
			});
	}*/
	
	
	$scope.cadastrarInfracao = function(infracao){
		console.log(infracao);
		var data = {
			idlocal: infracao.idlocal,
			idtipo:  infracao.idtipo,
			placa:   infracao.placa,
			velocidade:infracao.velocidade
		};

		InfracaoService.create(data).then(function(data){
			$location.path('/');
		});
	}
	
	$scope.atualizar = function(infracao){
		InfracaoService.update(infracao).then(function(data){
				$location.path('/');
			});
	}
	
});