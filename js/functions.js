
$(document).ready(function(){
  $('.snippet-carousel').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    rows: 2
  });

  $('#da-slider').cslider({
    autoplay	: true,
    bgincrement	: 450
  });

});
