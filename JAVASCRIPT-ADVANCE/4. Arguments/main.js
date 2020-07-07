// function Mouse(name, age){
//     this.name=name;
//     this.age=age;
// }

// Mouse.prototype['run']=function () {
//     console.log(this.name+' is running');
// }

// var mickey=new Mouse('mickey', 12);

// mickey.run();

// var a=1;
// function run(){
//     console.log(this === module.exports)
// }
//  run();

function sum() {
    // your code here
    let numbers=Array.from(arguments);
    let res=numbers.reduce((a,b)=>a.concat(b),[]);
    let sum=0;
    for(let i=0;i<res.length;i++){
        if(typeof res[i]==='number'){
            sum+=res[i];
        }
    }
    return sum;
}
console.log(sum(1,'2',3,[1,3]));