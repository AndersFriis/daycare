import { findIndex } from 'ramda';

function ParentPageController(parentAPIService, flashesService, $interval) {
    const ctrl = this;
    ctrl.editedParent = {};

    function getParent() {
        parentAPIService.parent.get().$promise.then((data) => {
            ctrl.parent = data.results;
        });
    }

    getParent();
    $interval(getParent, 5000);

    ctrl.saveParent = function saveParent(editedParent) {
       parentAPIService.parent.save(editedParent).$promise.then((savedParent) => {
            ctrl.parent = [
                savedParent,
                ...ctrl.parent,
            ];
            ctrl.editedParent = {};
            flashesService.displayMessage('Child Info Saved!', 'success');
        });
    };

    ctrl.updateParent = function updateParent(parentToUpdate) {
        parentAPIService.parent.update(parentToUpdate).$promise.then(() => {
            flashesService.displayMessage('Your Childs Info Have Been Updated!');
        });
    };

    ctrl.deleteParent = function deleteParent(parentToDelete) {
        const findParent = findIndex(item => parentToDelete.id === item.id);
        const index = findParent(ctrl.parent);

        if (index !== -1) {
            ctrl.parent.splice(index, 1);
        }

        parentAPIService.parent.delete(parentToDelete).$promise.then(() => {
            flashesService.displayMessage('Your Child Info Have Been Deleted');
        });
    };
}

export default ParentPageController;