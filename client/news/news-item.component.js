import template from './news-item.html';

import NewsItemController from './news-item.controller';

const newsItemComponent = {
    template,
    bindings: {
        news: '<',
        delete: '&',
        update: '&',
    },
    controller: NewsItemController,
    controllerAs: 'newsItemCtrl',
};

export default newsItemComponent;