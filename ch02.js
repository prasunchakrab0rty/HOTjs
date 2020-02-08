//Ch 02: Call, Apply and Bind

const player0 = {
    firstname: "Prasun",
    lastname: "Chakraborty"
}
const player1 = {
    firstname : "Saurav",
    lastname : "Ganguly"    
}
const player2 = {
    firstname: "Rahul",
    lastname: "Dravid"
}

let fullname = function (dob, lastmatch) {
    console.log(this.firstname+ " "+ this.lastname+" born " + dob + " Played last ODI on "+ lastmatch)
}

// Every function in javascript has access to special function "call" it can invoke the function with
// reference, which can be passed as 1st argument. 'this' in the function will then refer to the 1st argument

fullname.call(player1,"8 July 1972","15 November 2007"); 

// Apply is similar to call it just passes the arguments as array list
fullname.apply(player2,["11 January 1973","16 September 2011"]);

// Bind doesn't invoke the function rather it returns a copy of the function 
//with reference to the argument passed.
let printmyname = fullname.bind(player0,"15 August 1947", "26 January 1950");
printmyname();
