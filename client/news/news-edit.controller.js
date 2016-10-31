import { merge } from 'ramda';

function NewsEditController() {
    const ctrl = this;
    ctrl.editedNews = {};

    ctrl.$onChanges = function $onChanges() {
        ctrl.editedNews = merge({}, ctrl.news);
    };

    ctrl.saveNews = function saveNews() {
        ctrl.save({ editedNews: ctrl.editedNews });
    };
}

export default NewsEditController;