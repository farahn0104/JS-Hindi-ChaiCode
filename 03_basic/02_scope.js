            function one() {
    let name = "Farhan"

    function two() {
        let username = "farhanansari786"
        console.log(name)
        console.log(username);
    }
    two()
    // console.log(username); // Reference Error username is not defined
}
// one()

if (true) {
    let username = 'Farhan';
    if (username === 'Farhan') {
        let website = 'Youtube'
        console.log(username + website)
    }
    // console.log(website); // Reference Error website is not defined
}
// console.log(website); // Reference Error website is not defined

console.log(addOne(14));
function addOne(num) {
    return num + 1
}


// console.log(addTwo(14)); // Reference Error: Cant access before initialization
const addTwo = function (num) { // expression 
    return num + 1
}


/* 

Global Execution Context
Node: Global Object

Global Execution Context
Browser: window object 

***Javascript Execution Context***
1.Global Execution Context :

Exmaple of Code: 

let val1 = 10;
let val2 = 5;
function addNum(num1,num2) {
    let total = num1 + num2
    return total;
}
let result1 = addNum(val1,val2)
let result2 = addNum(10,2)

2. Function Execution Context :

3. Eval Execution Context :

## How the Execution context is Execute: 
first is   : Global execution context is created 
seconds is : Memory Creation phase : sirf jagah allocate ki jaati hai variables ko

# there val1 = undefined; // stored in Memory Creation phase
# there val2 = undefined; // stored in Memory Creation phase

# addNum = function definition as it is 
result1 = undefined; // stored
result2 = undefined; // stored

Note: Cycle one is done and second phase is start

third is : Execution phase :
now assign the value in execution phase
val1 = 10
val2 = 5

then  result1 create a our new execution context
and create variable environment and execution thread
then again memory phase and execution phase start for result1

then  result2 create a our new execution context
and create variable environment and execution thread
then again memory phase and execution phase start for result2
*/