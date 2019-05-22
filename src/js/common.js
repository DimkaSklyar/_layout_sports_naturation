function AjaxFormRequest(result_id, formMain, url) {
  jQuery.ajax({
    url: url,
    type: "POST",
    dataType: "html",
    data: jQuery("#" + formMain).serialize(),
    success: function (response) {
      $(':input', '#' + formMain)
        .not(':button, :submit, :reset, :hidden')
        .val('')
        .removeAttr('checked')
        .removeAttr('selected');
      setTimeout(() => {
        $("#message").hide();
      }, 5000);
    },
    error: function (response) {
      var par = document.getElementById(result_id);
      var error = document.createElement('p');
      error.classList.add("mt-3");
      error.innerHTML = "Возникла ошибка при отправке формы.";
      par.appendChild(error);
      setTimeout(func, 1000);
    }
  });
}

function func() {
  $("p.mt-3").detach();
}

$('#question-form').submit(function(e){
  e.preventDefault();
  AjaxFormRequest('messegeResult-question','question-form','./feedback.php');
});


$(".category-href").click(function () {
  var getValue = $(this).attr('id');
  console.log(getValue);
  localStorage.setItem('button', getValue);
});

$("a[href='#small-dialog']").click(function () {
  $("#price").text($(this).closest(".product-inner").find(".price").text());
  $("#product-img").attr("src", $(this).closest(".product-inner").find("img").attr("src"));
  $("#product-name").text($(this).closest(".product-inner").find(".product-name").text());
  $("#description").html($(this).closest(".product-inner").find(".d-1").html())
  $("#inputCar").val($("#product-name").text());
});

$("#trigger-1-show").click(function () { 
  $("#trigger-1").trigger('click');
});

$("#trigger-2-show").click(function () { 
  $("#trigger-2").trigger('click');
});

$(document).ready(function () {

	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});


  $(".owl-carousel-1").owlCarousel({
    items: 8,
    loop: true,
    responsiveClass: false,
    responsive: {
      0: {
        items: 1,
        dots: true
      },
      768: {
        items: 3,
        loop: true,
        dots: false
      },
      1000: {
        items: 5,
        loop: true,
        dots: false
      },
      1200: {
        items: 8,
        loop: true,
        dots: false
      }
    }
  });

  var owl = $(".owl-carousel-2").owlCarousel({
    items: 4,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        dots: true
      },
      768: {
        items: 3,
        dots: false
      },
      1000: {
        items: 3,
        dots: false
      },
      1200: {
        items: 4,
        dots: false
      }
    }
  });

  var owl2 = $(".owl-carousel-3").owlCarousel({
    items: 4,
    responsive: {
      0: {
        items: 1,
        dots: true
      },
      768: {
        items: 3,
        dots: false
      },
      1000: {
        items: 3,
        dots: false
      },
      1200: {
        items: 4,
        dots: false
      }
    }
  });

  var owl2 = $(".owl-carousel-3").owlCarousel({
    items: 1,
    dots: true,
    loop: true
  });

  $('.team-next').click(function () {
    owl.trigger('next.owl.carousel');
  });

  $('.team-prev').click(function () {
    owl.trigger('prev.owl.carousel');
  });

  $('.team-next-2').click(function () {
    owl2.trigger('next.owl.carousel');
  });

  $('.team-prev-2').click(function () {
    owl2.trigger('prev.owl.carousel');
  });


  var touch = $('#touch-menu');
  var menu = $('.top-navigation');

  $(touch).on('click', function (e) {
    e.preventDefault();
    menu.slideToggle();
  });
  $(window).resize(function () {
    var w = $(window).width();
    if (w > 760 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
  });

  $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function () {
    $(this).toggleClass('open');
  });


  $('input').change(function () {
    if ($(this).val() !== "") {
      $(this).siblings('label').addClass('input-not-empty');
    }
    else {
      $(this).siblings('label').removeClass('input-not-empty');
    }
  });

  $('#input-comment').change(function () {
    if ($(this).val() !== "") {
      $(this).siblings('label').addClass('area-not-empty');
    }
    else {
      $(this).siblings('label').removeClass('area-not-empty');
    }
  });

  if ($('div').is(".mixit-1")) {

    var containerEl = document.querySelector('.mixit-1');

    var mixer = mixitup(containerEl);
  }

  var buttonNameClick = localStorage.getItem('button');

  var a = $('.catalog-category');

  for (let i = 0; i < a.length; i++) {
    if ($(a[i]).data('toggle').substring(1) == buttonNameClick) {
      $(a[i]).trigger('click');
    }
  }

  /*Dropdown Menu*/
  $('.dropdown').click(function () {
    $(this).attr('tabindex', 1).focus();
    $(this).toggleClass('active');
    $(this).find('.dropdown-menu').slideToggle(300);
  });
  $('.dropdown').focusout(function () {
    $(this).removeClass('active');
  });
  $('.dropdown .dropdown-menu li').click(function () {
    $(this).parents('.dropdown').find('span').text($(this).text());
    $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
    $(this).find('button').trigger('click');
  });
  /*End Dropdown Menu*/


  $('.dropdown-menu li').click(function () {
    var input = '<strong>' + $(this).parents('.dropdown').find('input').val() + '</strong>',
      msg = '<span class="msg">Hidden input value: ';
    $('.msg').html(msg + input + '</span>');
  });

  jssor_1_slider_init = function () {

    var jssor_1_SlideoTransitions = [
      [{ b: -1, d: 1, o: -1 }, { b: 0, d: 400, x: 95, o: 1 }],
      [{ b: -1, d: 1, o: -1 }, { b: 0, d: 400, x: -2, y: 90, o: 1 }],
      [{ b: 0, d: 400, x: -288 }],
      [{ b: -1, d: 1, o: -1, e: { o: 5 } }, { b: 0, d: 420, y: 82, o: 1, e: { y: 13, o: 14 } }],
      [{ b: -1, d: 1, o: -1 }, { b: 0, d: 420, x: -249, o: 1 }],
      [{ b: -1, d: 1, o: -1 }, { b: 0, d: 420, x: 80, o: 1 }],
      [{ b: -1, d: 1, o: -1 }, { b: 0, d: 400, x: 190, o: 1 }],
      [{ b: -1, d: 1, o: -1 }, { b: 0, d: 400, y: -136, o: 1 }],
      [{ b: 0, d: 400, x: -245 }]
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