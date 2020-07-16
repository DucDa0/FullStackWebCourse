//* Khái niệm cơ bản
// JS là một ngôn ngữ đơn luồng(single thread), nghĩa là 1 tác vụ chỉ có thể thực thi tại 1 thời điểm.
function Blog(blog1, blog2){
    this.blog1=blog1;
    this.blog2=blog2;
}
const _blog1=new Blog('ok', 'db');
const _blog2=Blog('kk','sai r');
console.log('_blog1>>', _blog1);
console.log('_blog2>>', _blog2);