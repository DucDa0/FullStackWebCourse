// Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
function fiveAndGreaterOnly(arr) {
    // your code here
    var newArr=arr.filter(item=>item>=5);
    return newArr;
  }

  

/**
 * Give a list of students, filter out non-female 
 */
 
var members = [
    { name: 'Lan', gender: 'female' },
  { name: 'Linh', gender: 'female' },
  { name: 'Trung', gender: 'male' },
  { name: 'Peter', gender: 'gay' }
];
function filterOutFemales(members) {
// your code here!
var newArr=members.filter(item=>item.gender!=='female');
return newArr;
}



// Given an array of numbers, return a new array that only includes the even numbers.
function evensOnly(arr) {
    // your code here!
    return arr.filter(item=>item%2===0);
  }
  