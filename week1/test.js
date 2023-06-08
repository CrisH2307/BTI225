// scope: variable, block, function, global
// block scope: let

// ans var = 10;  Error: Global Scope

// arguments: built-in obj
// (4) indefinite number of parameters
function sum ()
{
    var total = 0;
    for (let i = 0; i < arguments.length; i++)
    {
        total += arguments[i];
    }
    return total;
}

//(5) rest parameter
function sum2(...list) // ... regular identity
{
    var total = 0;
    for (let i=0; i < list.length; i++)
    {
        total += list[i];
    }
    return total; 

}

//(6) function expression
var sum3 = funtion(... list)
{
    var total = 0;
    for (let i = 0; i <list.length ; i++)
    {
        total += list[i];
    }
    return total;
};
 //! In JS, a function is an object/value. This means that you can assign to a variable
// function xy(function()=>)

function power(base, exp) 
{
    var ans = 1; // Shadowing  ..   If line 8 removes var, 

    expPos = (exp > 0) ? exp: exp*(-1);
    for (let counter = 0; counter < expPos; counter++)   //? Block scope, let gives you scope smaller than var
    {
        ans = base * ans;
    }
    // console.log("After for loop, counter = ", counter); //! Line 12: counter is out of scope when line 8 uses let instead of var, block scope
    if (exp > 0)
    {
        ans = 1 / ans;
    }
    //var ans = 10;  You cant declare ans twice, function scope
    return ans;
}
console.log(power(2,3));
//console.log(ans); // Error: Function Scope

