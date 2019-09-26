

class InstrucionesCtrl{
    constructor( $scope )
    {
        $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
        ];
        jQuery("#checktb").parent().parent().hide();
    }
}
InstrucionesCtrl.$inject = ['$scope'];
export default InstrucionesCtrl;