/* 
// date calculate in milliseconds from 1st jan to 1970
const date = new Date(); // 1st jan 1970

console.log(date);                  // 2025-08-30T11:34:07.531Z
console.log(date.toDateString());   // Sat Aug 30 2025
console.log(date.toLocaleString()); // 8/30/2025, 11:35:31 AM
console.log(date.toLocaleString()); // 8/30/2025, 11:35:31 AM

let myCreatedDate = new Date(2023,0,23)
console.log(myCreatedDate);
*/

/* 
let myCreatedDate = new Date(2023,0,23) 
console.log(myCreatedDate.toDateString());       // Mon Jan 23 2023
console.log(myCreatedDate.toLocaleDateString()); // 23/1/2023
console.log(myCreatedDate.toLocaleString());     // 23/1/2023, 12:00:00 am
*/

/* 
let myCreatedDate= new Date(2023, 0, 23, 5, 3)
console.log(myCreatedDate.toLocaleString()); // 23/1/2023, 5:03:00 am
*/

/* 
let myCreatedDate = new Date('2023-01-14');
console.log(myCreatedDate.toDateString());       // Sat Jan 14 2023
console.log(myCreatedDate.toLocaleDateString()); // 14/1/2023
console.log(myCreatedDate.toLocaleString());     // 14/1/2023, 5:30:00 am
*/

/* 
const newDate = new Date('08-30-2025, 17:16:1');
console.log(newDate.toDateString());        // Sat Aug 30 2025
console.log(newDate.toLocaleDateString());  // 30/08/2025
console.log(newDate.toLocaleString());      // 14/1/2023, 5:30:00 am
*/

// let timeStamps = Date.now()
// console.log(timeStamps); // 1756554509263, 1 jan 1970 to today timestamps in milliseconds

// const newDate = new Date('08-30-2025');
// console.log(newDate.getTime()); // 1756492200000 date timestamps from 1 jan to 1970

// Convert in Seconds 
// console.log(Math.floor(Date.now() / 1000)); // 1756554736

/* 
let newDate = new Date()

console.log("Date : " ,newDate.getDate());
console.log("Day :" ,newDate.getDay());
console.log("Full Year : " ,newDate.getFullYear());
console.log("Hours : " ,newDate.getHours());
console.log("Milliseconds : " ,newDate.getMilliseconds()); // 293
console.log("Minutes : " ,newDate.getMinutes());
console.log("Seconds : " ,newDate.getSeconds()); // 51
*/


/* 
let newDate = new Date()

let result = newDate.toLocaleString('default', {
    dayPeriod: 'long',
    
    
})
console.log(result);
*/
