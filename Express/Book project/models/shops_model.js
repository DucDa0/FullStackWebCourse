const mongoose = require('mongoose');

const shopSchema = new mongoose.Schema({
    name: String,
    descriptions: String,
    shopImgUrl: String,
    ownerId: String,
    products: Array,
    orders: Array
});

const Shop = mongoose.model('Shop', shopSchema, 'shops');

module.exports=Shop;