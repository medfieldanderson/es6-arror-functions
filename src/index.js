// https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

var numbers = [3, 56, 2, 48, 5];

// const newNumbers = numbers.map((x) => {return x * x});
// console.log(newNumbers);

////Map -Create a new array by doing something with each item in an array.
// const newNumbers = numbers.map(function (x) {
//   return x * 2;
// });
// ES6
const mapNumbers = numbers.map((x) => x * 2);
console.log(mapNumbers);

//////Filter - Create a new array by keeping the items that return true.
// const newNumbers = numbers.filter(function(num) {
//   return num < 10;
// });
// ES6
const filterNumbers = numbers.filter((num) => num < 10);
console.log(filterNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.
// var newNumber = numbers.reduce(function (accumulator, currentNumber) {
//     return accumulator + currentNumber;
// })
// ES6
var reduceNumber = numbers.reduce((acc, num) => acc + num);
console.log(reduceNumber);

////Find - find the first item that matches from an array.
// const newNumber = numbers.find(function (num) {
//   return num > 10;
// })
// ES6
const findNumber = numbers.find((num) => num > 10);
console.log(findNumber);

////FindIndex - find the index of the first item that matches.
// const newNumber = numbers.findIndex(function (num) {
//   return num > 10;
// })
// ES6
const findIndex = numbers.findIndex((num) => num > 10);
console.log(findIndex);
