// normal comparison

// console.log(10>5);
// console.log(10<5);
// console.log(10>=5);
// console.log(10<=5);
// console.log(10!=5);
// console.log(10==5);

// let a=10
// let b=a
// let c=10
// console.log(a==b);
// console.log(a==c);
// /* here true because they having same value so the ans will true*/
// console.log("**********************");
// let obj1={'a':10}
// let obj2=obj1
// let obj3={'a':10}
// /*but here there reference will be compared not value so obj1 and obj2 having same reference so there comparision will be true but obj3 having ifferent referance so ther ether comparison will be false */
// console.log(obj1==obj2);
// console.log(obj1==obj3);


// console.log("2">1);
// console.log("02">1);
// the result is true because comparions convert string to number and here "2" will be convertd to 2 which is greater than 1 so the ans is true

// in case of null
// the equality check == and comparisons > < >= <= both works differently 

// console.log(null>0); // here null is converted to 0 then checking 0>0
// console.log(null==0); // here normally checking that null == 0 or not which is false 
// console.log(null>=0);// here as comparision is there so null will be converted to 0 then 0>=0 so true

// but in the case of undefined the behaviour if normal
// console.log(undefined>0); 
// console.log(undefined==0);  
// console.log(undefined>=0);

// === used to check strictly
// the difference between == and === is that == checks the value and types with type conversion and === check values and types without conversion

console.log("2"==2); // true because the value is same and string is converted to number
console.log("2"===2);// false because the datatype is different 