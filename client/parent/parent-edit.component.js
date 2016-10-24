import template from './parent-edit.html';

import ParentEditController from './parent-edit.controller';

const parentEditComponent = {
    template,
    bindings: {
        save: '&',
        parent: '<',
    },
    controller: ParentEditController,
    controllerAs: 'parentEditCtrl',
};

export default parentEditComponent;