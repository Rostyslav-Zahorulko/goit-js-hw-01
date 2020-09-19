// let input = prompt('Введите число');
// let total = 0;

// while (input !== null) {
//   input;
//   // input = Number(input);
//   console.log('Введенное число: ', input);

//   if (input === NaN) {
//     alert('Было введено не число, попробуйте еще раз');
//     continue;
//   }

//   total += input;
//   console.log('Общая сумма: ', total);
// }

// alert(`Общая сумма чисел равна ${total}`);

// *******************************************************************************************************

// Напівробочий варіант

// let input;
// let total = 0;

// do {
//   input = prompt('Введите число');
//   input = Number(input);
//   console.log('Введенное число: ', input);
//   if (input === NaN) {
//     alert('Было введено не число, попробуйте еще раз');
//     continue;
//   }
//   total += input;
//   console.log('Общая сумма: ', total);
// } while (input !== 4);

// alert(`Общая сумма чисел равна ${total}`);

// *******************************************************************************************************

// while (input !== null) {
//   input = prompt('Введите число');
//   input = Number(input);
//   total += input;
//   console.log('fff');
// }

// for (input; input !== null; input += 1) {
//   total += input;
// }

// while (input !== null) {
//   total += input;
//   console.log(total);
// }

// do {
//   total += input;
//   console.log(total);
// } while (input !== null);

// let input;
// let total = 0;

// for (let i = 0; i < 5; i += 1) {
//   input = prompt('Введите число');
//   input = Number(input);
//   console.log('Введенное число: ', input);
//   total += input;
//   console.log('Общая сумма: ', total);
// }

// alert(`Общая сумма чисел равна ${total}`);

// let input;
// let total = 0;

// *******************************************************************************************************

// while (input !== 0) {
//   input = prompt('Введите число');
//   input = Number(input);
//   console.log('Введенное число: ', input);
//   //   if (input === NaN) {
//   //     alert('Было введено не число, попробуйте еще раз');
//   //     continue;
//   //   }
//   total += input;
//   console.log('Общая сумма: ', total);
// }

// alert(`Общая сумма чисел равна ${total}`);

// *********************************************************************************************************
// let input;
// let total = 0;

// do {
//   input = prompt('Введите число');
//   input = Number(input);
//   console.log('Введенное число: ', input);

//   if (input === NaN) {
//     alert('Было введено не число, попробуйте еще раз');
//     continue;
//   }

//   total += input;
//   console.log('Общая сумма: ', total);
// } while (input !== 0);

// alert(`Общая сумма чисел равна ${total}`);

// *********************************************************************************************************

let input;
let total = 0;

for (let i = 0; true; i += 1) {
  input = prompt('Введите число');

  if (input === null) {
    break;
  }

  input = Number(input);
  console.log('Введенное число: ', input);

  if (input === NaN) {
    alert('Было введено не число, попробуйте еще раз');
    continue;
  }

  total += input;
  console.log('Общая сумма: ', total);
}
alert(`Общая сумма чисел равна ${total}`);
