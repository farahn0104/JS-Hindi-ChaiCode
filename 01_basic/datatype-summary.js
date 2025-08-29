/* 
kis tarah se data ko memory me rakha jaata hai aur acces kiya jata hai us besis par 2  parts me divide kiya gaya hai

I. Primitive Type (Refence Datatype) :
call by value 
inki copy hame milti actual reference nahi milta hai means agar main isme koi chages karta hun to iski copy me changes honge na ki original reference me change hoga.

1. String, 2. Number, 3. Boolean, 4. null, 5. undefined 6. Symbol, 7. bigInt

II. Reference (Non Primitive) :  
Array, Object, functions

*/

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId); // false because both are a symbol data type which denotes a uniqueness.
// console.log(typeof id); // symbol


// Reference (Non Primitive Type)

const heros = ["Shaktiman","Hatim","Khali","Salman","Shahrukh","Amir",]
const myObj = {
    name: 'Farhan Ansari',
    age: 24,
    city: 'Noida',
    designation: 'Web Developer'
}
const myFunction = function () {
    console.log('Hello My name is farhan');
}
console.log(typeof heros); // object 
console.log(typeof myObj); // object
console.log(typeof myFunction); // function


