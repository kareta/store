const express = require('express');
const cors = require('cors');
const products = require('./routes/products');
const auth = require('./routes/auth');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/products', products);
app.use('/api/auth', auth);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}`));