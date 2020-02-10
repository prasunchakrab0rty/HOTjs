let sum = function(a){
    return function(b){
       return a+b
    }
}

let res = sum(2)(4)
console.log(res)