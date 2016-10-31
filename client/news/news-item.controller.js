import { merge } from 'ramda';

function NewsItemController() {
    const ctrl = this;
    ctrl.showControls = false;
    ctrl.editMode = false;
    ctrl.newsToEdit = {};

    ctrl.setShowControls = function setShowControls(showControls) {
        ctrl.showControls = showControls;
    };

    ctrl.setEditMode = function setEditMode(editMode) {
        ctrl.editMode = editMode;

        // merge probably not necessary
        ctrl.newsToEdit = merge({}, ctrl.news);
    };

    ctrl.editNews = function editNews(newsToEdit) {
        ctrl.update({ newsToUpdate: newsToEdit });
        ctrl.news = newsToEdit;
        ctrl.editMode = false;
    };

    ctrl.deleteNews = function deleteNews() {
        ctrl.delete({ newsToDelete: ctrl.news });
    };
}



export default NewsItemController;