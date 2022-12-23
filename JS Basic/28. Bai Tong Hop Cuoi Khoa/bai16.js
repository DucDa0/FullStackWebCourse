/* Write a function that splits an array (first argument) into groups 
the length of size(second argument) and returns them as a two-dimensional array.
Example
 chunkArrayInGroups(["a", "b", "c", "d", "e"], 2) // [["a", "b"], ["c", "d"], ["e"]]
*/
function chunkArrayInGroups(arr, size){
    // write code here.
    let temp = [];
      let result = [];
      let copyOfSize = size;
      for (let i = 0; i < arr.length; i++) {
          temp.push(arr[i]);
          --size;
          if (size === 0) {
              result.push(temp);
              size = copyOfSize;
              temp = [];
          }   
          if(temp[temp.length-1]===arr[arr.length-1]){
              result.push(temp);
          }
      }
      return result;
  }