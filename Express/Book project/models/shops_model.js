const mongoose = require('mongoose');

const shopSchema = new mongoose.Schema({
    name: String,
    descriptions: String,
    shopImgUrl: String,
    ownerId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'users'
    },
    products: [{
        id: String,
        title: String,
        description: String,
        bookImgUrl: String
    }],
    orders: Array
});

const Shop = mongoose.model('Shop', shopSchema, 'shops');

module.exports=Shop;