// primitive

// 7types-- String, Number, Boolean, null, undefined, Symbol, BigInt

// Symbol

let Id=Symbol('123')
let anotherId=Symbol('123')

// here both the value looking same but both are unique and different as symbol is used
// proof
console.log(Id=== anotherId);

// BigInt
// let bigNumber=456878484784468712312315655n
  
// Reference Type/Non-primitive

// Array, Objects, Functions
// array

const arr1=[1,2,3]

// objects

let myObj={
    'name':'chinmay',
    'age':22
}

// function as  variable

const myFun=function(){
    console.log('This is a function');
}
myFun()

 