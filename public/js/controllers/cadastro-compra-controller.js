angular.module('sun').controller('CadastroCompraController', function($scope,$http,$location,$routeParams){

    $scope.compras = {};
    $scope.produtos = {};
    $scope.titulo = '';

    if($routeParams.id){

        $http.get('/v1/compras/' + $routeParams.id).then(function(retorno){
            
            $scope.compras = retorno.data;
        
        }).catch(function(error){
            console.log(error);
        });
    }

    if($routeParams.id){
        
        $scope.titulo = 'Editar Compra';
        $scope.botao = 'Editar';
    }else{
        $scope.titulo = 'Cadastrar Compra';
        $scope.botao = 'Cadastrar';
    }


    $http.get('/v1/produtos').then(function(retorno){
       
         $scope.produtos = retorno.data;
       
    }).catch(function(error){
        console.log(error);
    });

    $scope.submeterCompra = function(produto) {

        if($scope.formularioCompra.$valid){

        var promisse = $http.post('/v1/compras',$scope.compras);
            promisse.then(function(retorno){
                $scope.compras = produto, retorno.data;
                $location.path('/listaCompras')
                $scope.compra = {};
            }).catch(function(error){
                console.log(error);
            });
        };

    }

});
