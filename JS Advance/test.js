

// Array.prototype.fakeReduce=function(cb, initialValue){
//     let that=this;
//     if(initialValue===undefined){
//         initialValue=this[0];
//         that =  this.slice(1);
//     }
//     for(val of that){
//         initialValue=cb(initialValue,val)
//     }
//     return initialValue;
// }

// const x = [5,2,3,4].fakeReduce(function(a,b){
//     return a+b;
// })
// console.log(x)
function reducer(arr, cb, initVal){
    if(initVal===undefined){
        initVal=arr[0];
        arr=arr.slice(1);
    }
    for(val of arr){
        initVal=cb(initVal,val);
    }
    return initVal;
}

const initState={
    speed: 0,
    last_speed:1
};

