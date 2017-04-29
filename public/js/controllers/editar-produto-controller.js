angular.module('sun').controller('EditarProdutoController',function($location,$scope,$http,$routeParams){

  $scope.editarPro = {};
  var produtoId = $routeParams.produtoId;

  console.log(produtoId);

  if(produtoId){

     var promisse = $http.get('/v1/produtos/' + produtoId);
     console.log(promisse);
      promisse.then(function(produto){
        console.log(produto);
        $scope.editarPro = produto.data;
        console.log($scope.editarPro);

      }).catch(function(error){
          console.log(error);
      });

  }

  $scope.editarProduto = function(){
    if(produtoId) {
        var promisse = $http.put('/v1/produtos/' + $scope.editarPro._id, $scope.editarPro);
        promisse.then(function(){
          console.log('Produto editado com sucesso!');
          $location.path('/produtos');
        }).catch(function(error){
            console.log('Não foi possível editar!');
        })
      }
    };


});
