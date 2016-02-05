console.log("stay thirsty, my friends...");

var $gaRing = $('#gaRing')
var $ga = $('#ga');
var $gacontainer = $('#gacontainer');
var $loadinglines = $('#loadinglines');
var $loadingRightChars = $('.loadingRightChars');
var $loadingLeftChars = $('.loadingLeftChars');
var $darkloading = $('#darkloading');
var gotocharselectfx = new Audio("./assets/charselect.wav");
var charchoose = new Audio("./assets/characterchoose.wav");
var $battlescreen = $('#battlescreen');
var $titleheader = $('#titleheader');
var $characters = $('.character');

var showText = function (target, message, index, interval) {
  if (index < message.length) {
    $(target).append(message[index++]);
    setTimeout(function () { showText(target, message, index, interval); }, interval);
  }
}





$gaRing.on("click", function() {
    $ga.fadeOut(600);
    $gaRing.css({'-webkit-animation': 'rotating 3s linear infinite'});
    $gaRing.fadeOut(600);
    setTimeout(function() {
      $gaRing.css({'-webkit-animation': 'rotating 20s linear infinite'});
      $loadinglines.fadeIn(100);
      showText($loadinglines, "What if I told you..", 0, 50);
      $('#song1').trigger('play');
      setTimeout(function() {
        $loadinglines.fadeOut(500);
        setTimeout(function() {
          $loadinglines.text('');
          $loadinglines.fadeIn(500);
          showText($loadinglines, "that there was no final project...", 0, 50);
          setTimeout(function() {
            $loadinglines.fadeOut(500);
            setTimeout(function() {
              $loadinglines.text('');
              $loadinglines.fadeIn(500);
              showText($loadinglines, "that this was all just a plan... to make you suffer.", 0, 50);
              setTimeout(function() {
                $loadinglines.fadeOut(500);
                setTimeout(function() {
                  $loadinglines.text('');
                  $loadinglines.fadeIn(500);
                  showText($loadinglines, "Would you stand up and fight?", 0, 50);
                  setTimeout(function() {
                    $loadinglines.fadeOut(500);
                    setTimeout(function() {
                      $loadinglines.text('');
                      $loadinglines.fadeIn(500);
                      showText($loadinglines, "Or are you too beta?", 0, 50);
                      setTimeout(function() {
                        $loadingRightChars.fadeIn(1000);
                        $loadingLeftChars.fadeIn(1000);
                        setTimeout(function() {
                          $loadinglines.fadeOut(400);
                          $gaRing.fadeIn(800);
                          $ga.fadeIn(800);
                          setTimeout(function() {
                            $darkloading.fadeIn(400);
                            transitionCharSelect()
                            setTimeout(function() {
                              $titleheader.text("THE GAUNTLET");
                              $titleheader.fadeIn(2000);
                            }, 2000)
                          }, 2000)
                        }, 1700)
                      }, 2800)
                    },2500)
                  }, 3000)
                }, 2000)
              }, 4000)
            }, 1800)
          }, 2300)
        }, 1800)
      }, 1500)
    }, 1000)
});

function transitionCharSelect() {
  if ($darkloading.css('display') === 'block') {
    $gaRing.off();
    $gaRing.on("click", function() {
      gotocharselectfx.play();
      $('#song1').animate({volume: 0}, 500);
      $('#song2').trigger('play');
      $loadingLeftChars.animate({left: "-=1000", },1000);
      $loadingRightChars.animate({left: "+=1000", },1000);
      $loadingRightChars.fadeOut(1000);
      $loadingLeftChars.fadeOut(1000);
      $ga.fadeOut(600);
      $gacontainer.fadeOut(600);
      $gaRing.css({'-webkit-animation': 'rotating 3s linear infinite'});
      $gaRing.css({'-webkit-animation': 'rotating 20s linear infinite'});
      $titleheader.fadeOut(600);
      setTimeout(function() {
        $battlescreen.fadeIn(600);
        $loadingLeftChars.animate({left: "+=1100"}, 1000);
        $loadingLeftChars.fadeIn(600);
        $loadingRightChars.animate({left: "-=1000"}, 1000);
        $loadingRightChars.fadeIn(600);
        $titleheader.text("CHOOSE YOUR CREW");
        $titleheader.fadeIn(100);
        setTimeout(function() {
          characterSelect();
        },2000);
      }, 2000);
  });
}
}


function characterSelect() {
  console.log("deployed")
  if ($battlescreen.css('display') ==='block') {
  $characters.on("click", function() {
    charchoose.play();
    $('#song2').trigger(volume = 0.5);
    setTimeout(function() {
      $('#song2').trigger(volume = 1);
    },3000)
  });
}
}



function render() {
  $darkloading.fadeIn(400);
  $gaRing.fadeIn(800);
  $ga.fadeIn(800);
  $loadingRightChars.fadeIn(1000);
  $loadingLeftChars.fadeIn(1000);
  transitionCharSelect()
}





