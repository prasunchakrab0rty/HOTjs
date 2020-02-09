//Ch 03: Polyfill for bind method

/*
Pollyfill is kind of browser fallback i.e. suppose your browser doesn't support bind method.
*/

let name = {
    firstname: "Prasun",
    lastname: "Chakraborty"
}

let printName = function (age,hobby) {
    console.log(this.firstname + " " + this.lastname)
    console.log(age)
    console.log(hobby)
}

Function.prototype.mybind = function (...args) {
    let that = this
    let params = args.splice(1)
    return function(...bindArgs){
        that.apply(args[0],[...params,...bindArgs])
    }
}

Function.prototype.testbind = function(){
    let that = this
    return that
}
console.log(printMyName.testbind())
let printMyName = printName.mybind(name,16);
printMyName("swimming");
