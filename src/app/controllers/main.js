class MainCtrl {
    constructor($scope, $rootScope) {
        // console.log("hola soy el mainCtrl");
        $rootScope.main = 'loaded';

        jQuery("#checktb").parent().parent().show();

        $scope.colorResaltado = 'color:#e61c26;';

        $scope.selectText = function (element) {
            var doc = document;
            var text = doc.getElementById(element);
            var range;

            if (doc.body.createTextRange) { // ms
                range = doc.body.createTextRange();
                range.moveToElementText(text);
                range.select();
            } else if (window.getSelection) { // moz, opera, webkit
                var selection = window.getSelection();
                range = doc.createRange();
                range.selectNodeContents(text);
                selection.removeAllRanges();
                selection.addRange(range);
            }
            $scope.msg = 'Pulsa Ctrl + C para copiar';
        };

        $scope.selectFirma = function () {
            console.log('select firma main');
            console.log('htmlcont css : ',$('#htmlcont').css('display'));

            if ($('#htmlcont').css('display') === 'none') {
                $scope.selectText('firma');
            } else {
                $scope.selectText('html');
            }
        };
        
        $scope.selectText = function (element) {
            var doc = document;
            var text = doc.getElementById(element);
            var range;

            // console.log('text',text );
            if (doc.body.createTextRange) { // ms
                range = doc.body.createTextRange();
                range.moveToElementText(text);
                range.select();
            } else if (window.getSelection) { // moz, opera, webkit
                console.log('select text',text);
                var selection = window.getSelection();
                range = doc.createRange();
                range.selectNodeContents(text);
                selection.removeAllRanges();
                selection.addRange(range);
            }
            $scope.msg = 'Pulsa Ctrl + C para copiar';
        };

        $rootScope.selectFirma = $scope.selectFirma;
        $rootScope.selectText = $scope.selectText;
    }

}
MainCtrl.$inject = ['$scope', '$rootScope'];

export default MainCtrl;