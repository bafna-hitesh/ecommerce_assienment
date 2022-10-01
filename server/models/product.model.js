const productsData = require('../data/products');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
    id: Schema.Types.ObjectId,
    name: String,
    image: String,
    description: String,
    brandName: String,
    color: String,
    ratings: Number,
    quantity: Number,
    category: String,
})

const Product = mongoose.model('Product', ProductSchema)

const PopulateProducts = async () => {
    try {
       await Product.deleteMany({});
 
       await Product.insertMany(productsData);
       
       console.log('savedProduct');
       
       process.exit();
    } catch (error) {
       console.log(error.message);
    }
 };
 
 module.exports = { Product, PopulateProducts };
 