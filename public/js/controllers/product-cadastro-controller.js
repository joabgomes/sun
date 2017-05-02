angular.module('sun').controller('CadastroProdutosController', function($scope,$http,$location,$routeParams){

    $scope.produto = {};
    $scope.titulo = '';

    if($routeParams.produtoId){

     var promisse = $http.get('/v1/produtos/' + $routeParams.produtoId);
      promisse.then(function(produto){
        $scope.produto = produto.data;
      }).catch(function(error){
          console.log(error);
      });

  };

    if($routeParams.produtoId){
        $scope.titulo = 'Editar Produto';
    }else{
        $scope.titulo = 'Cadastrar Produto';
    }

    $scope.submeterProduto = function() {
        if($routeParams.produtoId){
           $http.put('/v1/produtos/' + $scope.produto._id, $scope.produto).then(function(){
               console.log('Produto editado com sucesso!');
               $location.path('/produtos');
            }).catch(function(error){
                console.log('Não foi possível editar!');
            });
                
        }else {
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
    }

});
