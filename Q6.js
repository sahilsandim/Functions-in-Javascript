function curry(a){
    return function(b){
        return a + b;

    }
}

 
const Newcurry = curry(100)(200)
console.log(Newcurry);