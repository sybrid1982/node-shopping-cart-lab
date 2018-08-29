'use strict';

function CartService($http) {
    const vm = this;

    vm.getAllItems = () => {
        return $http({
            url: '/cart',
            method: 'GET'
        }).then((response) => {
            vm.items = response.data;
            return vm.items;
        });
    }
    vm.deleteItem = (id) => {
        return $http({
            url: '/cart/' + id,
            method: "DELETE"
        }).then((response) => {
            vm.items = response.data;
            return vm.items;
        });
    }
    vm.updateItem = (id, quantity) => {
        return $http({
            url: '/cart/' + id,
            method: "PUT",
            data: {quantity}
        }).then((response) => {
            vm.items = response.data;
            return vm.items;
        })
    }
};

angular.module("App").service('CartService', CartService);