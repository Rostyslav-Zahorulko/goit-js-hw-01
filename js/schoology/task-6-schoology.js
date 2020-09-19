// Задание 6
// Напиши скрипт который просит посетителя ввести число в prompt до тех пор,
// пока посетитель на нажмет Cancel и каждый раз добавляет введенное значение к общей сумме.

// При загрузке страницы пользователю предлагается в prompt ввести число. Ввод добавляется к значению переменной total.
// Операция ввода числа продолжается до тех пор, пока пользователь не нажмет кнопку Cancel в prompt.
// После того как пользователь прекратил ввод нажав кнопку Cancel, показать alert со строкой 'Общая сумма чисел равна [сумма]'.
// 🔔 Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов, не нужно.
// Если хочешь, в случае некорректного ввода, показывай alert с текстом 'Было введено не число, попробуйте еще раз',
// при этом результат prompt плюсовать к общей сумме не нужно, после чего снова пользователю предлагается ввести число в prompt.

// let input;
// let total = 0;

// ********************************************************************************************************************************

// 1. Не дуже робочий варіант виконання завдання через цикл do ... while

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

// ********************************************************************************************************************************

// 2. Варіант виконання схожого завадння, взятий з https://learn.javascript.ru/while-for

// let sum = 0;

// while (true) {
//   let value = +prompt('Введите число', '');

//   if (!value) break;

//   sum += value;

// }
// alert('Сумма: ' + sum);

// ********************************************************************************************************************************

// 3. Пристосування попереднього варіанту під потреби поточного завдання

// let sum = 0;
// while (true) {
//   let input = +prompt('Введите число');
//   // let input = Number(prompt('Введите число'));
//   if (!input) {
//     break;
//   }
//   sum += input;
//   console.log(sum);
// }
// alert(`Сумма: ${sum}`);

// ********************************************************************************************************************************

// 4. Майже робочий варіант, реплізований через цикл for

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
