// Задание 121 №1
let test121_1 = true;
if (!test121_1) {
  console.log('+++');
} else {
  console.log('---');
}

// Задание 121 №2
let test121_2 = true;
if (!test121_2) {
  console.log('+++');
} else {
  console.log('---');
}

// Задание 121 №3
let test121_3 = true;
if (test121_3) {
  console.log('+++');
} else {
  console.log('---');
}

// Задание 122 №1
// let test = 3;
// if (test) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }
// Результат вывода = +++

// Задание 122 №2
// let test = 'abc';
// if (test) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }
// Результат вывода = +++

// Задание 122 №3
// let test = '';
// if (test) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }
// Результат вывода = ---

// Задание 122 №4
// let test = 3 * 'abc';
// if (test) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }
// Результат вывода = ---

// Задание 122 №5
// let test = null;
// if (test) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }
// Результат вывода = ---

// Задание 122 №6
// let test = false;
// if (test) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }
// Результат вывода = ---

// Задание 122 №7
// let test;
// if (test) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }
// Результат вывода = ---

// Задание 122 №8
// let test = 0;
// if (test) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }
// Результат вывода = ---

// Задание 122 №9
// let test = '0';
// if (test) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }
// Результат вывода = +++

// Задание 122 №10
// let test = -1;
// if (test) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }
// Результат вывода = +++

// Задание 123 №1
let test123_1 = true;
let test123_2 = true;
if (test123_1 && test123_2 ) {
	console.log('+++');
} else {
	console.log('---');
}

// Задание 123 №2
let test123_3 = true;
let test123_4 = true;
if (test123_3 && !test123_4) {
	console.log('+++');
} else {
	console.log('---');
}

// Задание 123 №3
let test123_5 = true;
let test123_6 = true;
if (!test123_5 && !test123_6 ) {
	console.log('+++');
} else {
	console.log('---');
}

// Задание 123 №4
let test123_7 = true;
let test123_8 = true;
if (test123_7 && test123_8) {
	console.log('+++');
} else {
	console.log('---');
}

// Задание 123 №5
let test123_9 = true;
let test123_10 = true;
let test123_11 = true;
if (test123_9 && test123_10 && test123_11) {
	console.log('+++');
} else {
	console.log('---');
}

// Задание 123 №6
let test123_12 = true;
let test123_13 = true;
let test123_14 = true;
if (test123_12 || test123_13 && test123_14 ) {
	console.log('+++');
} else {
	console.log('---');
}

// Задание 123 №7
let test123_15 = true;
let test123_16 = true;
let test123_17 = true;
if (test123_15 || !test123_16 && !test123_17) {
	console.log('+++');
} else {
	console.log('---');
}

// Задание 124 №1
let test124 = 10;
if (test124 == 10) {
	console.log('yes');
}

// Задание 125 №1
let test125_1 = 5;
if (test125_1 > 0) console.log('+++'); else console.log('---');

// Задание 125 №2
let test125_2 = 15;
if (test125_2 > 0) console.log('+++');

// Задание 127 №1
let day127_1 = 25; 
if (day127_1 >= 1 && day127_1 <= 10) {
  console.log('Первая декада месяца');
} else if (day127_1 >= 11 && day127_1 <= 20) {
  console.log('Вторая декада месяца');
} else if (day127_1 >= 21 && day127_1 <= 31) {
  console.log('Третья декада месяца');
}

// Задание 127 №2
let day127_2 = 35;
if (day127_2 >= 1 && day127_2 <= 10) {
  console.log('Первая декада месяца');
} else if (day127_2 >= 11 && day127_2 <= 20) {
  console.log('Вторая декада месяца');
} else if (day127_2 >= 21 && day127_2 <= 31) {
  console.log('Третья декада месяца');
} else {
  console.log('Неверное значение переменной day');
}

// Задание 128 №1
let num128 = 15;
let sum128;
if ((num128 >= 0) && (num128 <= 99)) {
    sum128 =(num128 / 10) + num128 % 10; 
	if (sum128 <= 9) {
		console.log('Сумма цифр однозначна');
	} else {
		console.log('Сумма цифр двузначна');
	}
} 

// Задание 129 №1
let lang = 'ru';
switch (lang) {
    case 'ru':
		console.log('рус');
	break;
    case 'en':
        console.log('анг');
    break;
    case 'de':
		console.log('нем');
	break;
    default:
		console.log('язык не поддерживается');
	break;
}

// Задание 131 №1
let num131 = 1;
let res131 = num131 >= 0 ? '1' : '2';
console.log(res131);

// Задание 132 №1
let a132_1 = 2 * (3 - 1);
let b132_1 = 6 - 2;
console.log(a132_1 == b132_1);

// Задание 132 №2
let a132_2 = 5 * (7 - 4);
let b132_2 = 1 + 2 + 7;
console.log( a132_2 >= b132_2)

//Задание 132 №3
let a132_3 = 2 ** 4;
let b132_3 = 4 ** 2;
console.log(a132_3 != b132_3);
