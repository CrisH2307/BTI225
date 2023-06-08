//week 2
// closure: a function inside another function

function program (prog)
{
    var school = "YorkU";      //Function scope
    function student (name)
    {
        var age = 17;
        // var txt = "Name: " + name + " School: " + school + " ,Program: " + prog;    //! This way is too much time
        var txt = `Name: ${name}, School: ${school}, Program: ${prog} `; // $: passing the string name, evaluated and display // Use becti (`) 
        return txt;
    }

    //console.log(name) // Rules of closure, inside can't use the variable outside function
    return student; // the function returns a whole function
}

var temp = program("BSD");    // temp gets student function
var cris = temp("Cris");     
console.log(temp); //! temp = program (program return student function) ==> temp = student
console.log(cris); //! temp = student ; ==> cris = student ==> it returns student function


var harry = program("BBA")("HarryPotter"); // program("BBA") is the same as temp. It returns student function, ("HarryPotter") is another parameter of function ==> We are calling 2 functions in the row
console.log(harry);
// template literal
// var x = 10;
// console.log("x=", x);
// console.log("x="+ x);
// console.log('x=${x}');
 console.log(`Hello 
World`);

var sq = function(n){return n * n;};

console.log(sq(9));
