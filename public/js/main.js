angular.module('sun',['ngRoute'])
.config(function($routeProvider, $locationProvider, $httpProvider ){

    //AQUI FICA TODAS AS ROTAS DAS VIEWS ASSOCIADAS COM OS SEUS RESPECTIVOS CONTROLLERS

    $httpProvider.interceptors.push('tokenInterceptor');

    $routeProvider.when('/usuarios',{
        templateUrl: 'partials/tabela-usuario.html',
        controller: 'TabelaUsuarioController'
    });

    $routeProvider.when('/usuarios/new',{
        templateUrl: 'partials/cadastro-usuario.html',
        controller: 'CadastroUsuarioController'

    });

    $routeProvider.when('/produtos',{
        templateUrl: 'partials/tabela-produto.html',
        controller: 'TabelaProdutosController'

    });

    $routeProvider.when('/produtos/new',{
        templateUrl: 'partials/cadastro-produto.html',
        controller: 'CadastroProdutosController'

    });

    $routeProvider.when('/estoque',{
        templateUrl: 'partials/estoque.html',
        controller: 'EstoqueController'
    });

    $routeProvider.when('/estoque/edit/:id',{
        templateUrl: 'partials/estoque-edit.html',
        controller: 'EstoqueController'
    });

    $routeProvider.when('/produtos/edit/:produtoId',{
        templateUrl:'partials/cadastro-produto.html',
        controller: 'CadastroProdutosController'
    });


    $routeProvider.when('/home',{
        templateUrl: 'partials/home.html',
        controller: 'CadastroUsuarioController'

    });

     $routeProvider.when('/login',{
        templateUrl:'partials/login.html',
        controller: 'LoginController'
    });

     $routeProvider.when('/listaCompras',{
        templateUrl:'partials/lista-compras.html',
       controller: 'ListaCompraController'
    });

     $routeProvider.when('/cadastroCompras/new',{
        templateUrl:'partials/cadastro-compras.html',
        controller: 'CadastroCompraController'
        
    });

     $routeProvider.when('/vendas',{
        templateUrl:'partials/registro-venda.html',
        controller: 'VendaProdutoController'
       
    });




    $routeProvider.otherwise({redirectTo: '/home'});


});
