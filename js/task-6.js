

let input; 
let total = 0;
let covertInputToNumber;

do {
    input = prompt('Введите число');
    if (isNaN(input)) {
        alert('Некорректный ввод, попробуйте еще раз');
    } else {
        total += Number(input);
    }
} while(input !== null)


alert(`Общая сумма чисел равна ${total}`);

