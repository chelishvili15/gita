const express = require("express");
const path = require("path");

const app = express();

const products = require('./products')

app.use(express.json());
app.use(express.static('public'));

app.get("/api/products", (req, res) => {
  res.send(products);
});

app.get("/products", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/products/add", (req, res) => {
  res.sendFile(path.join(__dirname + '/add.html'))
});

app.post("/api/products/add", (req, res) => {
  const val = req.body
  val.id = products[products.length - 1].id + 1

  products.push(val)

  res.send(products)
})

app.get('/products/edit/:index', (req, res) => {
  res.sendFile(path.join(__dirname + '/edit.html'))
})

app.get('/api/products/edit/:index', (req, res) => {
  const index = req.params.index

  res.json({
    name: products[index].product,
    kind: products[index].kind
  })
})


app.put('/api/products/edit', (req, res) => {
  const val = req.body

  products[val.id] = {...val}

  res.send(products)
})

app.delete("/api/products/delete", (req, res) => {
  const val = req.body

  products.splice(val.id, 1)
  res.send(products)
})

app.listen(4000);
