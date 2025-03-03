$(function () {
  /* Slick Slider - welcome slide main */
  $('.welcome-slider-main, .welcome-slider-main-mobile').slick({
    arrows: true,
    prevArrow: $('.welcome-arrow .prev'),
    nextArrow: $('.welcome-arrow .next'),
    autoplay: true,
    autoplaySpeed: 6000,
    fade: false,
    speed: 900,
    infinite: true,
    asNavFor: '.welcome-slider-side',
    slidesToShow: 1,
    slidesToScroll: 1,
  }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
  }).on('afterChange', function (event, slick, currentSlide, nextSlide) {
      $('.change-number').html(`0${currentSlide + 1}`)
  })

  $('.pause').click(function () {
    $('.welcome-slider-main').slick('slickPause')
    $('.welcome-slider-side').slick('slickPause')
  })

  $('.welcome-progress-bar').addClass('on')

  /* Slick Slider - welcome slide side */
  $('.welcome-slider-side').slick({
    arrows: true,
    prevArrow: $('.welcome-arrow .prev'),
    nextArrow: $('.welcome-arrow .next'),
    autoplay: true,
    autoplaySpeed: 6000,
    fade: true,
    speed: 900,
    infinite: true,
    asNavFor: '.welcome-slider-main, .zlzlwelcome-slider-main-mobile',
    slidesToShow: 1,
    slidesToScroll: 1
  }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    $('.welcome-progress-bar').removeClass('on')
  }).on('afterChange', function (event, slick, currentSlide, nextSlide) {
    $('.welcome-progress-bar').addClass('on')
  })

  /* Slick Slider - new arrival slide main */
  $('.new-arrival-slider-main').slick({
    arrows: true,
    prevArrow: $('.new-arrival-arrow .prev'),
    nextArrow: $('.new-arrival-arrow .next'),
    autoplay: true,
    autoplaySpeed: 6000,
    fade: true,
    speed: 900,
    infinite: true,
    asNavFor: '.new-arrival-slider-side',
    slidesToShow: 1,
    slidesToScroll: 1
  })

  /* Slick Slider - new arrival slide side */
  $('.new-arrival-slider-side').slick({
    arrows: true,
    prevArrow: $('.new-arrival-arrow .prev'),
    nextArrow: $('.new-arrival-arrow .next'),
    autoplay: true,
    autoplaySpeed: 6000,
    fade: false,
    speed: 900,
    infinite: true,
    asNavFor: '.new-arrival-slider-main',
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
    $('.new-arrival-slider-side .slick-slide').removeClass('on');
  }).on('afterChange', function(event, slick, currentSlide, nextSlide){
    $('.new-arrival-slider-side .slick-current').addClass('on');
    $('.new-arrival-inner .new-arrival-progress-bar').css('transform',`translateX(${60 * currentSlide}px)`)
  });

  /* Slick Slider - kids item slider main */
  $('.kids-item-slider-main').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    fade: true,
    speed: 900,
    infinite: true,
    asNavFor: '.kids-item-slider-side',
    slidesToShow: 1,
    slidesToScroll: 1
  })

  /* Slick Slider - kids item slider side */
  $('.kids-item-slider-side').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    fade: true,
    speed: 900,
    infinite: true,
    asNavFor: '.kids-item-slider-main',
    slidesToShow: 1,
    slidesToScroll: 1
  })

  /* Slick Slider - mds choice slider */
  $('.mds-choice-slider').slick({
    arrows: true,
    prevArrow: $('.mds-choice-arrow .prev'),
    nextArrow: $('.mds-choice-arrow .next'),
    autoplay: true,
    autoplaySpeed: 6000,
    fade: false,
    speed: 900,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: { 
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      }
    ]
  })

  /* Slick Slider - new arrival slide main */
  $('.video-slider').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    fade: false,
    speed: 900,
    infinite: true,
    centerPadding: '0%',
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
        }
      },
      {
        breakpoint: 480,
        settings: { 
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
        }
      }
    ]
  }).on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $('.video-slider .slick-slide').removeClass('on');
  }).on('afterChange', function(event, slick, currentSlide, nextSlide){
    $('.video-slider .slick-current').addClass('on');
    $('.video-inner .video-progress-bar').css('transform',`translateX(${60 * currentSlide}px)`)
  });
})

$(function(){
  /* Header Scroll Change */
  $(window).scroll(function(){
    if($(window).scrollTop() > 50) {
      $('.mobile-gnb, .btn-top').addClass('active')
    }
    else {
      $('.mobile-gnb, .btn-top').removeClass('active')
    }
  })
})