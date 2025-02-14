$(document).ready(function () {

    $(".owl-carousel-1").owlCarousel({
        items: 8,
        loop: true,
        responsiveClass: false,
        responsive:{
          0:{
              items: 1,
              dots: true
          },
          768:{
            items: 3,
            loop: true,
            dots: false
          },
          1000:{
              items: 5,
              loop: true,
              dots: false
          },
          1200:{
            items: 8,
            loop: true,
            dots: false
          }
        }
    });

    var owl = $(".owl-carousel-2").owlCarousel({
        items: 4,
        responsiveClass: true,
        responsive:{
          0:{
              items: 1,
              dots: true
          },
          768:{
            items: 3,
            dots: false
          },
          1000:{
              items: 3,
              dots: false
          },
          1200:{
            items: 4,
            dots: false
          }
        }
    });

    var owl2 = $(".owl-carousel-3").owlCarousel({
      items: 4,
      responsive:{
        0:{
            items: 1,
            dots: true
        },
        768:{
          items: 3,
          dots: false
        },
        1000:{
            items: 3,
            dots: false
        },
        1200:{
          items: 4,
          dots: false
        }
      }
  });

  var owl2 = $(".owl-carousel-4").owlCarousel({
    items: 1,
    dots: true,
    loop: true
});

    $('.team-next').click(function() {
        owl.trigger('next.owl.carousel');
    });
    
    $('.team-prev').click(function() {
        owl.trigger('prev.owl.carousel');
    });

    $('.team-next-2').click(function() {
      owl2.trigger('next.owl.carousel');
    });
  
    $('.team-prev-2').click(function() {
        owl2.trigger('prev.owl.carousel');
    });


    var touch = $('#touch-menu');
    var menu = $('.top-navigation');

    $(touch).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });
    $(window).resize(function() {
        var w = $(window).width();
        if (w > 760 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });

    $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function() {
        $(this).toggleClass('open');
    });


    $('input').change(function() {
      if ($(this).val() !== "") {
        $(this).siblings('label').addClass('input-not-empty');
      }
      else {
        $(this).siblings('label').removeClass('input-not-empty');
      }
    });

    $('#input-comment').change(function() {
      if ($(this).val() !== "") {
        $(this).siblings('label').addClass('area-not-empty');
      }
      else {
        $(this).siblings('label').removeClass('area-not-empty');
      }
    });
    

    var containerEl = document.querySelector('.mixit-1');

    var mixer = mixitup(containerEl);


    jssor_1_slider_init = function() {

        var jssor_1_SlideoTransitions = [
          [{b:-1,d:1,o:-1},{b:0,d:400,x:95,o:1}],
          [{b:-1,d:1,o:-1},{b:0,d:400,x:-2,y:90,o:1}],
          [{b:0,d:400,x:-288}],
          [{b:-1,d:1,o:-1,e:{o:5}},{b:0,d:420,y:82,o:1,e:{y:13,o:14}}],
          [{b:-1,d:1,o:-1},{b:0,d:420,x:-249,o:1}],
          [{b:-1,d:1,o:-1},{b:0,d:420,x:80,o:1}],
          [{b:-1,d:1,o:-1},{b:0,d:400,x:190,o:1}],
          [{b:-1,d:1,o:-1},{b:0,d:400,y:-136,o:1}],
          [{b:0,d:400,x:-245}]
        ];

        var jssor_1_options = {
          $AutoPlay: 1,
          $CaptionSliderOptions: {
            $Class: $JssorCaptionSlideo$,
            $Transitions: jssor_1_SlideoTransitions
          },
          $ArrowNavigatorOptions: {
            $Class: $JssorArrowNavigator$
          },
          $BulletNavigatorOptions: {
            $Class: $JssorBulletNavigator$
          }
        };

        var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

        /*#region responsive code begin*/

        var MAX_WIDTH = 1920;

        function ScaleSlider() {
            var containerElement = jssor_1_slider.$Elmt.parentNode;
            var containerWidth = containerElement.clientWidth;

            if (containerWidth) {

                var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

                jssor_1_slider.$ScaleWidth(expectedWidth);
            }
            else {
                window.setTimeout(ScaleSlider, 30);
            }
        }

        ScaleSlider();

        $Jssor$.$AddEvent(window, "load", ScaleSlider);
        $Jssor$.$AddEvent(window, "resize", ScaleSlider);
        $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
        /*#endregion responsive code end*/
    };

    jssor_1_slider_init();



});