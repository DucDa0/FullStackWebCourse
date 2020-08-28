//* ---------filter-----------
Array.prototype.cloneFilter=function(cb){
    let res=[];
    for(item of this){
        if(cb(item)){
            res.push(item);
        }
        
    }
    return res;
}
//* ex:
const res = [1,2,3,4,5,6].cloneFilter(function(item){
    return item%2===0;
})
console.log(res);

//* ---------filter-----------