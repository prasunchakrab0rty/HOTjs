// Function Currying

/*
Currying refers to the process of transforming a function with multiple arity
into the same function with less arity. The curried effect is achieved by
binding some of the arguments to the first function invoke, 
so that those values are fixed for the next invocation.
*/

// By Bind Method
let multiply = function (x,y){
    console.log(x*y)
}

//By Closure
let divide = function(x){
    return function(y){
        console.log(y/x)
    }
}

let multiplyByTwo = multiply.bind(this,2)
multiplyByTwo(6)

let divideByTwo = divide(2)
divideByTwo(6)