const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
let userResponse = prompt('Введите пароль :');

    if (userResponse === null) {
        message = 'Отменено пользователем!';
    } else if (userResponse === ADMIN_PASSWORD) {
        message = 'Добро пожаловать!';
        
    } else {
    message = 'Доступ запрещен, неверный пароль!';
    };


alert(message);