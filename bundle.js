
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
 function Slider(){
    this.slideIndex = 1;
     let self = this;
    /*this.showSlides(slideIndex);*/

    this.plusSlides = function (n) {
        this.showSlides(self.slideIndex += n);
    }

    this.showSlides = function (n) {

        let slides = document.getElementsByClassName("slidershow-container__mySlides");


        if (n > slides.length) {
            self.slideIndex = 1;
        }
        if (n < 1) {
            self.slideIndex = slides.length;
        }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slides[self.slideIndex - 1].style.display = "block";
    }
}
let slider = new Slider();
slider.showSlides();