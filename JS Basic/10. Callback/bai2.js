/**
 * 1. Viết hàm double nhận vào 1 số bất kì, trả về  số đó nhân đôi 
 *  Vd: double(2) === 4
 * 2. Viết hàm sumAndDo nhận vào 1 array và 1 callback function. 
 * Hàm sumAndDo làm nhiệm vụ tính tổng array đó, 
 * sau đó gọi callback function với tham số là kết quả tổng vừa tính
 * 3. Nếu mảng trống trả về giá trị 0
 * Vd: sumAndDo([1, 2, 3], double) === 12
 */

function double(num) {
    // viết code ở đây.
    return num*2;
  }
  
  function sumAndDo(nums, callback) {
    // viết code ở đây.
    var sum=0;
    for(var i=0;i<nums.length;++i){
        sum+=callback(nums[i]);
    }
    return sum;
  }
  