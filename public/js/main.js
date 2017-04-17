angular.module('sun',['ngRoute'])
.config(function($routeProvider, $locationProvider, $httpProvider ){

    //AQUI FICA TODAS AS ROTAS DAS VIEWS ASSOCIADAS COM OS SEUS RESPECTIVOS CONTROLLERS

    $httpProvider.interceptors.push('tokenInterceptor');
   
    $routeProvider.when('/usuarios',{
        templateUrl: 'partials/usuarios.html',
        controller: 'TabelaController'
    });

    $routeProvider.when('/usuarios/new',{
        templateUrl: 'partials/cadastro-usuarios.html',
        controller: 'CadastroUsuarioController'
        
    });

     $routeProvider.when('/login',{
        templateUrl:'partials/login.html',
        controller: 'LoginController'
    });    


   
    $routeProvider.otherwise({redirectTo: '/usuarios'});


});