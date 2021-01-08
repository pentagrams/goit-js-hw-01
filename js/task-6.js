

let input; 
let total = 0;
let covertInputToNumber;

for (let i = 0; input !== null; i += 1){ 

    input = prompt('Введите число :');

    if (input === null) {
        alert(total);
    } else {
        covertInputToNumber = Number(input);
        total += i;
    };

};

alert(total);

