const app = (function(){
  const money = [];
  return{
    get(){
      return money;
    },
    add(value){
      money.push(value);
    },
    edit(index, value){
      money[index] = value;
    },
    remove(index){
      money.splice(index,1);
    }
  }
})()


app.add(5000);
app.add(35235);

app.add(6758);

app.add(4777);

console.log(app.get());