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

// interface
interface UserType {
    firstName: string,
    lastName: string,
    age: number
}

function greetUser(user: UserType) {
    console.log(`Hello ${user.firstName} ${user.lastName} you are ${user.age} years old`);
}

let user1: UserType = {
    firstName: "Rahul",
    lastName: "Codes",
    age: 20
}

greetUser(user1); 