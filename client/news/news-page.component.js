import template from './news-page.html';

import NewsPageController from './news-page.controller';

const newsPageComponent = {
    template,
    controller: NewsPageController,
    controllerAs: 'newsPageCtrl',
};

export default newsPageComponent;