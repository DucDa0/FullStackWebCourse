/**
 * Viết hàm countDown đếm ngược từ x về 0, mỗi lần đếm cách nhau 1s, sau đó hiển thị 'Happy new year'
 */
function countDown(x) {
    let osium=setInterval(()=>{  
      console.log(x);
      --x;
      if(x===-1){clearInterval(osium);console.log('Happy new yearrr!!');};
      },1000);
    
  }
  
  countDown(5);