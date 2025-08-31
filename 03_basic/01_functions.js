/* 


*/

/* 
function addTwoNumber(num1,num2 ){
    return num1 + num2
}
console.log(addTwoNumber()); // NaN
console.log(addTwoNumber(5 , 10)); // 15

console.log(addTwoNumber(5 , '10')); // 510
console.log(addTwoNumber(5 , null)); // 5
console.log(addTwoNumber(5 , undefined)); // NaN


function isLoggidIn(username){
    return `{username} just logged in!`
}
console.log(isLoggidIn('Farhan')); // Farhan just logged in!
console.log(isLoggidIn(''));      //'' just logged in!
console.log(isLoggidIn());        // undefined just logged in!

function calculateCartPrice(val3, val2, ...num1) { // rest Operator
    return num1
}
const price = calculateCartPrice(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
console.log(price)

const user = {
    username: 'Farhan',
    price: 199
}

const handleObject = (anyObj) => {
    console.log(`Username is ${anyObj.username} and Price is ${anyObj.price}`)
}

handleObject(user)
*/