angular.module('sun').controller('CadastroProdutosController', function($scope,$http){

    $scope.produto = {};

    $scope.submeterProduto = function() {

        console.log($scope.produto);
        var promisse = $http.post('/v1/produtos',$scope.produto);
            promisse.then(function(retorno){
                $scope.produto = retorno.data;
                $scope.produto = {};
            }).catch(function(error){
                console.log(error);
            })

    }


});