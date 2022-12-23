/**
 * Sử dụng vòng lặp for để tính tổng các số có trong mảng:
 */

function sum(array) {
    // viết code ở đây.
    var sum=0;
    for(var i=0;i<array.length;i++){
        sum+=array[i];
    }
    return sum;
  }