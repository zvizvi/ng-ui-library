import angular from 'angular';
import Common from '../../../../common';
import Demo from './demo/demo';

let componentModule = angular.module('app.components', [
  Common,
  Demo
])
  .name;

export default componentModule;
