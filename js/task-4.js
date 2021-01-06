const credits = 23580;
const pricePerDroid = 3000;

let countDroid = prompt('Какое количество дроидов вы хотите  купить? ');
let totalPrice = Number(countDroid) * pricePerDroid;

if (countDroid === null) {
    console.log('Отменено пользователем!');
} else if(credits <= totalPrice) {
    console.log('Недостаточно средств на счету!')
} else {
    totalPrice = Number(countDroid) * pricePerDroid;
    let balance = credits - totalPrice;
    console.log(`Вы купили ${countDroid} дроидов, на счету осталось ${balance} кредитов.`);
}