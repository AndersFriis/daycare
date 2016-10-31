import template from './news-edit.html';

import NewsEditController from './news-edit.controller';

const newsEditComponent = {
    template,
    bindings: {
        save: '&',
        news: '<',
    },
    controller: NewsEditController,
    controllerAs: 'newsEditCtrl',
};

export default newsEditComponent;