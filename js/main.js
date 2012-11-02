$('.iosSlider').iosSlider();

$('.hasModal').on('click', function(){
	Avgrund.show( "#default-popup" );
});
$('.close').on('click', function(){
	Avgrund.hide()
})

$(document).ready(function(){
	$('body').queryLoader2({
        barColor: "#ffffff",
        backgroundColor: "#000000",
        percentage: false,
        barHeight: 1,
        completeAnimation: "grow",
        minimumTime: 100
    });
    $('body').css({'display':'block'})
})

$('.size').text($(document).width())

 $(window).on('resize', function(){
 	$('.size').text($(document).width())
 })