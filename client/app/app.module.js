import angular from 'angular';
import uiRouter from 'angular-ui-router';
// import angularCookies from 'angular-cookies';


import ParentModule from '../parent/parent.module';
import PostModule from '../post/post.module';
import NewsModule from '../news/news.module';
import FlashesModule from '../flashes/flashes.module';


import appComponent from './app.component';

const AppModule = angular.module('app', [
    uiRouter,
    ParentModule.name,
    PostModule.name,
    NewsModule.name,
    FlashesModule.name,
    
])  
    .config(function($httpProvider, $stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/');

        $stateProvider
        .state('index', {
            url: '/',
            component: 'parentPage',
        }).state('parent', {
            url: '/parent/',
            component: 'parentPage',    
        }).state('post', {
            url: '/post',
            component: 'postPage',
        
        }).state('news', {
            url: '/news',
            component: 'newsPage',
        });
    // })
    // .run(($http, $cookies) => {
    //     // Add a header for CSRF token, so that POST does not fail to our API
    //     $http.defaults.headers.common['X-CSRFToken'] = $cookies.get('csrftoken');
    // })

        $httpProvider.defaults.xsrfCookieName = 'csrftoken'
        $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken'
    })
    .component('app', appComponent);

export default AppModule;