angular.module('sun').controller('EstoqueController',function($scope,$http){

    $scope.estoque = [];
    $scope.mensagem = '';

    $http.get('/v1/estoque').then(function(produtos){

        $scope.estoque = produtos.data;
   
     }).catch(function(err){
        console.log(err);
    });

    $scope.removerProduto = function(produto){

        $http.delete('/v1/produtos/' + produto._id).then(function(){
    
            var indiceProduto = $scope.estoque.indexOf(produto);
             $scope.estoque.splice(indiceProduto, 1);
             $scope.mensagem = 'O produto ' + produto.nm_item + 'foi apagado com sucesso do estoque !';
        
        }).catch(function(err){
            console.log(err);
        });

    }

});