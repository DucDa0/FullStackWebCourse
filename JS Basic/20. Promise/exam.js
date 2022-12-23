console.log('Start');
function test() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('A');
    }, 3000);
  });
}
function test2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('B');
    }, 5000);
  });
}
function test3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('C');
    }, 1000);
  });
}
Promise.all([test2(), test(), test3()]).then((res) => {
  const [res1, res2, res3] = res;
  console.log(res1);
  console.log(res2);
  console.log(res3);
});
// async function asy() {
//   const res1 = await test();
//   const res3 = await test3();
//   const res2 = await test2();
//   console.log(res2);
//   console.log(res1);
//   console.log(res3);
// }
// asy();
// test()
//   .then((res) => {
//     console.log(res);
//     return test3();
//   })
//   .then((res) => {
//     console.log(res);
//     return test2();
//   })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
console.log('End');
