const express = require('express');
const app = express();
const PORT = 3003;

app.use(express.json());

app.post('/notifications', (req, res) => {
  const { order } = req.body;
  console.log(`Notification: Order placed for ${order.quantity} x ${order.product.name}`);
  res.status(200).send('Notification sent');
});

app.listen(PORT, () => {
  console.log(`Notification Service running on port ${PORT}`);
});
