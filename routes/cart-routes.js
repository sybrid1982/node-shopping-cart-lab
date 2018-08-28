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

});

cartRoutes.post('/cart', (req, res) => {
    console.log('POST request');
});

cartRoutes.delete('/cart/:id', (req, res) => {
    console.log('DELETE request');
});