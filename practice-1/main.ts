export {};
let message = 'Hello World';
console.log(message);

let x = 20;
const y = 20;

let sum;
const title = "Typescript"; 

let isBeginner: boolean = true;
let total: number = 0;
let name: string = "Seil";

let sentence: string = `My name is ${name}
I am a beginner in Typescript`;

console.log(sentence);

let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

let list1: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];

// tuple (arrays with different variable types)
let person1: [string, number] = ['Seil', 22];

// Red = 0, Green = 1, Blue = 2 by default
enum Color {Red, Green = 5, Blue};
let g: Color = Color.Green;
let r: Color = Color.Red;
console.log(r);
console.log(g);

// set as any possible type
let randomValue: any = 10;
randomValue = true;
randomValue = 'Seil';

// typescript does not throw error because of 'any'
let myVariable: any = 10;
console.log(myVariable.name);
myVariable();
myVariable.toUpperCase();

function hasName(obj: any): obj is { name: string } {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj
}

// unknown type
let myUnknown: unknown = 10;
if (hasName(myUnknown)) {
    console.log(myUnknown.name);
}
(myUnknown as string).toUpperCase();


let a;
a = 10;
a = true;

let b = 20;

let multiType: number | boolean;
multiType = 20;
multiType = true;

// any type
let anyType: any;
anyType = 20;
anyType = true;


// function
function add(num1: number, num2?: number): number {
    return num1 + num2;
}
add(5,1);
add(5);