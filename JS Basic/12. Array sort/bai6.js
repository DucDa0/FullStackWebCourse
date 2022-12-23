// Sort an array alphabetically
function alphabetical(arr) {
    // Write code here...
    var sorted = arr.sort(function(a, b) {
      if (a < b)
        return -1;
      if (a > b)
        return 1;
      return 0;
    });
    return sorted;
  }