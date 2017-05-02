angular.module('sun').controller('ListaCompraController',function($scope,$http){

  $scope.compras = [];

  var promisse = $http.get('/v1/compras');
    promisse.then(function(retorno){
      $scope.compras = retorno.data;

    }).catch(function(error){
      console.log(error);
    })

    $scope.removerCompra = function(compra) {
     
       $http.delete('/v1/compras/' + compra._id).then(function(){
         
         var indiceCompra = $scope.compras.indexOf(compra);
          $scope.compras.splice(indiceCompra, 1);

      }).catch(function(error){
          console.log(error);

      })

    }

});
