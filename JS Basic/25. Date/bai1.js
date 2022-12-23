/**
 * Viết hàm isWeekend nhận vào 1 ngày dưới dạng string YYYY/MM/DD 
 * trả về true nếu ngày đó là 1 ngày cuối tuần (Thứ 7 hoặc Chủ Nhật), 
 * ngược lại trả về false
 */

function isWeekend(dateString) {
    // Write code here...
    let checkWeekEnd = new Date(dateString);
    if(checkWeekEnd.getDay()===0 || checkWeekEnd.getDay()===6){
        return true;
    }
    return false;
  }