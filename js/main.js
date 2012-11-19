
  $('.iosSlider.banner').iosSlider({
    desktopClickDrag: true,
    snapToChildren: true,
    infiniteSlider: true,
    navSlideSelector: '.sliderContainer .slideSelectors .item',
    onSlideComplete: slideComplete,
    onSliderLoaded: sliderLoaded,
    onSlideChange: slideChange,
    autoSlide: true,
    scrollbar: true,
    scrollbarContainer: '.sliderContainer .scrollbarContainer',
    scrollbarMargin: '0',
    scrollbarBorderRadius: '0',
    keyboardControls: true
  });
  
  // prettyPrint();



function slideChange(args) {
      
  $('.sliderContainer .slideSelectors .item').removeClass('selected');
  $('.sliderContainer .slideSelectors .item:eq(' + (args.currentSlideNumber - 1) + ')').addClass('selected');

}

function slideComplete(args) {
    
  $(args.sliderObject).find('.text1, .text2').attr('style', '');
  console.log($(args.sliderObject).find('.text1, .text2'))
  $(args.currentSlideObject).find('.text1').animate({
    right: '100px',
    opacity: '0.8'
  }, 400, 'easeOutQuint');
  
  $(args.currentSlideObject).find('.text2').delay(200).animate({
    right: '50px',
    opacity: '0.8'
  }, 400, 'easeOutQuint');
  
}

function sliderLoaded(args) {
    
  slideComplete(args);
  
  slideChange(args);
  
}

$('.iosSlider.row1').iosSlider({
    desktopClickDrag: true,
    snapToChildren: true,
    infiniteSlider: true,
    navSlideSelector: '.sliderContainer .slideSelectors .item',
    onSlideComplete: slideComplete,
    onSliderLoaded: sliderLoaded,
    onSlideChange: slideChange,
    scrollbar: true,
    scrollbarContainer: '.sliderContainer .scrollbarContainer',
    scrollbarMargin: '0',
    scrollbarBorderRadius: '0',
    keyboardControls: true
  });

// end slide conf
 


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

MBP.hideUrlBarOnLoad();
$('.hasModal').on('click', function(event){openPopup($(this))});
$('.hasModal').on('touchstart', function(event){openPopup($(this))});
var openPopup = function(that){

    var type = $(that).data('modal');
    $.getJSON('js/data.json', function(data) {

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
	return that;
}

// close the popup on click on the cross
$('.close').on('touchstart', function(){Avgrund.hide()});
$('.close').on('click', function(){Avgrund.hide()});

// Adjust the  on resising


window.addEventListener('DOMContentLoaded', function() {
    $("body").queryLoader2({
        barColor: "#ffffff",
        backgroundColor: "#000000",
        percentage: false,
        barHeight: 1,
        completeAnimation: "grow",
        minimumTime: 100
    });
    $('body').removeClass('invisible')
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

    var $overlay = $('<div/>', {
      'id': 'overlay',
      css: {
       position   : 'absolute',
       height     : h + 'px',
       width      : w + 'px',
       left       : 0,
       top        : 0,
       background : '#000',
       opacity    : 0.85,
       zIndex     : 99
      }
     })
    if($('#overlay').length <= 0){
        $overlay.appendTo('body');
    }
    else if(content == '')
        $('#overlay').remove();
    
 // Click overlay to remove
 $('#overlay').click(function(){
  $(this).remove();
 })
});

$(window).resize(function(){
    var w = $(window).width();
    var h = $(window).height();
    $('#overlay').css({
        height:h+'px',
        width:w+'px'
    })
    $('.modal-body').css({'height':$('.modal-body').parent().height()-$('.modal-header').outerHeight()-($('.modal-body').outerHeight()-$('.modal-body').height())-20})
});

