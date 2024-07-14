const name='chinmay'

// console.log(name);
// console.log(name[0]); // accessing string through index

const number=5648

// console.log(name+number);

// another way to concatinate i.e string Interpolation
// console.log(`hello my name is ${name} and number is ${number}`);

const gameName=new String('AlphaRomeo') 
// if you declare the strings in this way you can use all the string methods

// console.log(gameName.endsWith('o'));
// console.log(gameName.endsWith('t'));
// console.log(gameName.length);
// console.log(gameName.toUpperCase()); // but it will not change the original value of the variable
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('R'));

// string slicing

// console.log(gameName.substring(0,4)); //end value is not included
// console.log(gameName.substring(3,8));

// using slice
// console.log(gameName.slice(1,8));
// console.log(gameName.slice(-4,18));

// difference is that u can use negative index in slice but if you use -ve index in substring then it will ignore it and starts form 0

const newString='      chinmay       '
// console.log(newString);
// console.log(newString.trim()); // it will remove the spaces from both side

const url="https://office.com/about office news"
// console.log(url.replace(' ','%')); //but it will replace only the first occurance
// console.log(url.includes('office')); 

const myString="hello how are you"
const myString1="hello-how-are-you"
console.log(myString.split(' ')); // it will split your string to an array based on different arguments like space, -,_

console.log(myString1.split('-'));