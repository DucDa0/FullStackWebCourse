/**
 * Viết hàm countDown đếm ngược từ x về 0, mỗi lần đếm cách nhau 1s, trả về promise, promise này resolve sau khi đã đếm xong
 */
function countDown(x) {
    return new Promise((resolve,reject)=>{
      let mithril = setInterval(()=>{
        console.log(x);
        --x;
        if(x===-1){clearInterval(mithril);resolve();}
      },1000)
    });
  }
  
  function sayHappyNewYear() {
    console.log('Happy new year');
  }
  
  countDown(5).then(sayHappyNewYear);