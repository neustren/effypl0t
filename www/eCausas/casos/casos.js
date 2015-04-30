angular.module("CasosControllers", ["ArautoSvc, UsuarioControllers"])
    .service("Casos", function($q, Autenticador) {
	this.casos=[];
	this.casoVazio = { Reu: "", NomeUsuario: Autenticador.PrimeiroNome, Descricao: "", UsuarioID: "666", Titulo: "", DataInclusao: 0 };

	this.casoByID= function(casoID) {
            var deferred = $q.defer();
            var caso = this.casos.filter(function (e) {
		return e.ID==casoID; });

	    
	    
            deferred.resolve(caso);
            return deferred.promise;
        };
    })

    .controller('casoViewCtrl', function ($scope, $stateParams, Casos) {
        Casos.casoByID($stateParams.casoID).then(function(c) {
            $scope.caso=c[0];
        });
    })

    .controller("casosRender", function ($scope, Arauto, Casos) {

	$scope.novoCaso=Casos.casoVazio;

	$scope.casos=Casos.casos;

	$scope.atualizarCasos=function(x) {
	    for(var i=0;i<x.rows.length;i++)
	    {
		Casos.casos.push(x.rows.item(i));
	    }
	};

	Arauto.puxarCasos($scope.atualizarCasos);

	$scope.zerarCaso=function() {
	    $cope.novoCaso=Casos.casoVazio; 
	};
	
	$scope.cadastrarCaso=function () {
	    agora=new Date();
	    $scope.novoCaso.DataInclusao=agora.valueOf();
	    Casos.casos.push(novocaso);
	    Arauto.inserirCaso($scope.novoCaso, $scope.zerarCaso);
	    //$scope.novoCaso=$scope.casoVazio;
	};
    });
