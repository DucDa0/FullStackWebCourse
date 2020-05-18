/**
 * Dùng vòng lặp for để hiển thị ra màn hình bảng chữ cái abc.
 * Gợi ý: Dùng String.fromCharCode
 * Ví dụ: String.fromCharCode(97)) sẽ trả về ký tự"a" 
 * Tham khảo: http://www.asciitable.com/ để hiểu thêm về mã ascii
 */
 
function fromCharCode() {
    // viết code ở đây.
    var str='';
    for(var i=97;i<=122;++i){
        str+=String.fromCharCode(i);
    }
    return str;
   }
   