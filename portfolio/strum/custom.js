$(function(){
  /* Wow Scroll Reveal Animation */
  wow = new WOW(
    {
    boxClass: 'wow',
    offset: 150,
    mobile: false
  })
  wow.init();
  /* Tab Menu - Service */
  $('.service-tab-btn').click(function(){
    $(this).addClass('active')
    $(this).siblings().removeClass('active')

    var tab = $(this).attr('data-alt')
    $('.service-tab').removeClass('active')
    $('#' + tab).addClass('active')
    $('.service-slider').slick('slickGoTo', 0)
  })

  /* Slick Slider - Service */
  $('.service-slider').slick({
    arrows: false,
    dots: true,
    autoplay:true,
    autoplaySpeed: 3600,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    setPosition: 0,
  })
  
  /* Slick Slide - Resize, Refresh */
  $('.service-tab-btn').click(function(){
    $('.service-slider').resize()
    $('.service-slider').slick('refresh')
    $('.service-slider').slick('setPosition')
  })

  /* TypeIt - Welcome */
  $('#typing').typeIt({
    strings: ["편리", "스마트"],
    speed: 200,
    autoStart: true,
    breakLines: false,
  })
})

$(function(){
  /* Header Scroll Change */
  $(window).scroll(function(){
    if($(window).scrollTop() > 50) {
      $('header, .btn-top').addClass('active')
    }
    else {
      $('header, .btn-top').removeClass('active')
    }
  })

  /* Header Trigger */
  $('.trigger').click(function(){
    $(this).toggleClass('active')
    $('.gnb').toggleClass('active')
  })
  $('.gnb a, section').click(function(){
    $('.gnb, .trigger').removeClass('active')
  })
})