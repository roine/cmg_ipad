// my options
var slideShow = s = {};
slideShow.option = {
	sideMargin:20,
};
// minify the object name
s.o = slideShow.option;



// IPAD PORTRAIT
enquire.register("screen and (max-width:768px)", {
	match:function(){
		// $('.slideshow [class^="col_"]').html('<img class="center" src="http://fakeimg.pl/'+(768-s.o.sideMargin)+'x200?text=Slideshow">')
	},
	unmatch:function(){
		// $('.slideshow').html('')
	}
})
// IPAD LANDSCAPE
.register("screen and (orientation:LANDSCAPE)", {
	match:function(){
		// alert('dsf')
		// $('.slideshow [class^="col_"]').html('<img class="center" src="http://fakeimg.pl/'+(1024-s.o.sideMargin)+'x200?text=Slideshow">')
	},
	unmatch:function(){
		// $('.slideshow').html('')
	}
}).listen();