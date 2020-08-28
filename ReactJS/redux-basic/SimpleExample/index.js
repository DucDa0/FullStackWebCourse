// function reduce(arr, cb, initVal){
//     if(initVal===undefined){
//         initVal=arr[0];
//         arr=arr.slice(1);
//     }
//     for(val of arr){
//         initVal=cb(initVal,val);
//     }
//     return initVal;
// }


// const initState={
    //     speed: 0,
    //     last_speed:1
    // };
// const actions=[
//     {type:'CHANGE_SPEED', payload: 3},
//     {type:'TURN_OFF'},
//     {type:'TURN_ON'},
// ]

const CHANGE_SPEED='CHANGE_SPEED';
const TURN_OFF='TURN_OFF';
const TURN_ON='TURN_ON';

 const changeSpeed=(speed)=>({
    type: CHANGE_SPEED, payload: speed
 })

 const turnOff=()=>({
    type: TURN_OFF
 })

 const turnOn=()=>({
    type: TURN_ON
 })

const {createStore}=require('redux');

const initState={
    speed: 0,
    last_speed:1
};

const reducer=(state=initState, action)=>{
    switch(action.type){
        case 'CHANGE_SPEED':
            return{
                ...state,
                speed: action.payload
            };
        case 'TURN_OFF':
            return{
                ...state,
                speed: 0,
                last_speed: state.speed
            }
        case 'TURN_ON':
            return{
                ...state,
                speed: state.last_speed
            }
        default:
            return state;
    }
}

const store=createStore(reducer);

console.log(store.getState());//* {speed: 0,last_speed: 1}
store.dispatch(turnOn());
console.log(store.getState());//* {speed: 1,last_speed: 1}
store.dispatch(changeSpeed(3));
console.log(store.getState());//* {speed: 3,last_speed: 1}
store.dispatch(turnOff());
console.log(store.getState());//* {speed: 0,last_speed: 3}