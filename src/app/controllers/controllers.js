import HomeController from './home';
import MainController from './main';
import { default as SubmarcaController } from './submarca';
import { default as EquipoController } from './equipo';

import InstruccionesController from './instrucciones';

var moduleName='firmas.controllers';

angular.module(moduleName, [])
  .controller('firmas.mainController', MainController)
  .controller('firmas.SubmarcaController', SubmarcaController)  
  .controller('firmas.EquipoController', EquipoController)
  .controller('firmas.instruccionesController', InstruccionesController)
;

export default moduleName;
