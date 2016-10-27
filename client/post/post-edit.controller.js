import { merge } from 'ramda';

function PostEditController() {
    const ctrl = this;
    ctrl.editedPost = {};

    ctrl.$onChanges = function $onChanges() {
        ctrl.editedPost = merge({}, ctrl.post);
    };

    ctrl.savePost = function savePost() {
        ctrl.save({ editedPost: ctrl.editedPost });
    };
}

export default PostEditController;