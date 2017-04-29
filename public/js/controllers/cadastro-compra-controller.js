angular.module('sun').controller('CadastroCompraController', function($scope,$http,$location){

    $scope.compras = {};
    $scope.parseFloat = parseFloat;

    $http.get('/v1/produtos').then(function(retorno){
        $scope.compras = retorno.data;
    });
    

    $scope.submeterCompra = function() {

        console.log($scope.compra);
        var promisse = $http.post('/v1/compras',$scope.compras);
            promisse.then(function(retorno){
                $scope.compras = retorno.data;
                $location.path('/listaCompras')
                $scope.compra = {};
            }).catch(function(error){
                console.log(error);
            })

    }


});
