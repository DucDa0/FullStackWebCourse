//* REST(Representational State Transfer): là 1 kiến trúc cho việc xây dựng các API
//* RESTful APIs là một bộ chuẩn
let x = 0;
async function r5() {
  x += 1;
  console.log(x);
  return 5;
}
(async () => {
  console.log(x);
  x += await r5();
  console.log(x);
})();
