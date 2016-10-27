import template from './post-item.html';

import PostItemController from './post-item.controller';

const postItemComponent = {
    template,
    bindings: {
        post: '<',
        delete: '&',
        update: '&',
    },
    controller: PostItemController,
    controllerAs: 'postItemCtrl',
};

export default postItemComponent;