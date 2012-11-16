$('.iosSlider').iosSlider();

jQuery.fn.center = function(parent) {
    if (parent) {
        parent = this.parent();
    } else {
        parent = window;
    }
    this.css({
        "position": "absolute",
        "top": ((($(parent).height() - this.outerHeight()) / 2) + $(parent).scrollTop() + "px"),
        "left": ((($(parent).width() - this.outerWidth()) / 2) + $(parent).scrollLeft() + "px")
    });
return this;
}



$('.hasModal').click(function(){
    if($('#overlay').length > 0){
        $("#overlay").remove();
    }
    var type = $(this).data('modal');
    $.getJSON('/js/data.json', function(data) {

    })
    .error(function(e){
         console.log('error'); 
     })
    .success(function(data){
        if(data[type]){

            // set the content
            $('.modal-header h1').html(data[type]['title']);
            $('.modal-body').html(data[type]['content']);

            // center the modal
            $('.avgrund-popup').center(false);

            // height of the modal - height of the header - padding of body - 20 for the margin
            $('.modal-body').css({'height':$('.modal-body').parent().height()-$('.modal-header').outerHeight()-($('.modal-body').outerHeight()-$('.modal-body').height())-20})
            // display the popup
            Avgrund.show( "#default-popup" );
        }
        
    });
	
});

// close the popup on click on the cross
$('.close').on('click', function(){
	Avgrund.hide()
})

// Adjust the body height on resising
$(window).resize(function(){
    $('.modal-body').css({'height':$('.modal-body').parent().height()-$('.modal-header').outerHeight()-($('.modal-body').outerHeight()-$('.modal-body').height())-20})
});

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
});
// end on dom ready

// help for device sizing, erase once dev finish
$('.size').text($(document).width())

 $(window).on('resize', function(){
 	$('.size').text($(document).width())
 });


var w = $(window).width();
var h = $(window).height();
$('.search input').keyup(function(){
    var content = $(this).val();
    $("body").unhighlight();
    $("body").highlight(content);

    // var $overlay = $('<div/>', {
    //   'id': 'overlay',
    //   css: {
    //    position   : 'absolute',
    //    height     : h + 'px',
    //    width      : w + 'px',
    //    left       : 0,
    //    top        : 0,
    //    background : '#000',
    //    opacity    : 0.85,
    //    zIndex     : 99
    //   }
    //  })
    // if($('#overlay').length <= 0){
    //     $overlay.appendTo('body');
    // }
    // else if(content == '')
    //     $('#overlay').remove();
    
 // Click overlay to remove
 $('#overlay').click(function(){
  $(this).remove();
 })
})

