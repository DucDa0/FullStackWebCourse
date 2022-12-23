/**
 * Giả thiết: numbers là một array các số nguyên
 * Yêu cầu: 
 * - trả về tổng các số, dùng vòng lặp for ... of
 * - nếu array trống trả về 0
 */
 
function sum(numbers) {
    // Write code here...
    var sum=0;
    for(var num of numbers){
        sum+=num;
    }
    return sum;
 }