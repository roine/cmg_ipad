/*!
 * avgrund 0.1
 * http://lab.hakim.se/avgrund
 * MIT licensed
 *
 * Copyright (C) 2012 Hakim El Hattab, http://hakim.se
 */
var Avgrund = (function(){

  var $container = $(document.documentElement),
    $popup = $( '.avgrund-popup-animate' ),
    $cover = $( '.avgrund-cover' );

  $container[0].className = $container[0].className.replace( /\s+$/gi, '' ) + ' avgrund-ready';

  // Deactivate on ESC
  function onDocumentKeyUp( event ) {
    if( event.keyCode === 27 ) {
      deactivate();
    }
  }

  // Deactivate on click outside
  function onDocumentClick( event ) {
    if( event.target === $cover[0] ) {
      deactivate();
    }
  }

  function activate( state ) {
    $(document).on('keyup', onDocumentKeyUp);
    $(document).on('click', onDocumentClick);
    $(document).on('touchstart', onDocumentClick);

    $popup.addClass('no-transition');

    setTimeout( function() {
      $popup.removeClass('no-transition' );
      $container.addClass('avgrund-active');
      
    }, 0 );
  }

  function deactivate() {
    $container.removeClass('avgrund-active' );
    $popup.removeClass('avgrund-popup-animate');

  }

  function disableBlur() {
    $(document.documentElement).addClass('no-blur')
  }


  function show(selector){
    $popup = $(selector);
    $popup.addClass('avgrund-popup-animate');
    activate();
    console.log($popup.scrollTop())
    return this;
  }
  function hide() {
    deactivate();
  }

  return {
    activate: activate,
    deactivate: deactivate,
    disableBlur: disableBlur,
    show: show,
    hide: hide
  }

})();