
$(function(){
    $('.navbar__toggle-navbar').on('click', function(){
        $('.navbar__menu-block').toggleClass('active');
    });
    $('.navbar__menu-link').on('click', function(){
        $('.navbar__menu-block').toggleClass('active');
    });
})

$(document).keyup(function (e) {
    if (e.keyCode === 27) {
        $('.navbar__menu-block').removeClass('active');
    }
});

//navbar links: scrolling to anchors

$(function () {
    function slowScroll (e) {
        let anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - -10
        }, 800);
        e.preventDefault();
    }

    $('a.navbar__menu-link').on("click", slowScroll);
    $('a.footer-nav__link').on("click",  slowScroll);
})
  let slideIndex = 1;
 showSlides(slideIndex);

 function plusSlides(n) {
     showSlides(slideIndex += n);
 }

 function showSlides(n) {
    
     let slides = document.getElementsByClassName("slidershow-container__mySlides");


     if (n > slides.length) {
         slideIndex = 1;
     }
     if (n < 1) {
         slideIndex = slides.length;
     }
     for (let i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";
     }

     slides[slideIndex-1].style.display = "block";

 }
