

run.$inject = ['$rootScope','$parse','$location'];
function run($rootScope, $parse, $location) {
    $rootScope.name = "Tangente";
    $rootScope.baseurl = '/';
    $rootScope.baseurl = 'http://firma.tangente.coop/';
    $rootScope.pie = 'views/pie.html';
    $rootScope.redesSociales = 'views/redessociales.html';
    $rootScope.espacioinferior = 'views/espacioinferior.html';

    //estilos
    $rootScope.anchototal = 'width:600px';
    
    $rootScope.fuentegeneral = 'color:#000; font-size: 17px; font-family: tahoma, hevietica, sans;height:110px;width:500px;';
    $rootScope.fuentesecundaria = 'font-size: 15px;line-height:20px;margin-top: 15px;';
    $rootScope.fuentesecundaria = 'font-size: 12px;margin-top: 2px;';
    $rootScope.fuenteenlaces = 'font-size: 11px;margin-top: 10px;';
    
    $rootScope.espaciologotexto = '';
    $rootScope.espaciologo = 'padding-right:95px;';

    //$rootScope.entrelinks = ' &nbsp; '.safehtml;
    $rootScope.stylecargo = 'font-size: 12px;margin-top: 2px;';
    $rootScope.stilenombre = 'font-size: 14px;';

    $rootScope.base64 = false;


    $rootScope.showHtml = function(element) {
        console.log('ver html en root.js', element);
        console.log('firma display:',$('#firma').css('display'));
        console.log('showhtml text:', $('#showHtml').html() );
        console.log('htmlcont display:',$('#htmlcont').css('display'));


        if ($('#showHtml').html() === 'Ver html') {
          $('#showHtml').html('Ver firma');
  
          $('#firma').hide();
          $('#htmlcont').show();
  
        } else {
          $('#showHtml').html('Ver html');
  
          $('#firma').show();
          $('#htmlcont').hide();
        }
  
        var firma = $('#'+element).html();
        firma = $('<div />').text(firma).html();
        firma += ' <p>&nbsp;</p> ';

        // console.log('firma html',firma);
  
        $('#html').html(firma);
        $rootScope.msg = 'Pulsa Ctrl + C para copiar';
    };

    var path = function() { return $location.path();};
    $rootScope.$watch(path, function(newVal, oldVal){
        console.log(oldVal);
        $rootScope.activetab = newVal;
    });


    $rootScope.init = function() {
        console.log('init called');
        $('img.base64').each(function() {
          var imgurl = this.attributes['data-img'].value;// .attr('data-img') ;
          if ($rootScope.base64 === true){
            console.log('convertir a base64');
            imgurl = $parse ( imgurl )($rootScope);
            var este = $(this);
  
            var xhr = new XMLHttpRequest();
            xhr.onload = function() {
              var reader = new FileReader();
              reader.onloadend = function() {
                console.log('load end');
                este.attr('src', reader.result);
              };
              reader.readAsDataURL(xhr.response);
            };
            xhr.open('GET', imgurl );
            xhr.responseType = 'blob';
            xhr.send();
          } else {
            //this.removeAttribute('data-img');
          }
        });
      };


}

export default run;