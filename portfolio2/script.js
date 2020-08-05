let tlIntro = new TimelineMax();
    tlIntro.from('.para', 1, {opacity: 0, delay: .5, y: '10px', ease: Power1.easeInOut});
    tlIntro.from('.bg__text', 1.5, {opacity: 0, ease: Power1.easeInOut}, ['-.08']);
    tlIntro.to('.para', 1, {opacity: 0, y: '-10px', delay: .5, ease: Power1.easeInOut});
    tlIntro.from('.rect', 1, {width: '0', ease: Power1.easeInOut});
    tlIntro.to('.rect', .7, {height: '100vh', ease: Power1.easeInOut});
    tlIntro.to('.overlay', .5, {opacity: 0});
    tlIntro.from('.header__title', 1, {opacity: 0, y: '50px', ease: Power1.easeInOut});
    tlIntro.from('.header__para', 1, {opacity: 0, x: '-25px', ease: Power1.easeInOut});



$(".header__cta").mouseenter(function(){
    let tlOut = new TimelineMax();
        tlOut.to('.header__title, .header__para', .5, {x: '5px', ease: Power1.easeInOut});
});

$(".header__cta").mouseleave(function(){
    let tlOut = new TimelineMax();
        tlOut.to('.header__title, .header__para', .5, {x: '-5px', ease: Power1.easeInOut});
});

$(".header__cta").click(function(){
    let tlOut = new TimelineMax();
        tlOut.to('.header__title, .header__para', .7, {opacity: 0, x: '-100vw', ease: Power1.easeInOut});
  
});


// for main body
