$(document).ready(function(){
    "use strict";

// accordian-item
    $('.accordion-item').on('click', function(){
        $(this).addClass('border').siblings().removeClass('border');
    });


// bot-to-top scrolling
$(window).on('scroll',function(){
    // back to top scroll
    var scrolling =$(this).scrollTop();
    if(scrolling>400){
        $('.bot-to-top').fadeIn();
    }
    else{
        $('.bot-to-top').fadeOut();
    }


// navbar scroll
     if(scrolling > 50){
        $('nav').addClass('nav-fix');
    }
    else{
        $('nav').removeClass('nav-fix');
    }
});


//  bot-to-top click
    $('.bot-to-top').click (function(){
        $('html, body').animate({
            scrollTop:'0px',
        },1500);
    });


// scrollbox
    var $container = $('#scroll-item'),
    i = 1;

$container
  .on('reach.scrollbox', function () {
    if (i < 5) {
        // emulate XHR
        window.setTimeout(function () {
          $container.append('<div class="test-div">This is a test div #' + i ++ + '</div>');
          $container.scrollbox('up<a href="https://www.jqueryscript.net/time-clock/">date</a>'); // recalculate bar height and position
        }, 100);
    }
  })
  .scrollbox({
    // position from bottom when reach.scrollbox will be triggered
    buffer: 150 
  });


  // wow js    =================;

  new WOW().init();
     
});

