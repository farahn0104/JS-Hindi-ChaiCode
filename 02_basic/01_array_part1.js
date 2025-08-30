/* 


*/
const myArr = [12, 4, 32, 543, 56];
const myHeroes = ['Shaktiman', 'Haatim'];

// console.log(myArr);    //  [12,4,32,543,56]
// console.log(myHeroes); // ['Shaktiman','Haatim']

// console.log(myArr[1]);    // 4
// console.log(myHeroes[1]); // Hatim


// Array Methods

// myArr.push(6)//
// myArr.push(7)//
// console.log(myArr);

// myArr.pop()//
// myArr.pop()//
// console.log(myArr);

// myArr.unshift(9);  //
// console.log(myArr);//

// myArr.shift();     // [ 9, 12, 4, 32, 543, 56 ]
// console.log(myArr);// [ 12, 4, 32, 543, 56 ]


// console.log(myArr.includes(5)); // false
// console.log(myArr.includes(543)); // true

// console.log(myArr.indexOf(5)); // -1
// console.log(myArr.indexOf(543)); // 3

// const newArr = myArr.join()

// console.log(newArr); // 12,4,32,543,56 convert in string and join with a comma seprator

// slice() and splice() method

console.log("Original before Array : ", myArr); // Original before Array :  [ 12, 4, 32, 543, 56 ]
console.log("A : ", myArr); // 12,4,32,543,56
const myn1 = myArr.slice(1,3)
console.log("B : ", myn1); // B :  [ 4, 32 ]

console.log("C : ", myArr); // 12,4,32,543,56

const myn2 = myArr.splice(1,3)
console.log("Original After Array : ", myArr); // Original After Array :  [ 12, 56 ]
console.log("D : ", myn2); // B :  [ 4, 32, 543 ]