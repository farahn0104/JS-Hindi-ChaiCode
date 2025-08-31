// sirf ye call na karne ka he fayda nahi hai balki
// global scope ke pollution se bachne ke liye ham IIFE ko use karte hain,
(function one() {
    console.log(`DB Connected!`)
})();

(() => {
    console.log(`DB Connected!`)
})();
((name) => {
    console.log(`Hello ${name}`)
})('Farhan');