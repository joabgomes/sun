angular.module('sun').controller('VendaProdutoController',function($scope){

    
    $scope.produtos = [];

    $scope.mostraProduto = function() {

        $scope.produtos.push({
            produto:$scope.produto,
            preco:$scope.preco,
            quantidade:$scope.quantidade
        
        });

        $scope.produto = "";
        $scope.preco = "";
        $scope.quantidade = "";

    };

    $scope.getTotal = function(){

        var total = 0;

        for(var i = 0; i < $scope.produtos.length; i++){

            var produto = $scope.produtos[i];
            total +=(produto.preco * produto.quantidade);

        }

        return total;
    };

});