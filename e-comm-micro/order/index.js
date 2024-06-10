const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3002;

app.use(express.json());

let orders = [];

app.post('/orders', async (req, res) => {
  const { productId, quantity } = req.body;
  try {
    const product = await axios.get(`http://localhost:3001/products/${productId}`);
    const order = {
      id: orders.length + 1,
      product: product.data,
      quantity
    };
    orders.push(order);
    res.status(201).json(order);

    // Notify the Notification Service
    await axios.post('http://localhost:3003/notifications', { order });
  } catch (error) {
    res.status(500).send('Error creating order');
  }
});

app.get('/orders', (req, res) => {
  res.json(orders);
});

app.listen(PORT, () => {
  console.log(`Order Service running on port ${PORT}`);
});
