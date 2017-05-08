angular.module('sun').controller('VendaProdutoController',function($scope,$http){

    
    $scope.produtos = [];
    $scope.venda = {};
    var vendas = $scope.venda;
 
    $scope.mostraProduto = function() {
        
        $scope.produtos.push({
           
            produto:vendas.produto,
            preco:vendas.preco,
            quantidade:vendas.quantidade,
            valor:(vendas.preco * vendas.quantidade)
            
        });
            
        vendas.produto = "";
        vendas.preco = "";
        vendas.quantidade = "";

    };

   
   $scope.getTotal = function(){
     
        var total = 0;
        
        for(var i = 0; i < $scope.produtos.length; i++){

            var produto = $scope.produtos[i];
            total += (produto.preco * produto.quantidade);

        }

        return total;
                   
    };

   
    $scope.salvaProduto = function(){

        $http.post('/v1/vendas', $scope.produtos).then(function(retorno){
            
            console.log(retorno.data);

        });
    };

    $scope.removeCampos = function(){

        $scope.produtos = [];
    };

});