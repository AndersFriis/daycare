import { findIndex } from 'ramda';

function PostPageController(postAPIService, flashesService, $interval) {
    const ctrl = this;
    ctrl.editedPost = {};

    function getPost() {
        postAPIService.post.get().$promise.then((data) => {
            ctrl.post = data.results;
        });
    }

    getPost();
    $interval(getPost, 5000);

    ctrl.savePost = function savePost(editedPost) {
       postAPIService.post.save(editedPost).$promise.then((savedPost) => {
            ctrl.post = [
                savedPost,
                ...ctrl.post,
            ];
            ctrl.editedPost = {};
            flashesService.displayMessage('Info Sent To Anders!', 'success');
        });
    };

    ctrl.updatePost = function updatePost(postToUpdate) {
        postAPIService.post.update(postToUpdate).$promise.then(() => {
            flashesService.displayMessage('Your Post Have Been Updated!');
        });
    };

    ctrl.deletePost = function deletePost(postToDelete) {
        const findPost = findIndex(item => postToDelete.id === item.id);
        const index = findPost(ctrl.post);

        if (index !== -1) {
            ctrl.post.splice(index, 1);
        }

        postAPIService.post.delete(postToDelete).$promise.then(() => {
            flashesService.displayMessage('Your Post Have Been Deleted');
        });
    };
}

export default PostPageController;