angular.module('sun').controller('TipoItemController',function($scope){

    $scope.items =[{

        _id: 'Produtos',
        nome: 'Produtos',

        }, {
        _id: 'Servicos',
        nome: 'Servicos',


        }];


});

angular.module('sun').controller('UnidadesController',function($scope){

    $scope.unidades =[{

        _id: 'Unidade',
        nome: 'Unidade',

        }, {
        _id: 'Caixa',
        nome: 'Caixa',

        }, {
        _id: 'Kilograma',
        nome: 'Kilograma',

        }, {
        _id: 'Hora',
        nome: 'Hora',

       }];


});

angular.module('sun').controller('MarcasController',function($scope){

    $scope.marcas =[{

        _id: 'Marca 1',
        nome: 'Marca 1',

        }, {
        _id: 'Marca 2',
        nome: 'Marca 2',


       }];


});

angular.module('sun').controller('StatusController',function($scope){

    $scope.status =[{

        _id: 'Ativo',
        nome: 'Ativo',

        }, {
        _id: 'Inativo',
        nome: 'Inativo',


       }];


});
