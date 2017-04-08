angular.module('sun').controller('CadastroUsuarioController', function($scope, $http, $location){
    //CONTROLLER DO FORMULÁRIO
        $scope.mensagem = {};
        $scope.usuario = {}; //PEGA OS DADOS DO FORM ATRAVÉS DO usuario.nome  e etc...
        

        $scope.submeter = function() { //MOSTRA NO CONSOLE QUANDO SUBMETE O FORMULÁRIO
            
            if($scope.formulario.$valid){

           var promisse = $http.post('/v1/usuarios', $scope.usuario)
           
                promisse.then(function(retorno){
                    
                    $scope.usuario = retorno.data;
                    $location.path('/usuarios');
                    $scope.mensagem = 'Usuário cadastrado com sucesso!';
                    $scope.usuario = {};
                    
                    
           }).catch(function(error){
                console.log(error);
                $scope.mensagem = 'Ops! Não foi possível cadastrar este usuário.';
           });
           
         }
                
     };
});