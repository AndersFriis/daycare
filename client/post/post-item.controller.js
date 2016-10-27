import { merge } from 'ramda';

function PostItemController() {
    const ctrl = this;
    ctrl.showControls = false;
    ctrl.editMode = false;
    ctrl.postToEdit = {};

    ctrl.setShowControls = function setShowControls(showControls) {
        ctrl.showControls = showControls;
    };

    ctrl.setEditMode = function setEditMode(editMode) {
        ctrl.editMode = editMode;

        // merge probably not necessary
        ctrl.postToEdit = merge({}, ctrl.post);
    };

    ctrl.editPost = function editPost(postToEdit) {
        ctrl.update({ postToUpdate: postToEdit });
        ctrl.post = postToEdit;
        ctrl.editMode = false;
    };

    ctrl.deletePost = function deletePost() {
        ctrl.delete({ postToDelete: ctrl.post });
    };
}



export default PostItemController;