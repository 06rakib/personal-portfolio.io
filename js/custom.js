$(function(){
  
  $('.count').counterUp({
    delay: 10,
    time: 1000
});  
    
//     slider js
    
$('.slide-area').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    dots:true
    

});
    $('.slider-area2').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    dots:true
    

});
    //===== Mobile Menu
    
    $(".navbar-toggler").on('click', function() {
        $(this).toggleClass("active");
    });
    
//    SmoothScroll
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 300
});
    //==== Show or hide the sticky footer button
$(window).on('scroll', function(event) {
    if($(this).scrollTop() > 600){
        $('.back-to-top').fadeIn(200)
    } else{
        $('.back-to-top').fadeOut(200)
    }
});

//==== Animate the scroll to top
$('.back-to-top').on('click', function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: 0,
    }, 1500);
});
    
   
    
    //==== Preloader
    
    $(window).on('load', function(event) {
    $('.preloader').delay(500).fadeOut(500);
});
    
//    Sticky Menubar
    
$(window).on('scroll', function(event) {    
    var scroll = $(window).scrollTop();
    if (scroll < 245) {
        $(".navigation").removeClass("sticky");
        
    } else{
        $(".navigation").addClass("sticky");
        
    }
});
//    Venubox js
  $('.video').venobox({
         framewidth: '800px',


     

 });
    //    Animation on Scroll js
    AOS.init();
    
    
    
//    Type  js
 var typed6 = new Typed('.type', {
    strings: [' Web Designer',
              'Wordpress expert',
             'Web Devoloper'
             ],
    typeSpeed: 80,
    backSpeed: 60,
    loop: true
  });
    
});

//==== Mixitup js
var mixer = mixitup('.gall-items');





