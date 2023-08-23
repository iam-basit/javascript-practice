// ** Activating the Strict Mode:

'use strict'

/*
let getDriverLicense = false;
const passTest = true;

if(passTest) getDriverLicense = true; console.log("Now you can drive :D");
if(!passTest) console.log("You have to pass the test! :(");
*/  

//** Functions"

function juiceMaker(apple,orange){
 const ready =`Here are ${apple} apple juice and ${orange} orange juice being ordered`;
 return ready;
}
const orderReady = juiceMaker(1,3);
console.log(orderReady);