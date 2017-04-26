angular.module('sun')
    .controller('LoginController', function($http,$scope,$location){

        $scope.usuario = {};
        $scope.mensagem = '';

        $scope.autenticar = function(){

            var usuario = $scope.usuario;
            console.log(usuario);

            $http.post('/autenticar', {
                id: usuario.login,
                senha: usuario.senha
            })
            .then(function(){
                $location.path('/');
            }, function(error){
                $scope.usuario = {};
                $scope.mensagem = 'Login ou senha inválidos!';
            })
        }

    });
