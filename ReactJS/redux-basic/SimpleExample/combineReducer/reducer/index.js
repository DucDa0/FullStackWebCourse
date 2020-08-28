const {combineReducers}=require('redux');
const productReducer=require('./product');
const cartReducer=require('./cart');
const reducer=combineReducers({
    products: productReducer,
    cart: cartReducer
});

module.exports=reducer;