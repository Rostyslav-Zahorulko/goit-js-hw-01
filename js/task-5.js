let message = prompt('Введите название своей страны');
let price;

message = message[0].toUpperCase() + message.slice(1).toLowerCase();

switch (message) {
  case 'Китай':
    price = 100;
    alert(`Доставка в ${message} будет стоить ${price} кредитов`);
    break;
  case 'Чили':
    price = 250;
    alert(`Доставка в ${message} будет стоить ${price} кредитов`);
    break;
  case 'Австралия':
    price = 170;
    alert(`Доставка в ${message} будет стоить ${price} кредитов`);
    break;
  case 'Индия':
    price = 80;
    alert(`Доставка в ${message} будет стоить ${price} кредитов`);
    break;
  case 'Ямайка':
    price = 120;
    alert(`Доставка в ${message} будет стоить ${price} кредитов`);
    break;
  default:
    alert('В вашей стране доставка не доступна');
}
