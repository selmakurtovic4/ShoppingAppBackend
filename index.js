const express = require('express');
const cors = require('cors'); // Import the cors middleware
const userRoute = require('./routes/user');

const app = express();
const port = 8000;

// Use cors middleware before defining routes
app.use(cors());

// Define your routes
app.use('/user', userRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
