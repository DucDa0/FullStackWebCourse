// *Lưu ý
/**
 * *Khi gặp await, nó sẽ convert hàm đó thành promise với callback là tất cả những phần code phía sau await đó.
 * *Bản chất await là một promise, phần code nằm sau await thực chất là code nằm trong callback của hàm await đó
 */
// *  async/await là một cơ chế giúp thực hiện các thao tác bất đồng bộ một cách tuần tự hơn

// https://anonystick.com/blog-developer/su-that-ve-try-catch-javascript-2020050239364072
// http://tuyendung.misa.com.vn/tat-tan-tat-ve-dong-bo-bat-dong-bo-trong-javascript/
// https://medium.com/@giangcoffee/event-loop-l%C3%A0-g%C3%AC-v%C3%A0-ho%E1%BA%A1t-%C4%91%E1%BB%99ng-th%E1%BA%BF-n%C3%A0o-d52caa908090
// https://medium.com/vinid/hi%E1%BB%83u-v%E1%BB%81-b%E1%BA%A5t-%C4%91%E1%BB%93ng-b%E1%BB%99-trong-javascript-836c679eb93f
// https://toidicodedao.com/2017/10/10/async-await-trong-javascript/
// https://ehkoo.com/bai-viet/tat-tan-tat-ve-promise-va-async-await
// https://kipalog.com/posts/Co-ban-ve-async-await-trong-javascript
// https://blog.daovanhung.com/post/event-loop-trong-nodejs
//https://codelearn.io/sharing/ajax-co-ban-cho-lap-trinh-front-end

// ex
async function test() {
  var result = await db.collection('hospitals').findOne({ name: 'xxx' });
  console.log('after findResult: ', result);
  //... more code here ...
}

// tương đương với
function test() {
  db.collection('hospitals').findOne({ name: 'xxx' }, function (result) {
    console.log('after findResult: ', result);
    //... more code here ...
  });
}

// * Another ex
function sum(x, y) {
  return x + y;
}

async function process() {
  console.log('begin');
  let res = await sum(9, 6);
  console.log(res);
  console.log('end');
}
process();
console.log('A');

/**
 * begin
 * A
 * 15
 * end
 */
