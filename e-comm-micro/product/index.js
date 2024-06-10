const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json());

let products = [
  { id: 1, name: 'Laptop', price: 1000 },
  { id: 2, name: 'Phone', price: 500 }
];

app.get('/products', (req, res) => {
  res.json(products);
});

app.get('/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).send('Product not found');
  res.json(product);
});

app.listen(PORT, () => {
  console.log(`Product Service running on port ${PORT}`);
});
