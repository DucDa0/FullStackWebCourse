// Viết hàm để viết hoa chữ cái đầu của từng từ trong câu
// Example
// capitalize("abc") // "Abc"
function capitalize(str) {
    // viết code ở đây
    let strArray = str.split('');
    let newStr = '';
    for (let i = 0; i < strArray.length; i++) {
      strArray[0] = strArray[0].toUpperCase();
      if (strArray[i] === ' ') {
        strArray[i + 1] = strArray[i + 1].toUpperCase();
      }
      newStr += strArray[i];
    }
    return newStr;
  }