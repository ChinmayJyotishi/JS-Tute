const accountId=96511
let accountEmail="chinmay@google.com"
var accountPassword="85476"
accountAddress='Rairangpur'
let accs; // this will be treated as undefined 

// accountId=45781 you cant assign a new value to a constant

accountEmail='cj@gmail.com'
accountPassword="11245"
accountAddress='Delhi'

// dont use var because of the issues in block scope and functional scope

// console.log(accountId);
// console.table([accountEmail,accountPassword,accountAddress,accs])


// var can be redeclared but let cant be redecalared 

var a =10
var a=55
console.log(a);

// let b=65 
// let b=98 // you cant redeclare 
// console.log(b);

window.alert("heelo")
