angular.module('sun').controller('CadastroCompraController', function($scope,$http,$location,){

    $scope.compras = {};
    $scope.produtos = {};
    $scope.parseFloat = parseFloat;

    $http.get('/v1/produtos').then(function(retorno){
       
       var produto = $scope.produtos = retorno.data;
       
    }).catch(function(error){
        console.log(error);
    });

    $scope.submeterCompra = function(produto) {

        if($scope.formularioCompra.$valid){

        var promisse = $http.post('/v1/compras',$scope.compras);
            promisse.then(function(retorno){
                $scope.compras = produto, retorno.data;
                $location.path('/listaCompras')
                $scope.compra = {};
            }).catch(function(error){
                console.log(error);
            });
        };

    }

});
