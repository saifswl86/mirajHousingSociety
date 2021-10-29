$(document).ready(()=>{
	var $st = $('.pagination');
var $slickEl = $('.center');

$slickEl.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
  var i = (currentSlide ? currentSlide : 0) + 1;
  $st.text(i + ' of ' + slick.slideCount);
});

                
})