'use strict';

const cart = {
    templateUrl: 'js/cart.html',
    controller: ["CartService", function(CartService){
        const vm = this;

        CartService.getAllItems().then((response) => {
            vm.cart = response;
        });

        vm.delete = (id) => {
            CartService.deleteItem(id).then((response) => {
                vm.cart = response;
            });
        }
        
        vm.update = (id) => {
            // CartService.updateItem(id, quantity).then((response) => {
            //     vm.cart = response;
            // });
        }
    }]
}

angular.module("App").component("cart", cart);