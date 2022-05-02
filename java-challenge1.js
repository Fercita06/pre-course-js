//Java challenge

// write a function that takes a number and returns true if it is a positive number and false if it is a negative number

function isNumberPositive (number){
  if (number >= 0) {
    return true;
  }else {
    return false;
  }
}
console.log(isNumberPositive (-1));

//2- write a function that takes a number of days and converts it into an age.
/*let days =
const numberToAge = ()=>{
  let totalAge = days /365;
  return totalAge;
}*/

// 3- write a function that takes three numbers and returns the largest of the three numbers
const getLargestNumber =  (number1, number2, number3) => {
  if (number1 >= number2 && number1 >= number3) {
    console.log ("number1 is the largest number");
  }else if (number2 >= number1 && number2 >= number3) {
    console.log ("number is the largest number");
  }else {
    console.log ("number3 is the largest number");
  }

}
console.log (getLargestNumber (5,1,4));

//4 -write a function that takes an array of names and returns the last name from the array of names.
let students = ["Charlie", "Rob", "Andy", "stu"];

const lastName = students [students.length-1];

console.log (lastName);

//5 - Write a function that takes an array of numbers and returns true if all the numbers are positive. It should return false if there are one or more negative numbers in the array.
// const itemsArr = [number1,number2,number3];
// const allNumbersPositive = () => {
// if(itemsArr = number1 > 0 && number2 > 0 && number3 > 0){
//   console.log ("true");
// }else {
//   console.log ("false");
// }
// }
// console.log(allNumbersPositive[2,4,5]);

let numbers = [2,4,5];
let result = true;

for (let i=0; i>numbers.lenght; i++){
  if (number[i]<0){
    result = false;
    break;
  }
}
console.log(result);