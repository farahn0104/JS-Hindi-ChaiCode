 // const tinderUser = new Object(); // this is a Singleton object
const user = {} // that is Non Singleton object

user.id = '123abc'
user.name = 'Farhan'
user.isLoggedIn = false;

// console.log(user);

const regularUser = {
    email: 'some@gmail.com',
    fullname: {
        userFullName: {
            firstName: 'Farhan',
            lastName: 'Ansari',
        }

    }
}

// console.log(regularUser.fullname.userFullName.lastName);


// const obj = {...obj1, ...obj2}
// console.log(obj);

const obj1 = { 1: 'a', 2: 'b', 3: 'c' }
const obj2 = { 4: 'd', 5: 'e', 6: 'f' }

const obj3 = { obj1, obj2 }
// console.log(obj3,);

// const obj4 = Object.assign(obj1,obj2)
// console.log(obj4)

const obj4 = Object.assign({}, obj1, obj2)
// console.log(obj4)

const data = [
    {
        id: 1,
        email: 'user1@gmail.com'
    },
    {
        id: 2,
        email: 'user2@gmail.com'
    },
    {
        id: 3,
        email: 'user3@gmail.com'
    },
    {
        id: 4,
        email: 'user4@gmail.com'
    },
    {
        id: 5,
        email: 'user5@gmail.com'
    },
    {
        id: 6,
        email: 'user6@gmail.com'
    },
    {
        id: 7,
        email: 'user7@gmail.com'
    },
    {
        id: 8,
        email: 'user8@gmail.com'
    },
    {
        id: 9,
        email: 'user9@gmail.com'
    },
    {
        id: 10,
        email: 'user10@gmail.com'
    },
    {
        id: 11,
        email: 'user11@gmail.com'
    },
    {
        id: 12,
        email: 'user12@gmail.com'
    },
]
// console.log(data.map(d => d.id));
// console.log(data.map(d => d.email));

// console.log( Object.keys(data));
// console.log( Object.values(data));

// console.log(Object.entries(data));


const tinderUser = {
    id: 1,
    name: 'farhan',
    email: 'farhan@gmail.com'
}
console.log(tinderUser.hasOwnProperty('email')); // true



