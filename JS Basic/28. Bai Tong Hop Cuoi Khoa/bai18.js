/* Hãy viết một hàm để tìm một số có số lần lặp lại nhiều nhất trong một dãy các số nguyên.

Input: dãy số
Output: 1 dãy số bao gồm các số có số lần lặp lại nhiều nhất

ví dụ:
Input: [1,2,3,4,1,2,2,1]
Output: [1,2]*/
function findMostFrequent(arr) {
    // Viết code tại đây!
    let sortedArr = arr.sort((a, b) => a - b);
    let count = 1;
    let temp = [];
    let listOfCount = [];
    for (let i = 0; i < sortedArr.length; i++) {
      if (sortedArr[i] === sortedArr[i + 1]) {
        count++;
      } else {
        temp.push([sortedArr[i], count]);
        listOfCount.push(count);
        count = 1;
      }
    }
    let max = Math.max(...listOfCount);
    let temp_2 = [];
    let result = [];
    for (let j = 0; j < temp.length; j++) {
      temp_2 = temp[j];
      if (temp_2[1] === max) {
        result.push(temp_2[0]);
      }
    }
    return result;
  }