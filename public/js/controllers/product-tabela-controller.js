angular.module('sun').controller('TabelaProdutosController',function($scope,$http){

  $scope.produtos = [];

  var promisse = $http.get('/v1/produtos');
    promisse.then(function(retorno){
      $scope.produtos = retorno.data;

    }).catch(function(error){
      console.log(error);
    })

    $scope.removerProduto = function(produto) {
      console.log(produto);
      var promisse = $http.delete('/v1/produtos/' + produto._id);

      promisse.then(function(){
          var indiceProduto = $scope.produtos.indexOf(produto);
          $scope.produtos.splice(indiceProduto, 1);

      }).catch(function(error){
          console.log(error);

      })

    }

});
