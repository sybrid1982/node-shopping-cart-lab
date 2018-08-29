'use strict';

const express = require('express');
const cartRoutes = express.Router();
const cartItems = require('../cart/cart-items');
let lastIndex = cartItems.length;

cartRoutes.get('/cart', (req, res) => {
    console.log('GET request');
    res.send(cartItems);
});

cartRoutes.put('/cart/:id', (req, res) => {
    console.log('PUT request with ID: ' + req.params.id);
    res.send(cartItems);
});

cartRoutes.post('/cart', (req, res) => {
    console.log('POST request with Body: ' + req.body);
    res.send(cartItems);

});

cartRoutes.delete('/cart/:id', (req, res) => {
    console.log('DELETE request with ID: ' + req.params.id);
    let itemIndex = -1;
    for(let i = 0; i < lastIndex; i++) {
        if(req.params.id == cartItems[i].id) {
            itemIndex = i;
        }
    }
    if(itemIndex >= 0) {
        cartItems.splice(itemIndex, 1);
    }
    res.send(cartItems);

});

module.exports = cartRoutes;