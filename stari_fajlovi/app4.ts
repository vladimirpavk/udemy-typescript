/*//import * as MyModule from './mymodules';
import { Klasa1 } from './mymodules';

//let proba1:MyModule.Klasa1 = new MyModule.Klasa1();
let proba1:Klasa1 = new Klasa1();
*/

//import * as circleModule from './mymodules/math/circle';
import izracunajObim from './mymodules/math/circle';
import * as rectangleModule from './mymodules/math/rectangle';

//console.log(circleModule.calculateObim(20));
console.log(izracunajObim(20));
console.log(rectangleModule.calculateRectangle(20,10));


