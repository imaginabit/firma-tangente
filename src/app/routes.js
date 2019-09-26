function config($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: './views/main.html',
            controller: 'firmas.mainController',
            controllerAs: 'main'
        })    
        .when('/firmaSubmarca', {
        templateUrl: 'views/firmasubmarca.html',
        controller: 'firmas.SubmarcaController'
        })
        .when('/firmaEquipo', {
        templateUrl: 'views/firmaequipo.html',
        controller: 'firmas.EquipoController'
        })
        .when('/instruciones', {
        templateUrl: 'views/instruciones.html',
        controller: 'InstrucionesCtrl'
        })
        
        .otherwise({
            redirectTo: '/'
        });
}
config.$inject = ['$routeProvider'];

export default config;