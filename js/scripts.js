$(document).ready(function(){
    
    $('.slide-pos').height($('.slides').height());

    var controller = new ScrollMagic.Controller();

    var pinWhatIsScene = new ScrollMagic.Scene({
        triggerElement: '.what-is',
        triggerHook: 0,
        duration: '25%'
    })
        .setPin('.what-is .banner-div', {pushFollowers: false})
        .addTo(controller);

    var firstScene = new ScrollMagic.Scene({
        triggerElement: '.experience',
        duration: '90%',
        triggerHook: 0.8
    })
        .setClassToggle('.experience', 'fade-in')
        .addIndicators({
            name: 'fade scene',
            colorTrigger: 'yellow',
            colorStart: '#75C695'
        })
        .addTo(controller);

    var parallelTl = new TimelineMax();
    parallelTl
        .from('.banner-h2 h2', 0.5, {autoAlpha: 0, ease: Power0.easeNone})
        .from('.banner-h2 .banner-div', 1, {y: '-30%', ease: Power0.easeNone}, 0);

    var slidingParallaxScene = new ScrollMagic.Scene({
        triggerElement: '.about .banner-h2',
        triggerHook: 1,
        duration: '200%'
    })
        .setTween(parallelTl)
        .addTo(controller);

    var slideScene = new ScrollMagic.Scene({
        triggerElement: '.slides',
        triggerHook: 0.2,
        duration: '232%'
    })
        .setPin('.slides', {pushFollowers: false})
        .addTo(controller);

    var slidesTl = new TimelineMax();
    slidesTl
        .to('.slide-1', 1, {x: -100, autoAlpha: 0, ease: Power0.easeNone})
        .to('.slide-2', 1, {autoAlpha: 1, ease: Power0.easeNone}, 1)
        .to('.slide-2', 1, {x: -100, autoAlpha: 0, ease: Power0.easeNone}, 3)
        .to('.slide-3', 1, {autoAlpha: 1, ease: Power0.easeNone}, 4)
    ;


/*    .from('.slide-2', 0.5, {autoAlpha: 0, ease: Power0.easeNone}, 0.35)
        .from('.slide-2', 0.5, {x: 100, ease: Power0.easeNone}, 0.55)
        .to('.slide-2', 0.5, {x: -100, ease: Power0.easeNone}, 1.25)
        .to('.slide-2', 0.5, {autoAlpha: 0, ease: Power0.easeNone}, 1.50)*/

    var slide1Scene = new ScrollMagic.Scene({
        triggerElement: '.fake-height',
        duration: '100%'
    })
        .setTween(slidesTl)
        .addTo(controller);

});
