// tính tổng của tích của các phần tử của array a với các phần tử của array b.
/**
 * var a = [1, 2, 3];
 * var b = [10, 20];
 * Kết quả mong muốn: 180 // (10 + 20 + 30) + (20 + 40 + 60)
 */

function sumMultiplyArray(a, b) {
    // viết code ở đây.
    var sum=0;
    for(var i=0;i<a.length;++i){
        for(j=0;j<b.length;++j){
            sum+=a[i]*b[j];
        }
    }
    return sum;
  }