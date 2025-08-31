// Arrow Function

const user = {
    username: 'Farhan',
    price: 199,

    welcomeMessage: function () {
        console.log(`Hello, ${this.username}`);
    }
}
/* 
user.welcomeMessage(); // Hello Farhan
user.username = 'Hamdan'
user.welcomeMessage(); // Hello Hamdan
*/

// console.log(this); //Inside the Node Empty object {} 
// console.log(this); //Inside the Browser return the window object {} 


function nodeObjectNormalFun() {
    let user = 'Farhan'
    console.log(this.user); // undefined only, works in object not in the function
    console.log(this); // global object
    console.log(user);
}

// console.log('Normal Function : ')
// nodeObjectNormalFun()

const nodeObjectAnonFun = function () {
    let user = 'Farhan'
    console.log(this.user); // undefined only, works in object not in the function
    console.log(this); // global object
    console.log(user);
}
// console.log('Anonymous Function : ')
// nodeObjectAnonFun();

const nodeObjectArrowFun = () => {
    let user = 'Farhan'
    console.log(this.user); // undefined only, works in object not in the function
    console.log(this); // Empty Object
    console.log(user); // Farhan
}
console.log('Arrow Function : ')
// nodeObjectArrowFun()

const one = (num1, num2) => num1 + num2;   // implicit return, not use {} bracket and return keyword
const two = (num1, num2) => (num1 + num2); // we can also use that
const three = (num1, num2) => { return num1 + num2 };   // Explicit return, use {} bracket and return keyword

