import { findIndex } from 'ramda';

function NewsPageController(newsAPIService, flashesService, $interval) {
    const ctrl = this;
    ctrl.editedNews = {};

    function getNews() {
        newsAPIService.news.get().$promise.then((data) => {
            ctrl.news = data.results;
        });
    }

    getNews();
    $interval(getNews, 5000);

    ctrl.saveNews = function saveNews(editedNews) {
       newsAPIService.news.save(editedNews).$promise.then((savedNews) => {
            ctrl.news = [
                savedNews,
                ...ctrl.news,
            ];
            ctrl.editedNews = {};
            flashesService.displayMessage('Info Sent To Anders!', 'success');
        });
    };

    ctrl.updateNews = function updateNews(newsToUpdate) {
        newsAPIService.news.update(newsToUpdate).$promise.then(() => {
            flashesService.displayMessage('Your Post Have Been Updated!');
        });
    };

    ctrl.deleteNews = function deleteNews(newsToDelete) {
        const findNews = findIndex(item => newsToDelete.id === item.id);
        const index = findNews(ctrl.news);

        if (index !== -1) {
            ctrl.news.splice(index, 1);
        }

        newsAPIService.news.delete(newsToDelete).$promise.then(() => {
            flashesService.displayMessage('Your Post Have Been Deleted');
        });
    };
}

export default NewsPageController;