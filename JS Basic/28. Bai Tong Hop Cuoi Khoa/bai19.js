/*
Hãy viết một hàm để kiểm tra xem có thể sắp xếp các kí tự 
của 1 chuỗi String cho trước thành 1 chuỗi String cho trước khác không?

Input: 2 chuỗi String
Output: True hoặc False

ví dụ:

Input: abc cba
Output: True

Input: abx abb
Output: False
*/
function rearrangeChar(str1, str2) {
    // Viết code tại đây!
    let sumCharCodeStr1 = 0;
    let sumCharCodeStr2 = 0;
    let temp;
    for (let i = 0; i < str1.length; i++) {
      temp = str1[i].charCodeAt(0);
      sumCharCodeStr1 += temp;
    }
    for (let j = 0; j < str2.length; j++) {
      temp = str2[j].charCodeAt(0);
      sumCharCodeStr2 += temp;
    }
    if (sumCharCodeStr1 === sumCharCodeStr2) {
      return true;
    }
    return false;
  }