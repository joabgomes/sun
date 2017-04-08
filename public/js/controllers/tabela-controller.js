angular.module('sun').controller('TabelaController',function($scope,$http){

    $scope.usuarios = [];

   var promisse = $http.get('/v1/usuarios'); //Captura os dados enviados para a rota do servidor
    promisse.then(function(retorno){
        $scope.usuarios = retorno.data;
    }).catch(function(error){
        console.log(error);
    })
});