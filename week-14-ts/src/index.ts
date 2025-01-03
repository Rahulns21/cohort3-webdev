function greet(firstName: string) {
    return `Hello ${firstName}`
}

console.log(greet("Rahul"));

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

// interface
interface UserType {
    firstName: string;
    lastName: string;
    age: number;
}

function greetUser(user: UserType) {
    return `Hello ${user.firstName} ${user.lastName} you are ${user.age} years old`;
}

let user1: UserType = {
    firstName: "Rahul",
    lastName: "Codes",
    age: 20
}

console.log(greetUser(user1));

// interface
interface User {
    name: string;
    age: number;
    address: {
        city: string;
        country: string,
        pincode: number;
    };
}

let user2: User = {
    name: "rocky",
    age: 15,
    address: {
        city: "Bengaluru",
        country: "India",
        pincode: 560086
    }
}

function isAdult(user: User): boolean {
    if (user.age >= 18) {
        return true;
    } else {
        return false
    }
}

const res = isAdult(user2);
if (res) {
    console.log("I am an Adult");
} else {
    console.log("I am not an Adult");
}