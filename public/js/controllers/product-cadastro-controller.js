angular.module('sun').controller('CadastroProdutosController', function($scope,$http,$location,$routeParams){

    $scope.produto = {};

    $scope.submeterProduto = function() {
        var promisse = $http.post('/v1/produtos/',$scope.produto);
            promisse.then(function(retorno){
                console.log(retorno);
                $scope.produto = retorno.data;
                $location.path('/produtos')
                $scope.produto = {};
            }).catch(function(error){
                console.log(error);
            });
    }

});
