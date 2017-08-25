'use strict'

var input = document.getElementById('name'),
		phoneIn = document.getElementById('phone'),
		emailIn = document.getElementById('email'),
		formSubmit = $('#submit');

input.addEventListener("blur", function() {
	var nameRe = /(^[A-Z]{1}[a-z]+)|(^[А-Я]{1}[а-я]+)/,
			inputName = document.getElementById('name').value;
	if (!nameRe.test(inputName)) {
				input.className = 'error';
			} 
}, true);

phoneIn.addEventListener("blur", function() {
	var phoneRe = /\+\d\(\d{3}\)\-\d{3}\-\d{4}/,
			inputPhone = document.getElementById('phone').value;
	if (!phoneRe.test(inputPhone)) {
				phoneIn.className = 'error';
			} 
}, true);

emailIn.addEventListener("blur", function() {
	var emailRe = /w+@[A-Za-z_]+?\.[a-z]/,
			inputEmail = document.getElementById('email').value;
	if (!emailRe.test(inputEmail)) {
				emailIn.className = 'error';
			} 
}, true);


$('#date').datepicker({
	firstDay: 1,
	dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
	monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
	dateFormat: "dd.mm.yy"
});

$("#dialog").dialog({
	autoOpen: false
});

formSubmit.click(function ( event ){
	event.preventDefault();
	$(".error").effect("shake");
	$("#dialog").dialog('open');
});

$(".next").on("click", function(){
	var currentImg = $(".active"),
			nextImg = currentImg.next();
	
	if(nextImg.length){
		currentImg.removeClass("active").css("z-index", -10);
		nextImg.addClass("active").css("z-index", 10);
	}
});

$(".prev").on("click", function(){
	var currentImg = $(".active"),
			prevImg = currentImg.prev();
	
	if(prevImg.length){
		currentImg.removeClass("active").css("z-index", -10);
		prevImg.addClass("active").css("z-index", 10);
	}
});
			
