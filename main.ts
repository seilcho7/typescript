// let a: number;
// let b: boolean;
// let c: string;
// let d: any;
// let e: number[] = [1,2,3];
// let f: any[] = [1,true,'a',false];

//####################################################

// const ColorRed = 0;
// const ColorGreen = 1;
// const ColorBlue = 2;

// enum Color { Red = 0, Green = 1, Blue = 2 };
// let backgroundColor = Color.Red;

//####################################################

// let message;
// message = 'abc';
// let endsWithC = (<string>message).endsWith('c');
// let alternativeWay = (message as string).endsWith('c');

//####################################################

// let log = function(message) {
//     console.log(message);
// }

// let doLog = (message) => console.log(message);

//####################################################

// class Point {
//     constructor(private _x?: number, private _y?: number) {
//     } 
    
//     draw() {
//         console.log('X: ' + this.x + ', y: ' + this.y);
//     }

//     get x() {
//         return this.x;
//     }

//     set x(value) {
//         if (value < 0)
//             throw new Error('value cannot be less than 0.');
        
//         this.x = value;
//     }
// }

// let point = new Point(1, 2);
// let x = point.x;
// point.x = 10;
// point.draw();

//####################################################

// import { Point } from './point';

// let point = new Point(1,2);
// point.draw();

export {};

let message = 'Hello World';
// console.log(message);

let x = 10;
const y = 20;

let sum;
const title = "Codevolution";

let isBeginner: boolean = true;
let total: number = 0;
let name: string = 'Vishwas';
// name = true;

let sentence: string = `My name is ${name}. I am a beginner in Typescript.`;
// console.log(sentence);

let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

let list1: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];

let person1: [string, number] = ['Chris', 22];

enum Color {Red = 5, Green, Blue};
let c: Color = Color.Green;

let randomValue: any = 10;
randomValue = true;
randomValue = 'Vishwas';
// console.log(randomValue);

let myVariable: unknown = 10;

function hasName(obj: any): obj is { name: string } {
    return !!obj && typeof obj === 'object' && 'name' in obj;
}

if (hasName(myVariable)) {
    console.log(myVariable.name);
}
// let myVariable: any = 10;
// console.log(myVariable.name);
// myVariable();
// (myVariable as string).toUpperCase();
let a;
a = 10;
a = true;

let b = 20;

let multiType: number | boolean;
multiType = 20;
multiType = true;


// function add(num1: number, num2: number = 10): number {
function add(num1: number, num2?: number): number {
    if (num2)
        return num1 + num2;
    else
        return num1;
}

add(5, 10);
add(5);

// function fullName(person: {firstName: string, lastName: string}) {
//     console.log(`${person.firstName} ${person.lastName}`)
// }

interface Person {
    firstName: string;
    lastName?: string;
}

function fullName(person: Person) {
    console.log(`${person.firstName} ${person.lastName}`)
}

let p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
}

// fullName(p);

class Employee {
    public employeeName: string;

    constructor(name: string) {
        this.employeeName = name;
    }

    greet() {
        console.log(`Good Morning ${this.employeeName}`);
    }
}

let emp1 = new Employee('Seil');
console.log(emp1.employeeName);
emp1.greet();

class Manager extends Employee {
    constructor(managerName: string) {
        super(managerName);
    }
    delegateWork() {
        console.log(`Manager delegating tasks`);
    }
}

let m1 = new Manager('Bruce');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);