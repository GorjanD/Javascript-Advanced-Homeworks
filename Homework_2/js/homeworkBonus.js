function factorial(num) {
    if (num == 1) {
        return 1;
    }
    else if (num == 0){
        return 1;
    }
    else if(num < 0){
        console.log("Cannot enter a negative number!")
    }
   return num * factorial(num-1); 
}

let num = 5
let result = factorial(num);
console.log(`The factorial of ${num} is ${result}`);