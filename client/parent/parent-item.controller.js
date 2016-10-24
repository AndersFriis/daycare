import { merge } from 'ramda';

function ParentItemController() {
    const ctrl = this;
    ctrl.showControls = false;
    ctrl.editMode = false;
    ctrl.parentToEdit = {};

    ctrl.setShowControls = function setShowControls(showControls) {
        ctrl.showControls = showControls;
    };

    ctrl.setEditMode = function setEditMode(editMode) {
        ctrl.editMode = editMode;

        // merge probably not necessary
        ctrl.parentToEdit = merge({}, ctrl.parent);
    };

    ctrl.editParent = function editParent(parentToEdit) {
        ctrl.update({ parentToUpdate: parentToEdit });
        ctrl.parent = parentToEdit;
        ctrl.editMode = false;
    };

    ctrl.deleteParent = function deleteParent() {
        ctrl.delete({ parentToDelete: ctrl.parent });
    };
}



export default ParentItemController;