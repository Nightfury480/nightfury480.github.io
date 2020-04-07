$(document).ready(function () {
    
    
/* -------------------------------------------------------------------------------- */
/* ------ STICKY NAVIGATION SECTION ------*/
/* -------------------------------------------------------------------------------- */
    
    
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }   
    }, {
        offset: '60px;'
    });
    
    
/* -------------------------------------------------------------------------------- */
/* ------ SCROLL ON BUTTONS SECTION ------*/
/* -------------------------------------------------------------------------------- */
    
    
    
    $('.js--scroll-to-plans').click(function () {
      $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });
        
    
    $('.js--scroll-to-start').click(function () {
      $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 800);
    });
    
    
/* --------------------------------------------------------------------------------- */
/* ------ NAVIGATION SCROLL SECTION ------*/ /* ------ SNIPPET FROM CSS-TRICKS ------*/
/* --------------------------------------------------------------------------------- */
    
    
    
    // Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
    
    
    
/* -------------------------------------------------------------------------------- */
/* ------ ANIMATIONS  ON SCROLL SECTION ------*/
/* -------------------------------------------------------------------------------- */
    
    
    
    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '75%'
    });
    
    $('.js--wp-2').waypoint(function(direction){
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '75%'
    });
    
    $('.js--wp-3').waypoint(function(direction){
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '75%'
    });
    
    $('.js--wp-4').waypoint(function(direction){
        $('.js--wp-4').addClass('animated fadeIn');
    }, {
        offset: '75%'
    });
    
    
    
/* -------------------------------------------------------------------------------- */
/* ------ ANIMATIONS  ON SCROLL SECTION ------*/
/* -------------------------------------------------------------------------------- */
    
    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon ion-icon');
        
        nav.slideToggle(200);
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('close-circle-outline');
            icon.removeClass('ion-navicon-round')
        } else {   
            icon.addClass('ion-navicon-round');
            icon.removeClass('close-circle-outline')
        }
    });
    
/* -------------------------------------------------------------------------------- */
/* ------ ANIMATIONS  ON SCROLL SECTION ------*/
/* -------------------------------------------------------------------------------- */


    var map = new GMaps({
      div: '.map',
      lat: 54.503136,
      lng: -6.60810,
      zoom: 12
    });
    
    map.addMarker({
      lat: 54.503136,
      lng: -6.60810,
      title: 'Lurgan',
      infoWindow: {
            content: '<p>Our Lurgan Headquarters</p>'
            }
  
});
    
    
});



















