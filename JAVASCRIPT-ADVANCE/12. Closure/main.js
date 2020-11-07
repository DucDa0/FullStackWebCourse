function callYourName(name) {
  return function getYourInfor(age) {
    console.log(`${name} is ${age}`);
  };
}

const infor = callYourName('Duc');
infor(21);
// https://viblo.asia/p/javascript-closures-PdbknoZLvyA
// https://viblo.asia/p/ban-nen-biet-closure-hoat-dong-nhu-the-nao-aWj53VQQl6m
