angular.module('sun',['ngRoute'])
.config(function($routeProvider, $locationProvider, $httpProvider ){

    //AQUI FICA TODAS AS ROTAS DAS VIEWS ASSOCIADAS COM OS SEUS RESPECTIVOS CONTROLLERS

    $httpProvider.interceptors.push('tokenInterceptor');

    $routeProvider.when('/usuarios',{
        templateUrl: 'partials/user-tabela.html',
        controller: 'TabelaUsuarioController'
    });

    $routeProvider.when('/usuarios/new',{
        templateUrl: 'partials/user-cadastro.html',
        controller: 'CadastroUsuarioController'

    });

    $routeProvider.when('/produtos',{
        templateUrl: 'partials/product-tabela.html',
        controller: 'TabelaProdutosController'

    });

    $routeProvider.when('/produtos/new',{
        templateUrl: 'partials/product-cadastro.html',
        controller: 'CadastroProdutosController'

    });

    $routeProvider.when('/produtos/edit/:produtoId',{
        templateUrl:'partials/editar-produto.html',
        controller: 'EditarProdutoController'
    });


    $routeProvider.when('/home',{
        templateUrl: 'partials/home.html',
        controller: 'CadastroUsuarioController'

    });

     $routeProvider.when('/login',{
        templateUrl:'partials/login.html',
        controller: 'LoginController'
    });





    $routeProvider.otherwise({redirectTo: '/home'});


});
