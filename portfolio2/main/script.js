$(document).ready(function(){
  $(".nav-menu").click(function(){
  $(this).toggleClass("clicked");
  $(".menu").toggleClass("appear");
  $(".menu-bg").toggleClass("appear2");
  });
});
$(document).ready(function(){
  $(".menu li a").click(function(){
    setTimeout(function(){
      $(".menu").removeClass("appear")
      $(".menu-bg").removeClass("appear2");
      $(".nav-menu").removeClass("clicked")
  }, 300);
  });
});
$(document).ready(function(){
  $("#quote,#quote2").click(function(){
    $(".get-a-quote").toggleClass("display");
  });
});
$(document).ready(function(){
  $(".close").click(function(){
    setTimeout(function(){
      $(".get-a-quote").removeClass("display")
  }, 300);
  });
});
$(function() {
  $('a[href*=\\#]:not([href=\\#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 75
        }, 650);
        return false;
      }
    }
  });
});

$(function(){
  $(document).scroll(function(){
      if($(this).scrollTop() >= $('#about').offset().top - 400) {
          $("nav").addClass("sticky");
         $("header .links, header .arrow, header .scroll").fadeOut('fast');
      } else {
          $("nav").removeClass("sticky");  
         $("header .links, header .arrow, header .scroll").fadeIn('fast');
      }
  });
});


var $paragraph =  $(".services article,.about-me p,.projects3 article .content,.labs h1,.contact-me .wrapper,.projects4 .project");

$(window).scroll(function () {
  $paragraph.each(function () {
      $(this).addClass("opacity");
      paragraphMiddle = $(this).offset().top + (0.5 *$(this).height());
      windowBottom = $(window).scrollTop() + $(window).height();
      if (paragraphMiddle < windowBottom) {
        $(this).addClass("FadeIn");
      }
  });
});
/* On Load: Trigger Scroll Once*/
$(window).scroll();



