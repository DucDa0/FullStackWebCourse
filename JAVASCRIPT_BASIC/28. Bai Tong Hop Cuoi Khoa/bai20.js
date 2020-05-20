/*
Hãy viết một hàm để tìm giá trị lớn nhất có thể đạt được 
của hiệu 2 số bất kì trong dãy số

Input: là một dãy số.
Output: giá trị lớn nhất có thể đạt được của hiệu 2 số bất kì trong dãy số.

Ví dụ:

Input: [1, 2, 3, 8, 9]
Output: 8 (là hiệu của 9 và 1)

*/
function findmaxDiff(arr) {
    // Viết code tại đây
    let sortedArr = arr.sort((a, b) => a - b);
    return sortedArr[sortedArr.length - 1] - sortedArr[0];
  }