// Задание 167 №1
console.log('Результат задания 167 №1:');
for (let i = 1; i <= 100; i++) {
  console.log(i)
}

// Задание 167 №2
console.log('Результат задания 167 №2:');
for (let i = 100; i >= 1; i--) {
  console.log(i)
}

// Задание 167 №3
console.log('Результат задания 167 №3:');
for (let i = 2; i <= 100; i += 2) {
  console.log(i)
}

// Задание 167 №4
console.log('Результат задания 167 №4:');
let arr4 = [];
for (let i = 0; i < 10; i++) {
  arr4.push('x')
}
console.log(arr4)

// Задание 167 №5
console.log('Результат задания 167 №5:');
let arr5 = [];
for (let i = 1; i <= 10; i++) {
  arr5.push(i);
}
console.log(arr5);

// Задание 167 №6
console.log('Результат задания 167 №6:');
let arr6 = [8, 6, 7, 9, 10, -7, -4];
for (let elem6 of arr6) {
  if (elem6> 0 && elem6 <= 10) {
      console.log(elem6);
  }
}

// Задание 167 №7
console.log('Результат задания 167 №7:');
let arr7 = [5, 6, 7, ,8];
for (let elem7 of arr7) {
  if (elem7 === 5) {
      console.log(elem7);
      break;
  }
}

// Задание 167 №8
console.log('Результат задания 167 №8:');
let arr8 = [4, 5, 6, 7, 8];
let sum8 = 0;
for (let elem8 of arr8) {
  sum8 += elem8;
}
console.log(sum8);

// Задание 167 №9
console.log('Результат задания 167 №9:');
let arr9 = [2, 4, 6, 8];
let sum9 = 0;
for (let elem9 of arr9) {
  let res9 = elem9 ** 2;
  sum9 += res9;
}
console.log(sum9);

// Задание 167 №10
console.log('Результат задания 167 №10:');
let arr10 = [1, 2, 3, 4, 5, 6];
let result10 = 0;
for (let elem10 of arr10) {
  result10 += elem10;
}
console.log(result10 / arr10.length);

// Задание 167 №11
console.log('Результат задания 167 №11:');
let arr11 = [2, 3, 6, 8, 10];
let result11 = 1;
for (i = 0; i <= arr11.length - 1; i++) {
  result11 *= arr11[i];
}
console.log(result11);

// Задание 167 №12
console.log('Результат задания 167 №12:');
let arr12 = [];
for (let i = 1; i <= 10; i++) {
  arr12.push(i);
}
console.log(arr12);

// Задание 167 №13
console.log('Результат задания 167 №13:');
let arr13 = [1, 2, -4, 5, -6, -7];
let res13 = 0;
for (let elem13 of arr13) {
  if (elem13 >= 0) {
      res13 += elem13;
  }
}
console.log(res13);

// Задание 167 №14
console.log('Результат задания 167 №14:');
let arr14 = [12, 3, 5, 65, 57, 27];
for (let elem14 of arr14) {
  let str14 = String(elem14);
  if (str14[0] == 1 || str14[0] == 2 || str14[0] == 5)
      console.log(str14);
}

// Задание 167 №15
console.log('Результат задания 167 №15:');
let arr15 = [1, 2, 3];
for (let i = arr15.length - 1; i >= 0; i--) {
  console.log(arr15[i]);
}

// Задание 167 №16
console.log('Результат задания 167 №16:');
let arr16 = [1, 2, 3, 4, 5];
for (let i = 0; i < arr16.length; i++) {
  let arr16_2 = arr16[i];
  if (arr16_2 === i) {
      console.log(arr16[i]);
  }
}

// Задание 167 №17
console.log('Результат задания 167 №17:');
let arr17 = [4, 7, 78, 89];
for (let i = 0; i < arr17.length; i++) {
  console.log(arr17[i] + '<br>');
}

// Задание 167 №18
console.log('Результат задания 167 №18:');
let arr18 = [5, 11, 35, 96, 12];
for (let i = 0; i < arr18.length; i++) {
  console.log(arr18[i] + '<p>');
}

// Задание 167 №19
console.log('Результат задания 167 №19:');
let arr19 = ['Monday', 'Thuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let arr19_2 = '';
for (let i = 0; i <= arr19.length - 3; i++) {
  arr19_2 += arr19[i] + ' ';
}
console.log(arr19_2 + '<b>' + 'Saturday' + '</b>' + ' ' + '<b>' + 'Sunday' + '</b>');

// Задание 167 №20
console.log('Результат задания 167 №20:');
let arr20 = ['Monday', 'Thuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
day = arr20[3];
week = [];
for (let i = 0; i < arr20.length - 1; i++) {
  week += ' ' + arr20[i] + ' ';
}
console.log(week + ' ' + '<i>' + day + ' ' + '</i>');

// Задание 167 №21
console.log('Результат задания 167 №21:');
let obj21 = {
	employee1: 100,
	employee2: 200,
	employee3: 300,
	employee4: 400,
	employee5: 500,
	employee6: 600,
	employee7: 700,
};
for (let key21 in obj21) {
  str21 = obj21[key21] + obj21[key21] * 0.1;
  console.log(str21);
}

// Задание 167 №22
console.log('Результат задания 167 №22:')
let obj22 = {
	employee1: 100,
	employee2: 200,
	employee3: 300,
	employee4: 400,
	employee5: 500,
	employee6: 600,
	employee7: 700,
};
for (let key22 in obj22) {
  if (obj22[key22] <= 400) {
      str22 = obj22[key22] + obj22[key22] * 0.1;
      console.log(str22);
  }
}

// Задание 167 №23
console.log('Результат задания 167 №23:')
let arr23_1 = [1, 2, 3, 4, 5];
let arr23_2 = [6, 7, 8, 9, 10];
let obj23 = {};
for (let i = 0; i <= 4; i++) {
  let key23 = arr23_1[i];
  let value23 = arr23_2[i];
  obj23[key23] = value23;
}
console.log(obj23);

// Задание 167 №24
console.log('Результат задания 167 №24:')
let obj24 = { 1: 6, 2: 7, 3: 8, 4: 9, 5: 10 };
let sum24_1 = 0;
let sum24_2 = 0;
for (let key24 in obj24) {
  sum24_1 += Number(key24);
  sum24_2 += new Number(obj24[key24]);
}
console.log(sum24_1 / sum24_2);

// Задание 167 №25
console.log('Результат задания 167 №25:')
let obj25 = { 'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5 };
let arr25_1 = [];
let arr25_2 = [];
for (let key25 in obj25) {
  arr25_1.push(key25);
  arr25_2.push(obj25[key25]);
}
console.log(arr25_1);
console.log(arr25_2);

// Задание 167 №26
console.log('Результат задания 167 №26:')
let obj26 = {
	1: 125,
	2: 225,
	3: 128,
	4: 356,
	5: 145,
	6: 281,
	7: 452,
};
let arr26 = [];
for (let key26 in obj26) {
  let value26 = String(obj26[key26]);
  if (value26[0] == 1 || value26[0] == 2) {
      arr26.push(Number(value26));
  }
}
console.log(arr26);

// Задание 167 №27
console.log('Результат задания 167 №27:')
let arr27_1 = ['a', 'b', 'c', 'd', 'e'];
let arr27_2 = [1, 2, 3, 4, 5];
let obj27 = {};
for (let i = 0; i <= 4; i++) {
  let key27 = arr27_2[i];
  let value27 = arr27_1[i];
  obj27[key27] = value27;
}
console.log(obj27);

// Задание 167 №28
console.log('Результат задания 167 №28:')
let arr28_1 = ['a', 'b', 'c', 'd', 'e'];
let arr28_2 = [1, 2, 3, 4, 5];
let obj28 = {};
for (let i = 0; i <= 4; i++) {
  let key28 = arr28_2[i];
  let value28 = arr28_1[i];
  obj28[key28] = value28;
}
console.log(obj28);