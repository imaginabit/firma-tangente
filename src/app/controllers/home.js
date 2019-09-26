// prueba controller:
const INIT = new WeakMap();
const TIMEOUT = new WeakMap();

class HomeController {
  constructor($timeout) {
    TIMEOUT.set(this, $timeout);
    INIT.set(this, () => {
      this.msg = "tal y cual mensaje";
    });

    INIT.get(this)();
  }
}

HomeController.$inject = ['$timeout'];
export default HomeController;