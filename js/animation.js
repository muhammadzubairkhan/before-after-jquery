function initHomePageAnimation() {

    $( "img" ).mousemove(function( event ) {
          event.stopPropagation();
    });

    setTimeout(function() {
      $(".fade-img-text-1").fadeIn(1000);
    }, 2000);

    setTimeout(function() {
      $(".fade-img-text-1").fadeOut(1000, function() {
         $(".fade-img-text-2").fadeIn(3000);
      });

    }, 5000);

}

initHomePageAnimation();

$(".page-container").css('opacity', 0);

$(document).ready(function(){

  $(".page-container").css('opacity', 1);

  var up = true;
  var value = 0;
  var increment = 1;

  var element = $(".js-img-compare");
  var container_width = $(".js-img-compare");
  var dragHandle = $(".images-compare-handle");
  var separator = $(".separator-line");
  var frontElement = element.find('> *:nth-child(1)');
  var ratio = 0;  // Used for aspect ratio

  var width = $(container_width).width() - 4;    // Current image width -4 to keep the separator line on canvas
  var height = $(container_width).height();  // Current image height

  var half = width / 2;

 var ceiling = width;
 separator.css('left', 0 + 'px');

  setTimeout(function(){
         $(".page-container").removeClass('blockEvents');
  }, 14000);

  function PerformClipping() {

          if (up == true && value <= ceiling) {

                value += increment;

                frontElement.attr('ratio', ratio).css('clip', 'rect(0, ' + value + 'px, ' + height + 'px, 0)');
                frontElement.attr('ratio', ratio).css('-webkit-clip', 'rect(0, ' + value + 'px, ' + height + 'px, 0)');
                separator.css('left', value + 'px');

                if (value == ceiling) {
                  up = false;
                  ceiling = half;
                }

          } else {

            setTimeout(function() {

              if (up == false && value >= ceiling) {

                up = false
                value -= increment;

                frontElement.attr('ratio', ratio).css('clip', 'rect(0, ' + value + 'px, ' + height + 'px, 0)');
                frontElement.attr('ratio', ratio).css('clip', '-webkit-rect(0, ' + value + 'px, ' + height + 'px, 0)');
                separator.css('left', value + 'px');

                if(value-10 < half && value+10 > half) {
                    $(".images-compare-handle").css('display', 'block');
                }

            }

            }, 1000);

          }

    }

    setTimeout(function() {
      setInterval(PerformClipping, 10);
    }, 3000);

});