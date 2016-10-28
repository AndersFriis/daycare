import angular from 'angular';

import ParentModule from '../parent/parent.module';
import PostModule from '../post/post.module';
import FlashesModule from '../flashes/flashes.module';

import appComponent from './app.component';

const AppModule = angular.module('app', [
    ParentModule.name,
    PostModule.name,
    FlashesModule.name,
])  
    .config(function($httpProvider){
        $httpProvider.defaults.xsrfCookieName = 'csrftoken'
        $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken'
    })
    .component('app', appComponent);

export default AppModule;