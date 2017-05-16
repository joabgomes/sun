angular.module('sun').controller('VendaProdutoController',function($scope,$http,$routeParams){

    
    $scope.produtos = [];
    $scope.venda = {};
    var vendas = $scope.venda;
    $scope.produtosDb = {};
    $scope.mensagem = '';

    $scope.buscarProduto = function() {

        
        $http.get('/v1/vendas').then(function(retorno){ //Usa essa rota pra pegar ou pesquisar o produto

            $scope.produtosDb = retorno.data;

            for(var i=0; i < $scope.produtosDb.length; i++){

                var produtosDb = $scope.produtosDb[i];
            
            
                if(produtosDb.cd_barras == $scope.codigo.cd_barras){

                    vendas.preco = produtosDb.preco;
                    vendas.nm_item = produtosDb.nm_item;
                
                    
                }
        
        }

        }).catch(function(error){
            console.log(error);
        });

        
    }
    
    $scope.mostraProduto = function() {
        
        $scope.produtos.push({
           
            produto:vendas.nm_item,
            preco:vendas.preco,
            quantidade:vendas.quantidade,
            valor:(vendas.preco * vendas.quantidade)
            
        });
            
        vendas.nm_item = "";
        vendas.preco = "";
        vendas.quantidade = "";
        $scope.codigo.cd_barras = "";

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