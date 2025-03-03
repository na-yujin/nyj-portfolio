$(function(){
  /* Slick Slider - Media */
  $('.media-slider').slick({
    arrows: true,
    prevArrow: $('.media-arrow .prev'),
    nextArrow: $('.media-arrow .next'),
    autoplay: true,
    autoplaySpeed: 6000,
    fade: false,
    speed: 900,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: { 
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  }).on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $('.media-slider .slick-slide').removeClass('on');
  }).on('afterChange', function(event, slick, currentSlide, nextSlide){
    $('.media-slider .slick-current').addClass('on');
    $('.media-slider-outer .media-progress-bar').css('transform',`translateX(${170 * currentSlide}px)`)
  });

  /* Slick Slider - business */
  const list = $('.business-slider-text > div');

  $(".business-slider-img-side").slick({
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: false,
    speed: 900,
    infinite: true,
    asNavFor: '.business-slider-img-main', 
    slidesToShow: 1,
    slidesToScroll: 1,
  })

$(".business-slider-img-main").slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: false,
    speed: 900,
    infinite: true,
    asNavFor: '.business-slider-img-side',
    slidesToShow: 1,
    slidesToScroll: 1,
}).on('beforeChange', function(event, slick, currentSlide, nextSlide){
  list.removeClass('on');
}).on('afterChange', function(event, slick, currentSlide, nextSlide){
  list.eq(currentSlide).addClass('on');
});

  /* Slick Slider - city-gas */
  $('.city-gas-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    fade: true
  });
})

$(function(){
  /* Header Scroll Change */
  $(window).scroll(function(){
    if ($(window).scrollTop() > 50) {
      $('.btn-top').addClass('active')
    }
    else {
      $('.btn-top').removeClass('active')
    }
});
  /* Header Trigger */
  $('.trigger').click(function(){
    $(this).toggleClass('active')
    $('.gnb').toggleClass('active')
  })
  $('.gnb a, section').click(function(){
    $('.gnb, .trigger').removeClass('active')
  })
})