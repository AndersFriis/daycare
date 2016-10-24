import template from './parent-item.html';

import ParentItemController from './parent-item.controller';

const parentItemComponent = {
    template,
    bindings: {
        parent: '<',
        delete: '&',
        update: '&',
    },
    controller: ParentItemController,
    controllerAs: 'parentItemCtrl',
};

export default parentItemComponent;