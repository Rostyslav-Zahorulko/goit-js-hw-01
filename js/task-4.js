const credits = 23580;
const pricePerDroid = 3000;

let message = prompt('Укажите количество дроидов, которые Вы хотите купить');

if (message === null) {
  console.log('Отменено пользователем!');
} else {
  message = Number.parseInt(message);
  const totalPrice = message * pricePerDroid;

  if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
  } else {
    const restOfCredits = credits - totalPrice;
    console.log(
      `Вы купили ${message} дроидов, на счету осталось ${restOfCredits} кредитов`,
    );
  }
}
