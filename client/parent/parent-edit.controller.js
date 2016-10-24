import { merge } from 'ramda';

function ParentEditController() {
    const ctrl = this;
    ctrl.editedParent = {};

    ctrl.$onChanges = function $onChanges() {
        ctrl.editedParent = merge({}, ctrl.parent);
    };

    ctrl.saveParent = function saveParent() {
        ctrl.save({ editedParent: ctrl.editedParent });
    };
}

export default ParentEditController;