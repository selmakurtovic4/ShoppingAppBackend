const express = require('express')
//const router = require('./routes/index.js');
const router = express.Router();
const app = express()
const port = 3000
const userRoute = require('./routes/user');

//app.use(router);
app.use('/user', userRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


