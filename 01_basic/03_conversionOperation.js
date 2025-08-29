let score =true;

console.log(typeof score); // string

let valueInNumber = Number(score); 
console.log(typeof valueInNumber); // number
console.log(valueInNumber); // NaN
console.log(typeof NaN); // number
let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);

console.table([isLoggedIn,booleanIsLoggedIn,typeof booleanIsLoggedIn,typeof isLoggedIn]);
let someNumber = 33;
let stringNumber = String(someNumber)
console.log(stringNumber);

console.table([someNumber,typeof someNumber, stringNumber,typeof stringNumber ]);


let value = 3;
let negval = -value;
console.log(negval); // -3

let str1 = 'Hello';
let str2 = ' Farhan';

let str3 = str1+str2;
console.log(str3); // Hello Farhan

 
console.log("1" + 2);     //  12
console.log(1 + "2");     //  12
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2"); //  32


console.log(+true); // 1 because the + denotes to convert as number to it return 1

console.log(+"");      // 0

let num1, num2,num3;
num1 = num2 = num3 = 2+2
 
console.log(num1); // 4
console.log(num2); // 4
console.log(num3); // 4

let gameCounter = 100;
gameCounter++; // in the postfix value are use first then they increased.f
console.log(gameCounter); // 101
++gameCounter; // prefix value increment first then use.
console.log(gameCounter); // 102




let x = 3;
console.log(++x)    
console.log(x);

let y = x++;

console.log(`X: ${x}, Y: ${y} `);



