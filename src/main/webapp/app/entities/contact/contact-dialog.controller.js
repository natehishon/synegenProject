(function() {
    'use strict';

    angular
        .module('jhipsterSampleApplicationApp')
        .controller('ContactDialogController', ContactDialogController);

    ContactDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'Contact', 'User'];

    function ContactDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, Contact, User) {
        var vm = this;

        vm.contact = entity;
        vm.clear = clear;
        vm.save = save;
        vm.users = User.query();

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.contact.id !== null) {
                Contact.update(vm.contact, onSaveSuccess, onSaveError);
            } else {
                Contact.save(vm.contact, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('jhipsterSampleApplicationApp:contactUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


    }
})();
