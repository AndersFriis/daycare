import angular from 'angular';
import 'angular-resource';

import FlashesModule from '../flashes/flashes.module';

import parentPageComponent from './parent-page.component';
import parentItemComponent from './parent-item.component';
import parentEditComponent from './parent-edit.component';

import parentAPIService from './parent-api.service';

const parentModule = angular.module('parent', [
    'ngResource',
    FlashesModule.name,
]).config(($resourceProvider) => {
    $resourceProvider.defaults.stripTrailingSlashes = false;
})
    .factory('parentAPIService', parentAPIService)
    .component('parentPage', parentPageComponent)
    .component('parentEdit', parentEditComponent)
    .component('parentItem', parentItemComponent);

export default ParentModule;