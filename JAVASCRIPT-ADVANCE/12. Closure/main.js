function callYourName(name){
    return function getYourInfor(age){
        console.log(`${name} is ${age}`);
    }
}

const infor=callYourName('Duc').getYourInfor(21);
console.log(infor);