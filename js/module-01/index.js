//If Statements

const ADMIN_LOGIN = 'admin';
const ADMIN_PASSWORD = 'm4ngo1zh4ackz0r';

let login = prompt('Please, enter your login to get the access!');
// if (login === null) {
//     alert('Cancelled by user!');
// } else if (login !== ADMIN_LOGIN) {
//     alert('Access denied!');
// } else if (login === ADMIN_LOGIN){
//     let password = prompt('Please, enter your password to get the access!');
//     if (password === null){
//         alert('Cancelled by user!');
//     } else if (password !== ADMIN_PASSWORD){
//         alert('Access denied!')
//     } else if (password === ADMIN_PASSWORD){
//         alert('Welcome back! How was your day?')
//     }
// }

//Switches

switch(login){
    case null:
        alert('Cancelled by user!');
        break;
    case ADMIN_LOGIN:
        let password = prompt('Please, enter your password to get the access!');// break;
        switch(password){
            case null:
                alert('Cancelled by user!');
                break;
            case ADMIN_PASSWORD:
                alert('Welcome back! How was your day?');
                break;
            default:
                alert('Access denied!');
                break;
        }
    default:
        alert('Access denied!');
        break;
}


/*
 Напишите скрипт, для авторизации администратора в панели управления.

 При загрузке страницы у посетителя запрашивается логин через prompt:

 - Если посетитель нажал Cancel — показыать alert с текстом 'Отменено пользователем!'
 - Если было введено что либо другое, что не совпадает со значением константы ADMIN_LOGIN,
 показывать alert с текстом 'Доступ запрещен!'
 - Если был введен логин совпадающий со значением константы ADMIN_LOGIN, спрашивать пароль через prompt.

 При вводе пароля:

 - Если нажали Cancel, показывать alert с текстом 'Отменено пользователем!'
 - Если введен пароль который не совпадает со значением константы ADMIN_PASSWORD,
 показывать alert с текстом 'Доступ запрещен!'
 - Если введён пароль который совпадает со значением константы ADMIN_PASSWORD,
 показывать alert с текстом 'Добро пожаловать!'

 🔔 PS: для удобства и чистоты кода сохраните в переменные сообщения отображаемые в alert
 */

