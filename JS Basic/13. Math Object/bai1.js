// Dùng hàm powerup tính bình phương các số chia hết cho 2 trong mảng truyền vào

function powerup(arr) {
    // your code here!
    var newArr=[];
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]%2===0)
        {
            newArr.push(Math.pow(arr[i],2));
        }
        else
        {
            newArr.push(arr[i]);
        }
        
    }
    return newArr;
  }