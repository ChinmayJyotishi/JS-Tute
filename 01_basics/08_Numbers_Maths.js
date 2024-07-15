const score=400
// console.log(score);
// console.log(typeof(score));

// *********define number explicitly *******************

const Balance= new Number(1102)
// console.log(Balance);
// console.log(typeof(Balance));

// now i can use the methods
// toString()
// console.log(Balance.toString()); //now it is converted that number to string
// console.log(typeof(Balance.toString()));


// toFixed()

// console.log(Balance.toFixed(2));
// console.log(Balance.toFixed(3));
// console.log(Balance.toFixed(1));

/* When you call toFixed(2) on the Balance object, it will correctly format the number to two decimal places. This is because the Number object in JavaScript has a toFixed method that can be used to format numbers.
 And it will return a string */


//  toPricision()
const newBalance=new Number(114.213)
// console.log(newBalance.toPrecision(3));

/*When you call toPrecision(3) on the newBalance object, it will format the number to a specified length, including digits before and after the decimal point.

The toPrecision method formats the number to three significant digits. In this case, the number 114.213 is formatted to 114, as the first three significant digits are 1, 1, and 4.*/

// console.log(newBalance.toPrecision(2));


// toLocaleString()
/* this method will convert the number to string and represent it in a specific local format
 it will use commas, periods, and other grouping and decimal symbols for representation
 the default representation in US format 
 to use Indian format use en-IN
*/
const myNum=1000000
// console.log(myNum.toLocaleString());            //1,000,000
// console.log(myNum.toLocaleString('en-IN'));     //10,00,000


// console.log(Number.MAX_VALUE)
// console.log(Number.MIN_VALUE)
// console.log(Number.MAX_SAFE_INTEGER)

/*
In JavaScript, Number.MAX_VALUE, Number.MIN_VALUE, and Number.MAX_SAFE_INTEGER are constants that represent the largest and smallest possible values that can be represented, as well as the largest integer that can be safely represented:

Number.MAX_VALUE is the largest positive number that can be represented in JavaScript. It is approximately 1.7976931348623157e+308.

Number.MIN_VALUE is the smallest positive number that can be represented in JavaScript (closest to 0, but not 0). It is approximately 5e-324.

Number.MAX_SAFE_INTEGER is the largest integer that can be safely represented in JavaScript. It is 9007199254740991. This is due to the fact that JavaScript uses a double-precision floating-point format (64-bit) as specified by the IEEE 754 standard, which can safely represent integers between -(2^53 - 1) and 2^53 - 1.
*/

/* ------------------------------------------------Maths -------------------------------------*/

// console.log(Math);
// console.log(Math.abs(-4)); // it will give a absolute value
// The absolute value of a number is the non-negative value of that number without regard to its sign. 
// console.log(Math.abs(54));
// console.log(Math.round(5.4));
// console.log(Math.ceil(5.1)); //it will round up to upper values means here the upper value of 5.1 is 6 so what ever the number 5.1, 5.5 5.8 it will round up all the numbers to 6
// console.log(Math.ceil(5.6));

// console.log(Math.floor(5.6));
/*The Math.floor() function in JavaScript returns the largest integer less than or equal to a given number. This means it effectively rounds a number down to the nearest integer. 
In this example, Math.floor(5.6) returns 5 because 5 is the largest integer less than or equal to 5.6.
*/


// find minimum and maximum

// console.log(Math.min(4,8,6,12));
// console.log(Math.max(4,8,6,12));

// Random Value
/*
The Math.random() function in JavaScript returns a floating-point number between 0 (inclusive) and 1 (exclusive). This means the number returned will always be greater than or equal to 0 and less than 1.
*/

console.log(Math.random());
console.log(Math.random()*10); //random floot value from 0 to 10(excluded)
console.log(Math.random()*10 + 1); //+1 means now the range is from 1 to 10(excluded)

console.log(Math.floor(Math.random()*10) + 1); // now it will round up the floating points

// range between minimum and maximum

const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min +1))+min);

/*
1--Math.random():

Generates a pseudo-random floating-point number between 0 (inclusive) and 1 (exclusive).

2--Math.random() * (max - min + 1):

Scales the random number to the range [0, (max - min + 1)).
In this case, max - min + 1 is 20 - 10 + 1 = 11.
This means that Math.random() * (max - min + 1) produces a number from 0 (inclusive) up to but not including 11.

3--Math.floor(Math.random() * (max - min + 1)):

Rounds down the scaled number to the nearest integer.
This results in an integer in the range [0, 10].

4--Math.floor(Math.random() * (max - min + 1)) + min:

Shifts the range up by min to [min, max].
Adding min adjusts the range from [0, 10] to [10, 20].
 */