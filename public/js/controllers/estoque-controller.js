angular.module('sun').controller('EstoqueController',function($location,$scope,$http,$routeParams){

    $scope.estoque = [];
    $scope.mensagem = '';
    $scope.produtos = {};

    $http.get('/v1/estoque').then(function(produtos){

        $scope.estoque = produtos.data;
   
     }).catch(function(err){
        console.log(err);
    });

    if($routeParams.id){

        $http.get('/v1/estoque/' + $routeParams.id).then(function(produtos){

            $scope.produtos = produtos.data;
        
        }).catch(function(error){
            console.log(error);
        });
    }

    $scope.editar = function(){

        if($routeParams.id){
            $http.put('/v1/produtos/' + $scope.produtos._id, $scope.produtos).then(function(){
                console.log('Produto editado com sucesso!');
                $location.path('/estoque')
            }).catch(function(error){
                console.log(error);
            });
        }
    }

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