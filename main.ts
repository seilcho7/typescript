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

import { Point } from './point';

let point = new Point(1,2);
point.draw();