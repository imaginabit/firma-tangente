
import 'bootstrap';

import angular from 'angular';
import appComponent from './app.component';

import ngAnimate from 'angular-animate';
import ngCookies from 'angular-cookies';
import ngTouch from 'angular-touch';
import ngResource from 'angular-resource';
import ngRoute from 'angular-route';
import ngSanitize from 'angular-sanitize';

import { default as controllersFirmas } from './controllers/controllers';
import { default as Run } from './components/root';
import { default as Routes } from './routes';

var moduleName = 'app';

var app = angular.module( moduleName, [
  'ngAnimate', 'ngCookies', 'ngResource', 'ngRoute', 'ngSanitize', 'ngTouch',
  controllersFirmas
])
.component( 'app', appComponent )
.run( Run )
.config( Routes )
;

