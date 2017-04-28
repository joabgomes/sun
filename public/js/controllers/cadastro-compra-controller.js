angular.module('sun').controller('CadastroCompraController', function($scope,$http,$location){

    $scope.compra = {};

    $scope.submeter = function() {

        console.log($scope.compra);
        var promisse = $http.post('/v1/compras',$scope.compra);
            promisse.then(function(retorno){
                $scope.compra = retorno.data;
                $location.path('/listaCompras')
                $scope.compra = {};
            }).catch(function(error){
                console.log(error);
            })

    }


});
