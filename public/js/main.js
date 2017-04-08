angular.module('sun',['ngRoute'])
.config(function($routeProvider, $locationProvider){

    //AQUI FICA TODAS AS ROTAS DAS VIEWS ASSOCIADAS COM OS SEUS RESPECTIVOS CONTROLLERS
   
    $locationProvider.html5Mode(true); //ativa o modo html5 que remove a # da rota definida no angular

    $routeProvider.when('/usuarios',{
        templateUrl: 'partials/usuarios.html',
        controller: 'TabelaController'
    });

    $routeProvider.when('/usuarios/new',{
        templateUrl: 'partials/cadastro-usuarios.html',
        controller: 'CadastroUsuarioController'
        
    });

     $routeProvider.when('/login',{  // codigo chama a tela de login
        templateUrl: 'partials/login.html',
     });

    $routeProvider.otherwise({redirectTo: '/usuarios'});


});