var  one = 'Моя первая переменная';
var myclass = 'вывод спомьщью класса'
// alert(one);
// console.log(one);

// document.getElementById('message').innerHTML = one;

// вывод спощью джейквери по  ID
// $('#message').text(one);

// анимация джейквери
$('#message').fadeOut('slow');
// вывод спомощью классов
$('.myclass').text(one);
// вывод спомощью JS
// document.getElementsByClassName("myclass")[0].innerHTML =  one;
console.log(document.getElementsByClassName("myclass"));

// document.getElementsByClassName("myclass")[0].style.color = "red";
$('.myclass').css('color','red');
$('.myclass').css('background-color','black');
$('.myclass').css('border','2px solid green');
$('.myclass').css('margin','15px 20px');
$('.myclass').css('padding','20px');


var arrayString = ['Первый', 'Второй', 'Третий', 'Четвертый', 'Пятый'];

/*
*   Функция reverse() "переворачивает" массив arrayString.
*/
arrayString = arrayString.reverse();

/*
*   Выводим в цикле все элементы массива arrayString
*   Обратите внимание на метод jQuery append. В отличии от метода text,
*   данный метод добавляет в HTML новые значения, а старые не удаляет. 
*  
*   Задание: Примените функцию toUpperCase() в цикле ниже, чтобы все
*   элементы массива стали в верхнем регистре
*/
for(var i = 0; i < arrayString.length; i++) {
    $('#result').append(arrayString[i].toUpperCase() + '<br>');
}