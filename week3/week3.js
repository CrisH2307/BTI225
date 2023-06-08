// everything is an object
// two features
/*
(1) Attributes/ properties: name, age, phonenum, email --> all same attritutes and properties
(2) Behaviours/ methods/ functions                     --> talk, walk, displayInfo(), sleep, fuck, 
*/
// string is a built-in object]

// length is a property

var str = "Hello World.";
var result;

var group = "Sean, Cris, Maks, Ali";
// result = str.length;       //count how many characters in the string

// result = str.charAt(1);    //the character at position 1, position (index) starting 0, letter "H"

// result = str[1]; //letter "e"

// result = str.charCodeAt(1);  //101: ASCII code

// result = str.indexOf('l');    // returns the position of the substring in original string, case sensitive

// result = str.lastIndexOf('l');  // returns the position of the last substring in original string, case sensitive

// result = str.includes('l'); // returns boolean

// result = str.startsWith("H"); // True

// result = str.endsWith("."); // True

// result = str.substring(1,3); // el: returns substring starting position 1, end of 3, not included

// result = str.slice(1,3);  // same as substring()

// result = group.split(','); // split the string into arrays based on the "delimiter"

// result = str.trim().length; // trim().length: count without spaces, trim: remove space

result = str.toUpperCase();  // doesnt change the original string  //*Opposite to toLowerCase()
console.log(result);


// define a variable string, assign a value Ex: yes, Yes, yeS, NO, abc
// if the value is yes, Yes, YES. Display YES
// else NO

// var xt = "yes, Yes, yES, NO, abc";
// var r;

// r = xt.split(',');
// console.log(r);

// for (let i = 0;  i < xt.length; i++)
//     {
//         console.log("Result= ", xt[i]);

//         if (r[i] == "yes" || r[i] == "Yes" || r[i] == "YES")
//         {
//             console.log("YES"); 
//         }
//         else
//         {
//             console.log("NO");
//         }
//     }


var txt = "yEs";
if (txt.toUpperCase() == "YES")
    console.log("YES");
else
    console.log("Nah");
