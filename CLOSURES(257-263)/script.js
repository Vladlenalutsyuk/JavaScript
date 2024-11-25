// Задание 259 №1
// function test() {
// 	let num1 = 1;
// 	let num2 = 2;	
// 	return function() {
// 		return num1 + num2;
// 	}
// }
// let func = test();
// console.log(func()); 
// Результатом выведения в консоль будет: 1

// Задание 259 №2
// function test() {
// 	let num1 = 1;
// 	let num2 = 2;
// 	return function() {
// 		return num1 + num2;
// 	}
// }
// console.log(test()()); 
// Результатом выведения в консоль будет: 3

// Задание 259 №3
// function test() {
// 	let num1 = 1;
// 	return function() {
// 		return num1 + num2;
// 	}
// }
// let num2 = 2;
// let func3 = test();
// console.log(func3()); 
// Результатом выведения в консоль будет: 3

// Задание 259 №4
// function test() {
// 	let num = 1;
// 	return function() {
// 		return num;
// 	}
// }
// let num = 2;
// let func4 = test();
// console.log(func4());
// Результатом выведения в консоль будет: 1

// Задание 261 №1
console.log('Результат задачи 261 №1:');
function createCounter() {
	let count = 0; 
	return function() {
	  count++; 
	  console.log(count); 
	};
  }
  let counter = createCounter();
  counter(); 
  counter(); 
  counter(); 

// Задание 261 №2
console.log('Результат задачи 261 №2:');
  function createDecrementer() {
	let number = 10; 
	return function() {
	  console.log(number); 
	  number--; 
	};
  }
  let decrementer = createDecrementer();
  decrementer(); 
  decrementer(); 
  decrementer(); 
  
// Задание 261 №3
console.log('Результат задачи 261 №3:');
function createCountdown() {
	let number = 10; 
	return function() {
	  if (number >= 0) {
		console.log(number);
		number--; 
	  } else {
		console.log("Отсчет окончен."); 
	  }
	};
  }
  let countdown = createCountdown();
  countdown(); 
  countdown(); 
  countdown(); 
  countdown(); 
  countdown(); 
  countdown(); 
  countdown(); 
  countdown(); 
  countdown(); 
  countdown(); 
  countdown(); 
  countdown(); 
  
// Задание 262 №1
//   function func() {
// 	let num = 0;
// 	return function() {
// 		console.log(num);
// 		num++;
// 	};
// }
// func()(); // Результатом выведения в консоль будет: 0
// func()(); // Результатом выведения в консоль будет: 0
// func()(); // Результатом выведения в консоль будет: 0

// Задание 262 №2
// function func() {
// 	let num = 0;
// 	return function() {
// 		console.log(num);
// 		num++;
// 	};
// }
// let test = func;
// test()(); // Результатом выведения в консоль будет: 0
// test()(); // Результатом выведения в консоль будет: 0
// test()(); // Результатом выведения в консоль будет: 0

// Задание 263 №1
// let counter = 0;
// function test() {
//   return function() {
//     console.log(counter);
//     counter++;
//   };
// }
// let func = test;
// let func1 = func();
// let func2 = func();
// func1(); // Результатом выведения в консоль будет: 0
// func2(); // Результатом выведения в консоль будет: 1
// func1(); // Результатом выведения в консоль будет: 2
// func2(); // Результатом выведения в консоль будет: 3

// Задание 263 №2
// function test() {
// 	let counter = 0;
// 	return function() {
// 	  return function() {
// 		console.log(counter);
// 		counter++;
// 	  };
// 	};
//   }
//   let func = test()();
//   let func1 = func;
//   let func2 = func;
//   func1(); // Результатом выведения в консоль будет: 0
//   func2(); // Результатом выведения в консоль будет: 1
//   func1(); // Результатом выведения в консоль будет: 2
//   func2(); // Результатом выведения в консоль будет: 3
  
// Задание 263 №3
// function test() {
// 	let counter = 0;
// 	return function() {
// 	  return function() {
// 		console.log(counter);
// 		counter++;
// 	  };
// 	};
//   }
//   let func = test();
//   let func1 = func();
//   let func2 = func();
//   func1(); // Результатом выведения в консоль будет: 0
//   func2(); // Результатом выведения в консоль будет: 0
//   func1(); // Результатом выведения в консоль будет: 1
//   func2(); // Результатом выведения в консоль будет: 1
  