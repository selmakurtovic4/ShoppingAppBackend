const express = require('express');
const cors = require('cors'); 
const userRoute = require('./routes/user');
const productRoute = require('./routes/product');
const orderRoute = require('./routes/order');


const app = express();
const port = 8000;

// Use cors middleware before defining routes
app.use(cors());

// Define your routes
app.use('/user', userRoute);
app.use('/products',productRoute);
app.use('/orders',orderRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
