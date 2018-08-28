'use strict';

const express = require('express');
const cartRoutes = express.Router();
const cartItems = require('../cart/cart-items');

cartRoutes.get('/cart', (req, res) => {
    console.log('GET request');
    res.send(cartItems);
});

cartRoutes.put('/cart/:id', (req, res) => {
    console.log('PUT request');
    res.send(cartItems);
});

cartRoutes.post('/cart', (req, res) => {
    console.log('POST request');
    res.send(cartItems);

});

cartRoutes.delete('/cart/:id', (req, res) => {
    console.log('DELETE request');
    res.send(cartItems);

});

module.exports = cartRoutes;