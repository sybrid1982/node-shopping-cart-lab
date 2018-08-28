'use strict';

function CartService($http) {
    const vm = this;

    vm.getAllItems = () => {
        return $http({
            url: '/items',
            method: 'GET'
        }).then((response) => {
            vm.items = response.data;
            return vm.items;
        });
    }
};

angular.module("App").service('CartService', CartService);