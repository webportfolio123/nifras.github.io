$(document).ready(function () {

  $('#menu').click(function () {
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load', function () {

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if ($(window).scrollTop() > 0) {
      $('.top').show();
    } else {
      $('.top').hide();
    }

  });

  // smooth scrolling 

  $('a[href*="#"]').on('click', function (e) {

    e.preventDefault();

    $('html, body').animate({

      scrollTop: $($(this).attr('href')).offset().top,

    },
      500,
      'linear'
    );

  });
  $("#hom").hover(function () {
    $(".textappearhome").toggleClass("textappearmain");

  })
  $("#abo").hover(function () {
    $(".textappearabout").toggleClass("textappearmain");
  })
  $("#edu").hover(function () {
    $(".textappearedu").toggleClass("textappearmain");
  })
  $("#por").hover(function () {
    $(".textappearpor").toggleClass("textappearmain");
  })
  $("#con").hover(function () {
    $(".textappearcon").toggleClass("textappearmain");
  })

  var lastScroll = 0;
  window.onscroll = function () {
    let currentScroll = document.documentElement.scrollTop || document.body.scrollTop; // Get Current Scroll Value

    if (currentScroll > 0 && lastScroll <= currentScroll) {
      lastScroll = currentScroll;

      $('.mobilefooter').css("bottom", "-84px");
    } else {
      lastScroll = currentScroll;
      $('.mobilefooter').css("bottom", "0");
    }
  };




});