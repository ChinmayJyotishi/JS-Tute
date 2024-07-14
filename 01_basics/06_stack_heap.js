// stack memory is used in all primitive type and heap memory is used in non primitive 

// primitive
let officeName='Myoffice'

let anotherOffice=officeName
anotherOffice='NewOffice'
// console.log(anotherOffice);
// console.log(officeName);

// notes--here all the values are stored in stack and anotherOffice is getting a copy of officeName so when we change the value of anotherOffice it will not refelect to officeName

// non-primitive

let user={
    name:'govardhan',
    email:'goverdhan@gmail.com'
}
let newUser=user
newUser.name='jack'

console.log(user);
console.log(newUser);

// notes--here all the values are stored in heap and newUser is getting the exact reference of user so when we change the value of newUser it will refelect to user
