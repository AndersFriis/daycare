import angular from 'angular';

import ParentModule from '../parent/parent.module';
import FlashesModule from '../flashes/flashes.module';

import appComponent from './app.component';

const AppModule = angular.module('app', [
    ParentModule.name,
    FlashesModule.name,
])
    .component('app', appComponent);

export default AppModule;