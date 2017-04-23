angular.module('sun').controller('TipoItemController',function($scope){

    $scope.items =[{
        
        _id: 1,
        nome: 'Produtos',
       
        }, {
        _id: 2,
        nome: 'Servicos',
       

        }];
    
    
});

angular.module('sun').controller('UnidadesController',function($scope){

    $scope.unidades =[{
        
        _id: 1,
        nome: 'Unidade',
       
        }, {
        _id: 2,
        nome: 'Caixa',
        
        }, {
        _id: 3,
        nome: 'Kilograma',

        }, {
        _id: 4,
        nome: 'Hora',
    
       }];
    
    
});

angular.module('sun').controller('MarcasController',function($scope){

    $scope.marcas =[{
        
        _id: 1,
        nome: 'Marca 1',
       
        }, {
        _id: 2,
        nome: 'Marca 2',
        
            
       }];
    
    
});

angular.module('sun').controller('StatusController',function($scope){

    $scope.status =[{
        
        _id: 1,
        nome: 'Ativo',
       
        }, {
        _id: 2,
        nome: 'Inativo',
        
            
       }];
    
    
});