import template from './post-edit.html';

import PostEditController from './post-edit.controller';

const postEditComponent = {
    template,
    bindings: {
        save: '&',
        post: '<',
    },
    controller: PostEditController,
    controllerAs: 'postEditCtrl',
};

export default postEditComponent;