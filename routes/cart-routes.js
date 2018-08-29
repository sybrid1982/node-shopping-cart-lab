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
    let itemIndex = getArrayIndexOfID(req.params.id);
    if(itemIndex >= 0) {
        cartItems[itemIndex].quantity = req.body.quantity;
    }
    res.send(cartItems);
});

cartRoutes.post('/cart', (req, res) => {
    console.log('POST request with Body: ' + req.body);
    let newItem = {
        id: lastIndex++,
        product: req.body.product,
        price: req.body.price,
        quantity: req.body.quantity,
    }
    cartItems.push(newItem);
    res.send(cartItems);
});

cartRoutes.delete('/cart/:id', (req, res) => {
    console.log('DELETE request with ID: ' + req.params.id);
    let itemIndex = getArrayIndexOfID(req.params.id);
    if(itemIndex >= 0) {
        cartItems.splice(itemIndex, 1);
    }
    res.send(cartItems);
});

const getArrayIndexOfID = (id) => {
    let itemIndex = -1;
    for(let i = 0; i < lastIndex; i++) {
        if(req.params.id == cartItems[i].id) {
            itemIndex = i;
        }
    }
    return itemIndex;
}

module.exports = cartRoutes;