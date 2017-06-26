(function() {
    'use strict';

    angular
        .module('jhipsterSampleApplicationApp')
        .controller('ContactController', ContactController);

    ContactController.$inject = ['Contact'];

    function ContactController(Contact) {

        var vm = this;

        vm.contacts = [];

        loadAll();

        function loadAll() {
            Contact.query(function(result) {
                vm.contacts = result;
                vm.searchQuery = null;
            });
        }
    }
})();
