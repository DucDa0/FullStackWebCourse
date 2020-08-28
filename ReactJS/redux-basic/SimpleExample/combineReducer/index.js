const {createStore}=require('redux');
const reducer =require('./reducer');

const store=createStore(reducer);

console.log(store)