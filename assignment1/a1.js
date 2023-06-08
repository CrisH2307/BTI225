/***********************************************************************
* Assignment 1:
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*? Name: Xuan Khang Huynh (Cris) -- Student ID: 105444228 -- Date: 05/10/2023
***********************************************************************/

/***************************** Task1 *************************/
function playNumbers(...para)
{
/*     var i;
    if (para.length == 0)
        console.log("There are no output");
    
    for (i = 0; i < para.length; i++)
    {
        if (typeof para[i] !== "number")
            console.log(para[i], "is not a number");
    }

    const max = Math.max(...para);
    const sum = para.reduce((acc, val) => acc + val, 0);
    const avg = sum / para.length;

 console.log(`The largest number of (${para.join(", ")}) is ${max}.`);
console.log(`The average of (${para.join(", ")}) is ${avg}.`); */


if (para.length == 0) {
    console.log("There are no inputs.");
    return;
  }

  let numbers = para.filter((arg) => typeof arg === "number");

  if (numbers.length !== para.length) {
    para.forEach((arg) => {
      if (typeof arg !== "number") {
        console.log(`${arg} is not a number.`);
      }
    });
    return;
  }

  var maxnum = para[0];
  for (let i = 0; i < para.length; i++)
  {
    if (para[i] > maxnum)
    {
      maxnum = para [i];
    }
  }
  console.log("The largest number of", para, "is", maxnum);

  var sum = 0;
  var avg = 0.0;
  for (let i = 0; i < para.length; i++)
  {
    sum += para[i];
    avg = sum / para.length;
  }
    console.log("The average of", para, "is", avg);
}
console.log("/***************************** Task1 *************************/");
playNumbers();
playNumbers("abc", 3, "hello");
playNumbers(9,3,6);
playNumbers(3,5,1,3,5);
playNumbers("Good day!",3,4,32,"hi", "we");

console.log()

/***************************** Task2 *************************/
function convertCF(val, cf )
{
  var Cel = 0;
  var Far = 0;

  if (isNaN(val)) {
    console.log("I need a number");
    return;
  }

  if (cf !== "C" && cf !== "c" && cf !== "F" && cf !== "f") 
  {
    console.log("I am confused :(");
    return;
  }
  
  if (cf == "F" || cf == "f")
  {
      Cel = (val - 32) * 5 / 9;
      console.log( val +"F", "is equivalent to", Cel +"C");
      return;
  }
  
  else if (cf == "C" || cf == "c")
  {
      Far = (val * 9 / 5) + 32;
      console.log(val +"C", "is equivalent to", Far +"F")
      return;
  }

}


console.log("/***************************** Task2 *************************/");
convertCF("avc", "F");
convertCF("32", "M");
convertCF(32, 'F');
convertCF(0, "C");
convertCF(122, "F");
