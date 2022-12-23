/**
 * Chỉ sử dụng vòng lặp for và if else để hoàn thiện hàm tìm số lớn nhất trong 1 array
 */

function max(arr) {
    // your code here
    var max=arr[0];
    for(var i=0;i<arr.length;++i){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;
  }
  