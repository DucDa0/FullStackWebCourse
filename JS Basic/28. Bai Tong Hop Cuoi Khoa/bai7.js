//Viết 1 function kiểm tra số lương kí tự 'p' và 't' của 1 chuỗi có bằng nhau hay không
//=============================
//input : string
//output : true or false
//=============================
function equal_pt(str) {
    // viết code ở đây.
    let check;
    let dem = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === 't' || str[i] === 'p') {
        dem++;
      }
    }
    if (dem % 2 === 0) {
      check = true;
    } else {
      check = false;
    }
    return check;
  }