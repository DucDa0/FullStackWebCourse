/** 
 * Viết hàm rightTriangle nhập vào 3 cạnh của một tam giác.
 * Cho biết đó có phải là tam giác vuông hay không? 
*/

function rightTriangle(a, b, c) {
    // your code here
    if((a!==0&&b!==0&&c!==0)&&(Math.hypot(a,b)===c||Math.hypot(a,c)===b||Math.hypot(c,b)===a)){
        return true;
    }
    return false;
  }