/* 
Singleton Object
litirals Object
when we create with the help of litirals singleton is not created.
but with the help of constructor the singleton is created: like that Object.create() 

*/
/* 
const myKey = Symbol('my key value')
const jsUser = {
    name: "Farhan Ansari"
}

const mySym = Symbol('key 1');

// pass the symbol as key in object
const myObj = {
    name: 'Farhan',
    [mySym]: 'key1',
    location: 'noida',
    'full name': 'Farhan Ansari'
}

console.table(myObj[myKey]); // access the value of symbol key in log

myObj.location = 'Tanda'
Object.freeze(myObj)

myObj.location = 'Gurgaon'
console.log(myObj['full name']);
console.log(myObj);

console.log(typeof myObj[mySym]);
console.log(myObj);



myObj.greeting = function () {
    console.log('Hello World')
}

myObj.greetingTwo = function () {
    console.log(`Hello JS user ${this.name}`)
}
myObj.greeting()
myObj.greetingTwo()
*/