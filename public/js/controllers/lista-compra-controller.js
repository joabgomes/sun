angular.module('sun').controller('ListaCompraController',function($scope,$http){

  $scope.compras = [];

  var promisse = $http.get('/v1/compras');
    promisse.then(function(retorno){
      $scope.compras = retorno.data;

    }).catch(function(error){
      console.log(error);
    })

    $scope.removerCompras = function(compras) {
      console.log(compras);
      var promisse = $http.delete('/v1/compras/' + compras._id);

      promisse.then(function(){
          var indiceCompras = $scope.compras.indexOf(compras);
          $scope.compras.splice(indiceCompra, 1);

      }).catch(function(error){
          console.log(error);

      })

    }

});
