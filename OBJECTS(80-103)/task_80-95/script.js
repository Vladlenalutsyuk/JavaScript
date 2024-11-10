// Задание 80 №1
let obj80 = {1: 'Monday', 2: 'Tuesday', 3: 'Wednesday', 4:'Thursday', 5:'Friday', 6:"Saturday", 7:"Sunday"};
console.log(obj80[1], obj80[2], obj80[3], obj80[4], obj80[5], obj80[6], obj80[7]);

// Задание 81 №1
let obj81 = {1: 'January', 2: 'February', 3: 'March', 4: "April", 5: 'May', 6: 'June', 7: 'July', 8: 'August', 9: 'September', 10: 'October', 11: 'November', 12: 'December'};
console.log(obj81);

// Задание 82 №1
let user82={name: "Vladlena" , surname: "Lutsyuk", patronymic: "Aleksandrovna"};
console.log(user82["surname"], user82["name"], user82["patronymic"]);

// Задание 83 №1
let date83= {year:"2024", month:"11", day:"10"};
console.log(date83.year+'.'+date83.month+"."+date83.day);

/* Задание 84 №1
 let obj84_1 = {
 	'1a': 1, - кавычки обязательны
 	'b2': 2, - кавычки не обязательны
 	'с-с': 3, - кавычки обязательны
 	'd 4': 4, - кавычки обязательны
 	'e5': 5 - кавычки не обязательны
 };*/

// Задание 84 №2
let obj84_2 = {
	'1a': 1, 
	'b2': 2, 
	'с-с': 3, 
	'd 4': 4, 
	'e5': 5
}; 
console.log(obj84_2['1a']);
console.log(obj84_2.b2);
console.log(obj84_2['c-c']);
console.log(obj84_2['d 4']);
console.log(obj84_2.e5);

// Задание 85 №1
let obj85 = {x: 1, y: 2, z: 3};
obj85.x = obj85.x ** 2;
obj85.y = obj85.y ** 2;
obj85.z = obj85.z ** 2;
console.log(obj85);

// Задание 86 №1
let obj86 = {};
obj86.a = '1';
obj86.b = '2';
obj86.c = '3';
console.log(obj86);

// Задание 87 №1
let obj87 = {8: 'olla', 67: 'hello', 98: 'good'};
console.log(obj87[8])
console.log(obj87[67]); 
console.log(obj87[98]);

// Задание 88 №1
let obj88 = {x: 1, y: 2, z: 3};
let keys = Object.keys(obj88);
console.log(keys);

// Задание 89 №1
let obj89 = {x: 1, y: 2, z: 3};
console.log(Object.keys(obj89).length);

// Задание 90 №1
let obj90 = {x: 1, y: 2, z: 3};
let key90 = 'y';
console.log(obj90[key90]);

// Задание 91 №1
let obj91_1 = {x: 1, y: 2, z: 3};
console.log(obj91_1['x']);

// Задание 91 №2
let obj91_2 = {x: 1, y: 2, z: 3};
let key91 = 'x';
console.log(obj91_2[key91]);

// Задание 92 №1
let obj92_1 = {x: 1, y: 2, z: 3};
let prop92_1 = 'x';
console.log(obj92_1[prop92_1]);

// Задание 92 №2
let obj92_2 = {x: 1, y: 2, z: 3};

let prop92_2 = 'x';
console.log(obj92_2[prop92_2]);

// Задание 93 №1
// let key93 = 'x';
// let obj93_1 = {
// [key93]: 1,
// y: 2,
// z: 3
// };

// Задание 93 №2
// let obj93_2 = {
// 	[key93_1]: 1,
// 	[key93_2]: 2,
// 	[key93_3]: 3
// 	};
// 	let key93_1 = 'x';
// 	let key93_2 = 'y';
// 	let key93_3 = 'z';

// Задание 94 №1
let obj94 = {x: 1, y: 2, z: 3};
console.log('x' in obj94); // Результат вывода = true
console.log('w' in obj94); // Результат вывода = false 

// Задание 95 №1
let obj95 = {x: 1, y: 2, z: 3};
delete obj95.x;
console.log('x' in obj95);
// Результат вывода = {y: 2, z: 3}
