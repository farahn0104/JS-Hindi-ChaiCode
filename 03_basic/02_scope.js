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