import angular from 'angular';
import 'angular-resource';

import FlashesModule from '../flashes/flashes.module';

import newsPageComponent from './news-page.component';
import newsItemComponent from './news-item.component';
import newsEditComponent from './news-edit.component';

import newsAPIService from './news-api.service';

const newsModule = angular.module('news', [
    'ngResource',
    FlashesModule.name,
]).config(($resourceProvider) => {
    $resourceProvider.defaults.stripTrailingSlashes = false;
})
    .factory('newsAPIService', newsAPIService)
    .component('newsPage', newsPageComponent)
    .component('newsEdit', newsEditComponent)
    .component('newsItem', newsItemComponent);

export default newsModule;