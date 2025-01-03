// create two types called user and admin
// create a function that takes either a user or an admin as an input, and returns a string saying "welcome, [name]".

interface Admin {
    name: string;
    permissions: string;
}

interface User2 {
    name: string;
    age: number;
}

type UserOrAdmin = User2 | Admin;

function greetAdmin(user: UserOrAdmin) {
    console.log(user.name);
}

interface User3 {
    id: number & string
}

// arrays
function getMax(nums: number[]) {
    let maxValue = -10000000;

    for (let i=0; i<nums.length; i++) {
        if (nums[i] > maxValue) {
            maxValue = nums[i]
        }
    }
    return maxValue
}

console.log(getMax([1, 2, 3, 5, 4]));

// Given a list of users, filter out the users that are legal (greater than 18 years of age)
interface User4 {
	firstName: string;
	lastName: string;
	age: number;
}

function filteredUsers(users: User4[]) {
    return users.filter(x => x.age >= 18);
}

console.log(filteredUsers([{
    firstName: "Rahul",
    lastName: "Codes",
    age: 20
}, {
    firstName: "Rocky",
    lastName: "Bhai",
    age: 36
}, {
    firstName: "Funky",
    lastName: "Boi",
    age: 15
}, ]))