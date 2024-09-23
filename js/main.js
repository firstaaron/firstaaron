$(function() {

    'use strict';

    // smooth scroll
    $("a").on("click", function(event) {

        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $("html, body").animate({

                scrollTop: $(hash).offset().top - 50

            }, 850);

        }

    });

    // hide navbar on mobile after click
    $('.navbar-nav a').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });

    const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll(".navbar-nav .nav-item");
    // navbar on scroll
    function scrollEventHandler(){
        var onScroll = $(this).scrollTop();

        if( onScroll > 50) {
            $(".navbar").addClass("navbar-fixed");
        }
        else {
            $(".navbar").removeClass("navbar-fixed");
        }

        // activate link on scroll
        let current = "";
        sections.forEach((section) => {
            if (window.pageYOffset >= section.offsetTop - 60) {
                current = section.getAttribute("id");
            }
        });
        navLi.forEach((li) => {
            li.classList.remove("active");
            if (li.classList.contains(current + '-link')) {
                li.classList.add("active");
            }
        });
    }
    $(window).on("scroll", scrollEventHandler);
    scrollEventHandler();


    // porfolio filterizr
    $('.filter-container').imagesLoaded( function() {
        var filterizr = $('.filter-container').filterizr();
    });

    // gallery filter
    $('.gallery-filter-menu li').on('click', function() {
        $('.gallery-filter-menu li').removeClass('active');
        $(this).addClass('active');
    });

    // gallery magnific popup
    $('.gallery').each(function() { // the containers for all your galleries
        $(this).magnificPopup({
            delegate: '.gallery-popup', // the selector for gallery item
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    });

});