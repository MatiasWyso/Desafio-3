const express = require('express');
const app = express();
const Contenedor = require('/.Contenedor');
const products = require('./data/products.json')
const prod = new Contenedor(products);
const PORT = 8080;

//Routes

app.get('/products', async (req, res) => {
    console.log(req.query);
    const limit = req.query;
    if (limit) {
        res.send(products.slice(0, +limit))
    }
    else {
        res.send(products)
    }
})

app.get ('/products/:pid', async (req, res) => {
    console.log(req.params);
    const getProductById = req.params.pid;
    const id = products.find (prod => prod.id === getProductById);
    if (!id) {
        return res.status(404).send("No se encuentra el producto")
    }
})


app.listen(PORT, () => { 
    console.log('Listening on Port => ', PORT)
});

