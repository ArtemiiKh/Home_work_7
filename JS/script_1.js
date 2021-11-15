
// Задание 1

// Скомбинировать инструкции if которые проверяю данные введенные пользователем в 1 одну инструкцию (объединить
// проверки с помощью логических операторов), получается что вместо 3 if..else..if http://joxi.ru/V2VyLyZI8eOnDm у вас
// должен быть только один if с объединенным условием и инструкция else которая срабатывает при успешном введении данных

const a = prompt('input number or string');

if ((a === null) || (a.trim() === '') || (isNaN( +a ))){
    alert("Error!")
} else alert("ALL OK!");



// Задание 2

// Переписать код ниже с использованием конструкции switch...case

// let numOrStr = prompt('input number or string');
// console.log(numOrStr)

// if(numOrStr === null) {
//     console.log('вы отменили')
// } else if( numOrStr.trim() === '' ) {
//     console.log('Empty String');
// } else if( isNaN( +numOrStr ) ) {
//     console.log(' number is Ba_NaN')
// } else {
//     console.log('OK!')
// }



// const a = prompt('input number or string');

// switch(true) {
//     case (a === null):
//         alert("вы отменили")
//         break;
//     case (a.trim() === '' ):
//         alert("Empty String")
//         break;
//     case (isNaN( +a )):
//         alert("number is Ba_NaN")
//         break;
//     default:
//         alert("OK!")
// }