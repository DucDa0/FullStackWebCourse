/* Write a function return maximum possible sum of some of its k consecutive numbers 
(numbers that follow each other in order.) of a given array of positive integers
*/
function maxOfSumChain(arr, k) {
    // write code here.
    let sortedArr = arr.sort((a, b) => b - a);
    let maxOfSum = 0;
    for (let i = 0; i < k; i++) {
      maxOfSum += sortedArr[i];
    }
    return maxOfSum;
  }