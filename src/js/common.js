$(document).ready(function () {

    $(".owl-carousel-1").owlCarousel({
        items: 8,
        loop: true,
        nav: true
    });

    var owl = $(".owl-carousel-2").owlCarousel({
        items: 4
    });

    var owl2 = $(".owl-carousel-3").owlCarousel({
      items: 4
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