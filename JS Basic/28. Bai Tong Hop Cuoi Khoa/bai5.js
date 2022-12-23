// viết hàm kiểm tra xem một chuỗi bắt đầu bằng "Java" hay không 
function startWith(str) {
    // viết code ở đây.
    if (str.toLowerCase().includes('java') === true & str[0].toLowerCase() === 'j') {
      return true;
    }
    return false;
  }