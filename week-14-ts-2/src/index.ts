interface User {
    name: string;
    age: number;
}

function sumOfAge(user1: User, user2: User) {
    return user1.age + user2.age;
}

const age = sumOfAge({ name: "Rahul", age: 20 }, { name: "Tim", age: 24 });
console.log(age);

// Partial
interface User2 {
    id: string;
    name: string;
    age: number;
    email: string;
    password: string;
}

type UpdateProps = Pick<User2, "name" | "age" | "email">

type UpdatePropsOptional = Partial<UpdateProps>

function updateUser(updateProps: UpdatePropsOptional) {
    // hit the database to update the user
    console.log(`Name: ${updateProps.name}, Email: ${updateProps.email}`);
}

// Readonly
type User3 = {
    name: string;
    age: number;
}

const user: Readonly<User3> = {
    name: "Pat",
    age: 20,
}

// Record
interface User4 {
    id: string;
    name: string;
}
  
type Users = Record<string, User4>;
  
const users: Users = {
    'abc123': { id: 'abc123', name: 'John Doe' },
    'xyz789': { id: 'xyz789', name: 'Jane Doe' },
};

console.log(users['abc123']);

// Maps
interface User5 {
    id: string;
    name: string;
  }
  
// Initialize an empty Map
const usersMap = new Map<string, User5>();

// Add users to the map using .set
usersMap.set('abc123', { id: 'abc123', name: 'John Doe' });
usersMap.set('xyz789', { id: 'xyz789', name: 'Jane Doe' });

// Accessing a value using .get
console.log(usersMap.get('abc123'));

// Exclude
type EventType = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<Event, 'scroll'>; // 'click' | 'mousemove'

const handleEvent = (event: ExcludeEvent) => {
  console.log(`Handling event: ${event}`);
};

handleEvent('click' as unknown as ExcludeEvent); // OK