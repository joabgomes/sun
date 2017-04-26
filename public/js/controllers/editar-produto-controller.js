angular.module('sun').controller('EditarProdutoController',function($scope,$http,$routeParams){

  $scope.editarPro = {};
  var produtoId = $routeParams.produtoId;

  console.log(produtoId);

  if(produtoId){

     var promisse = $http.get('/v1/produtos/' + produtoId);
     console.log(promisse);
      promisse.then(function(produto){
        console.log(produto);
          $scope.editarPro = produto;
          console.log($scope.editarPro);

      }).catch(function(error){
          console.log(error);
      })



  }

});
