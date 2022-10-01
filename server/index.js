require('dotenv').config();

const express = require('express');
const cors = require('cors');

const {initializeDBConnection} = require('./db/db.connect')
const { PopulateProducts } = require('./models/product.model')
const searchRouter = require('./routes/search.router');
const productRouter = require('./routes/product.router');

const app = express();

app.use(cors());

initializeDBConnection();
// PopulateProducts();

app.get('/', (req, res) => {
    res.json({ success: true, message: 'ecommerce - API' });
})

app.use('/api', searchRouter);
app.use('/api', productRouter)

// const PORT = process.env.PORT || 8000;
app.listen(8000, () => {
    console.log(`Server listing on http://localhost:${8000}`)
});
