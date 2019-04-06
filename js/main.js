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
