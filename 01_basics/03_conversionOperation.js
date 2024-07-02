//   let score =33
//   console.log(score);
//   console.log(typeof score);

  let score1= "33"
//   console.log(score1);
//   console.log(typeof score1);

//   now convert the string in number
// let valueInNumber= Number(score1)
// console.log(valueInNumber);
// console.log(typeof valueInNumber);

// let score2 ="33ABC"
// let valueInNumber= Number(score2)
// console.log(valueInNumber); // value will come in NaN means not a number, NaN is also a type in JS
// console.log(typeof valueInNumber);

// let score3 =null
// let valueInNumber= Number(score3)
// console.log(valueInNumber); 
// console.log(typeof valueInNumber);

// let score4 =undefined
// let valueInNumber= Number(score4)
// console.log(valueInNumber); 
// console.log(typeof valueInNumber);

// let score5 ='chinmay'
// let valueInNumber= Number(score5)
// console.log(valueInNumber); 
// console.log(typeof valueInNumber);

// Boolean Conversion

// let isLoggedIn=1
// console.log(`Before conversion ${isLoggedIn}`); 
// console.log(`Before conversion type ${typeof isLoggedIn}`);
// let checkBoolean =Boolean(isLoggedIn)
// console.log(`After conversion ${checkBoolean}`); 
// console.log(`After conversion type ${typeof checkBoolean}`); 

// let isLoggedIn=0
// console.log(`Before conversion ${isLoggedIn}`); 
// console.log(`Before conversion type ${typeof isLoggedIn}`);
// let checkBoolean =Boolean(isLoggedIn)
// console.log(`After conversion ${checkBoolean}`); 
// console.log(`After conversion type ${typeof checkBoolean}`); 

// let isLoggedIn='Chinmay'
// console.log(`Before conversion ${isLoggedIn}`); 
// console.log(`Before conversion type ${typeof isLoggedIn}`);
// let checkBoolean =Boolean(isLoggedIn)
// console.log(`After conversion ${checkBoolean}`); 
// console.log(`After conversion type ${typeof checkBoolean}`); 

/*when a non zero value will convert into boolean then it will become true in boolean 
 when a zero value/empty string  will convert into boolean then it will become false in boolean */

// number to string

let num=122

let numString=String(num)
// console.log(numString);
// console.log(typeof numString);

// **************************** Operations*******************************

// general operations
// console.log(3+3);
// console.log(3-3);
// console.log(3/3);
// console.log(3%3); // it will give reminder
// console.log(3**3);

// let str1='Hello'
// let str2=' Chinmay'
// console.log(str1+str2);
// console.log(str1*3); // here it will give NaN

// tricky
// console.log("1"+2);
// console.log(1+"2");
// console.log("1"+2+2);
// console.log(2+2+"1");

// how these are working 
/* if the first value is string then it will consider all of them as string and concatinate them
   ex- console.log("1"+2+2); as string is first value so the output is 122

   if the value is a number and string is coming in last then it will first add all the numeric values then concatinate with the string
   console.log(2+2+"1"); 2+2 is 4 then concatinate with 1

*/

// console.log(+true);
// In JavaScript, the + operator can be used to convert a value to a number. When applied to a boolean value like true, it converts true to 1 and false to 0.

// console.log(+""); 
// as "" is a empty string means 0 value so it will convert to 0


// prefix and postfix

// let stepCounter=1000
// // stepCounter++
// ++stepCounter
// console.log(stepCounter);

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"
//const y = x++;: Here, x++ is the post-increment operator. It returns the current value of x (which is 3) and then increments x by 1. So, y is assigned the value 3, and x becomes 4.

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

// const b = ++a;: Here, ++a is the pre-increment operator. It increments a by 1 first (making a equal to 4) and then returns the new value of a. So, b is assigned the value 4