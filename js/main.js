// 1) ios slider conf
// 2) jQuery method to center the modal
// 3) hide URL on Load and get the content then display it in a modal
// 4) query loader conf (page loading effect)
// 5) search highlight with overlay




(function ($) {

    'use strict';
    /*jslint browser: true*/

    /********************
     *
     * 1) ios slider conf
     *
    ********************/
    var moveToLeft = function () {
        var left = $('.row1 .slider, .row2 .slider').css('left');
        $('.row1 .slider, .row2 .slider').css({'left': parseInt(left, 10) - 68}); /* 66 is halp the size of an icon */
    }, colorSearch = function () {
        var randomColor = Math.floor(Math.random() * 16777215).toString(16);
        $('.icon-search').css({textShadow: '0 1px #' + randomColor});
    };

    $('.banner .iosSlider').iosSlider({
        desktopClickDrag: true,
        snapToChildren: true,
        infiniteSlider: true,
        autoSlide: true,
        autoSlideTimer: 10000,
        keyboardControls: true,
        onSlideChange: colorSearch
    });

    $('.iosSlider.rows, .iosSlider.last-row').iosSlider({
        desktopClickDrag: true,
        snapToChildren: true,
        snapFrictionCoefficient: 0.95,
        elasticPullResistance: 0.9,
        onSliderLoaded: moveToLeft
    });


    /***************************************
     *
     *  2) jQuery method to center the modal
     *
    ***************************************/

    $.fn.center = function (parent) {
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
    };


    /********************************************************************
     *
     * 3) hide URL on Load and get the content then display it in a modal
     *
    ********************************************************************/

    MBP.hideUrlBarOnLoad();

    var openPopup = function (that) {
        var type = $(that).data('modal');
        $.getJSON('js/data.json', function (data) {

        }).error(function (e) {
            console.log('error');
        }).success(function (data) {
            if (data[type]) {
                // set the content
                $('.modal-header h1').html(data[type].title);
                $('.modal-body').html(data[type].content);

                // center the modal
                $('.avgrund-popup').center(false);

                // height of the modal - height of the header - padding of body - 20 for the margin
                $('.modal-body').css({'height': $('.modal-body').parent().height() - $('.modal-header').outerHeight() - ($('.modal-body').outerHeight() - $('.modal-body').height()) - 20});
                // display the popup
                Avgrund.show("#default-popup");
            }
        });
        return that;
    };

    $('.hasModal').on('click', function (event) {
        openPopup($(this));
    }).on('touchstart', function (event) {
        openPopup($(this));
    });

    // close the popup on click on the cross
    $('.close').on('touchstart', function () {
        Avgrund.hide();
    }).on('click', function () {
        Avgrund.hide();
    });

    // keep the modal and the overlay clean while resizing
    $(window).resize(function () {
        var w = $(window).width(),
        h = $(window).height();
        $('#overlay').css({
            height: h + 'px',
            width: w + 'px'
        });
        $('.modal-body').css({'height': $('.modal-body').parent().height() - $('.modal-header').outerHeight() - ($('.modal-body').outerHeight() - $('.modal-body').height()) - 20});
    });




    /***********************************************
     *
     * 4) query loader conf (page loading effect)
     *
    ***********************************************/

    window.addEventListener('DOMContentLoaded', function () {

        $("body").queryLoader2({
            barColor: "#ffffff",
            backgroundColor: "#000000",
            barHeight: 1,
            completeAnimation: "grow",
            minimumTime: 100,
            percentage: true
        }).removeClass('invisible');

    });



    /***********************************
     *
     * 5) search highlight with overlay
     *
    ***********************************/


    $('.search input').keyup(function () {
        var w = $(window).width(),
            h = $(window).height(),
            content = $(this).val(),
        // create the overlay
            $overlay = $('<div/>', {
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
            });

        $("body").unhighlight()
            .highlight(content);

        $('.iosSlider').css({'z-index': '', 'perspective': '', '-webkit-perspective': ''});
        $('.slider').css({'perspective': '', '-webkit-perspective': ''});


        if ($('#overlay').length <= 0) {
            $overlay.appendTo('body');
        } else if (content === '') {
            $('#overlay').remove();
            $('.iosSlider').css({'z-index': '1', 'perspective': '1000px', '-webkit-perspective': '1000px'});
            $('.slider').css({'perspective': '1000px', '-webkit-perspective': '1000px'});
        }
        // Click overlay to remove
        $('#overlay').click(function () {
            $('.iosSlider').css({'z-index': '1', 'perspective': '1000px', '-webkit-perspective': '1000px'});
            $('.slider').css({'perspective': '1000px', '-webkit-perspective': '1000px'});
            $(this).remove();
        });
    });

    // help for device sizing, erase once dev finish
    $('.size').text($(document).width());

    $(window).on('resize', function () {
        $('.size').text($(document).width());
    });

}(jQuery));



