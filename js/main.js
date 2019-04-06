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
$('.myclass').css('color','green');
$('.myclass').css('background-color','black');