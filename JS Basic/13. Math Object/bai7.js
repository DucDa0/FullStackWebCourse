/** 
 * Viết hàm trigonim để tính 3 giá trị sin cos tan của một số nhập vào
 * Example: trigonim(45) = [ '0.851', '0.525', '1.620' ]
 * Gợi ý: Sử dụng toFixed() method
*/

function trigonim(number) {
    // your code here
    var arr=[];
    var s=Math.sin(number).toFixed(3);
    var c=Math.cos(number).toFixed(3);
    var t=Math.tan(number).toFixed(3);
    arr.push(s,c,t);
    return arr;
  }
  