angular.module('sun').controller('TabelaController',function($scope,$http){

    $scope.usuarios = [];
    $scope.mensagem = '';

   var promisse = $http.get('/v1/usuarios'); //Captura os dados enviados para a rota do servidor
    promisse.then(function(retorno){
        $scope.usuarios = retorno.data;
    }).catch(function(error){
        console.log(error);
    })

    $scope.removerUser = function(usuario){
        var promisse = $http.delete('/v1/usuarios/' + usuario._id);
        
        promisse.then(function(){
            var indiceUser = $scope.usuarios.indexOf(usuario);
            $scope.usuarios.splice(indiceUser, 1);
            $scope.mensagem = 'O usuário ' + usuario.nome + ' foi removido com sucesso!';
        }).catch(function(error){
            console.log(error);
            $scope.mensagem = 'Ocorreu uma falha ao deletar o usuario ' + usuario.nome + ', tente novamente mais tarde.'
        })
    };
});