import angular from 'angular';
import 'angular-resource';

import FlashesModule from '../flashes/flashes.module';

import postPageComponent from './post-page.component';
import postItemComponent from './post-item.component';
import postEditComponent from './post-edit.component';

import postAPIService from './post-api.service';

const postModule = angular.module('post', [
    'ngResource',
    FlashesModule.name,
]).config(($resourceProvider) => {
    $resourceProvider.defaults.stripTrailingSlashes = false;
})
    .factory('postAPIService', postAPIService)
    .component('postPage', postPageComponent)
    .component('postEdit', postEditComponent)
    .component('postItem', postItemComponent);

export default postModule;