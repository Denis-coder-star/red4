$(document).ready(function(event){
	$('.payment-window').click(function(event){
		$('.payment-down').toggleClass('payment-down-active');
		$('.payment-window').toggleClass('payment-window-active');
		$('.strelka').toggleClass('strelka-active');
	});
	$('.down-one').click(function(event){
		$('.rep').text('Сбербанк');
	});
	$('.down-two').click(function(event){
		$('.rep').text('Киви');
	});
	$('.down-three').click(function(event){
		$('.rep').text('Payeer');
	});
});

document.body.onload = function() {

    setTimeout(function() {
    var preloader = document.getElementById('preloader');
    if(!preloader.classList.contains('done') ) {
    preloader.classList.add('done');
    }
    }, 1500);
 }