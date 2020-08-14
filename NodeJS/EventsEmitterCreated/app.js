const Emitter = require('./emitter.js');
const statusCode = require('./config').statusCode;
const emitter = new Emitter();

emitter.on(statusCode.Errors,function(){
    console.log('Bi loi roi');
})

emitter.on(statusCode.Complete,function(){
    console.log('Ok roi nhe');
})

const arr=[404,200];

for(let val of arr){
    val===404 ? emitter.emit(404) : val ===200 ? emitter.emit(200) : console.log('No errors')
}