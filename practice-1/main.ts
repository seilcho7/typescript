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
let c: Color = Color.Green;
let a: Color = Color.Red;
console.log(c);
console.log(a);

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


