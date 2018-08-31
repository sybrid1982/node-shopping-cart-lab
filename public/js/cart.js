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
        
        vm.update = (id, quantity) => {
            // Thought:  First time you press the button, change quantity into an input field that takes numbers
            // If you then press the button a second time, post.
            
            CartService.updateItem(id, quantity).then((response) => {
                vm.cart = response;
            });
        }

        vm.addItem = (item) => {
            CartService.addItem(item).then((response) => {
                vm.cart = response;
                vm.newItem.product = null;
                vm.newItem.quantity = null;
                vm.newItem.price = null;
            });
        }

        vm.getTotalForItem = (item) => {
            return ((Math.round(item.quantity * item.price * 100)) / 100).toFixed(2);
        }

        vm.getCartTotal = () => {
            let total = 0;
        }
    }]
}

angular.module("App").component("cart", cart);