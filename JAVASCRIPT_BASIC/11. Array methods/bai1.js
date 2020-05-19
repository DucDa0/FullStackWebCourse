/*
	Viết 1 chương trình xóa đi n phần tử cuối cùng của 1 array
*/
function removeEnd(arr, n) {
    // your code here!
    arr.splice(arr.length-n,n);
    return arr;
  }