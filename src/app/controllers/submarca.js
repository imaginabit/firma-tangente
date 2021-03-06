class SubmarcaController {
    constructor($scope, $rootScope, $parse) {
        $scope.arrNombres = ['emprender.coop', 'Aula Tangente'];
        $scope.arrlogos = ['emprender-250.png', 'logo_aulaTangente1-250.png'];
        $scope.arrUrls = ['http://emprender.coop/', 'http://aula.tangente.coop/'];

        //codigo duplicado que deveria poner de otraforma

        $scope.selectFirma = function () {

            console.log("select firma");
            if ($('#htmlcont1').css('display') === 'none') {
                $scope.selectText('firma1');
            } else {
                $scope.selectText('html1');
            }
        };

        $scope.selectText = function (element) {
            var doc = document;
            text = doc.getElementById(element);
            var range;

            if (doc.body.createTextRange) { // ms
                range = doc
                    .body
                    .createTextRange();
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

        $scope.$watch('equipo', function (newVal, oldVal) {
            console.log('oldVal', oldVal);
            console.log('new ', newVal);

            $('img.base64').each(function () {
                console.log('convertir a base64');
                //var imgurl = $(this).attr('data-img') ;
                var imgurl = this
                    .attributes['data-img']
                    .value; // .attr('data-img') ;
                console.log('img url', imgurl);
                // console.log('img url value',imgurl.value); console.log('img url value parse
                // ', $parse ( imgurl.value )($rootScope));
                imgurl = $parse(imgurl)($rootScope, $scope);
                console.log('parsed imgurl', imgurl);
                var este = $(this);

                var xhr = new XMLHttpRequest();
                xhr.onload = function () {
                    var reader = new FileReader();
                    reader.onloadend = function () {
                        console.log('load end');
                        este.attr('src', reader.result);
                    };
                    reader.readAsDataURL(xhr.response);
                };
                xhr.open('GET', imgurl);
                xhr.responseType = 'blob';
                xhr.send();
            });

        });
    }
}

SubmarcaController.$inject = ['$scope', '$rootScope', '$parse'];

export default SubmarcaController;
