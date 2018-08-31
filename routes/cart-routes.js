'use strict';

const express = require('express');
const cartRoutes = express.Router();
const pool = require('../pg-connection-pool')

cartRoutes.get('/cart', (req, res) => {
    console.log('GET request');
    pool.query('select * from shoppingcart').then((response) => {
        res.send(response.rows);
    });
});

cartRoutes.put('/cart/:id', (req, res) => {
    console.log('PUT request with ID: ' + req.params.id);
    let newQuantity = parseInt(req.body.quantity);
    let targetID = parseInt(req.params.id);
    pool.query('update shoppingcart set quantity=$1::int where id=$2::int', [newQuantity, targetID]).then(() => {
        pool.query('select * from shoppingcart;').then((response2) => {
            res.send(response2.rows);
        });
    });
});

cartRoutes.post('/cart', (req, res) => {
    console.log('POST request with Body: ' + req.body);
    let newItem = {
        product: req.body.product,
        price: req.body.price,
        quantity: req.body.quantity,
    };
    pool.query('insert into shoppingcart (product, price, quantity) values ($1::text, $2::float, $3::int);', [newItem.product, newItem.price, newItem.quantity]).then(() => {
        pool.query('select * from shoppingcart;').then((response2) => {
            res.send(response2.rows);
        });
    });
});

cartRoutes.delete('/cart/:id', (req, res) => {
    console.log('DELETE request with ID: ' + req.params.id);
    pool.query('delete from shoppingcart where id=$1::int;', [parseInt(req.params.id)]).then(() => {
        pool.query('select * from shoppingcart').then((response2) => {
            res.send(response2.rows);
        });
    });
});

module.exports = cartRoutes;