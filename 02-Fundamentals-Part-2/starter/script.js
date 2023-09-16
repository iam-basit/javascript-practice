// ** Activating the Strict Mode:

'use strict'

/*
let getDriverLicense = false;
const passTest = true;

if(passTest) getDriverLicense = true; console.log("Now you can drive :D");
if(!passTest) console.log("You have to pass the test! :(");
*/  

//** Functions"

/*
function juiceMaker(apple,orange){
 const ready =`Here are ${apple} apple juice and ${orange} orange juice being ordered`;
 return ready;
}
const orderReady = juiceMaker(1,3);
console.log(orderReady);
*/

//* Function declaration:
/*
function calcAge1(birthYear){
    return 2023 - birthYear;
}
const age1 = calcAge1(1988);
console.log();
*/
//** Function expression:
/*
const calcAge2 = function (birthYear){
    return 2035 -birthYear ;
}
const age2 = calcAge1(1988);
console.log(age1,age2);
*/

//** Arrow Function: are not getting (this) keyword that is why we should not use it everywhere.

const calcAge3 = (birthYear)=>{
    return 2035 - birthYear;
}
const age3 = calcAge3(1988);
console.log(age3);

const yearsUntilRetirement = (firstName,birthYear)=>{
    const currentAge = 2023 - birthYear;
    const retirement = 65 - currentAge;
    return console.log(`${firstName} retiring after ${retirement} years!`);
}

const retiringTime = yearsUntilRetirement("Basit",1998);
