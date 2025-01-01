function greet(firstName: string) {
    console.log(`Hello ${firstName}`);
}

greet("Rahul");

function sum(num1: number, num2: number) {
    return num1 + num2;
}

let ans = sum(2, 10);

console.log(ans);

function isLegal(age: number) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

console.log(isLegal(18));

// takes function as input, and runs it after 1 second
function delayedCall(fn: (name: string) => void) {
    setTimeout(fn, 1000);
}

delayedCall(greet);