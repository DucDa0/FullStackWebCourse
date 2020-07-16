// let resultA, resultB, resultC;
 
//simulate a async function
function addAsync(num1, num2) {
  return new Promise( function(resolve, reject){
    setTimeout(function(){
      resolve( num1 + num2 );
    }, 500);
  } );
}
 
//Execute async functions
 
addAsync( 1, 2 )
  .then( success1 => {
    // resultA = success1;
    console.log('resultA: ' + success1);
    return addAsync( success1, 3 );
  })
  .then( success2 => {
    // resultB = success2;
    console.log('resultB: ' + success2);
    return addAsync( success2, 4 );
  })
  .then( success3 => {
    // resultC = success3;
    console.log('resultC: ' + success3);
    console.log('total (1 + 2 + 3 + 4): ' + success3);
  })
  ;