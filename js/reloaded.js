console.log("stay thirsty, my friends...");

//loading variables

var $gaRing = $('#gaRing')
var $ga = $('#ga');
var $gacontainer = $('#gacontainer');
var $loadinglines = $('#loadinglines');
var $loadingRightChars = $('.loadingRightChars');
var $loadingLeftChars = $('.loadingLeftChars');
var $darkloading = $('#darkloading');
var gotocharselectfx = new Audio("./assets/charselect.wav");
var charchoose = new Audio("./assets/characterchoose.wav");
var vsscreenfx = new Audio("./assets/vsscreen.wav");
var vsscreenfx2 = new Audio("./assets/vsscreen2.wav");
var ezrafx = new Audio("./assets/ezra.wav");
var $battlescreen = $('#battlescreen');
var $titleheader = $('#titleheader');
var $magnusSelect = $('#Magnus');
var $ghetsisSelect = $('#Ghetsis');
var $roxieSelect = $('#Roxie');
var $ultimeciaSelect = $('#Ultimecia');
var $gilgameshSelect = $('#Gilgamesh');
var $charonSelect = $('#Charon');


//Avatar Properties
var Avatar = function(name, level, health, attack1, power1, picture, avatar, switchpic) {
  this.name = name;
  this.level = level;
  this.maxhealth = health;
  this.currenthealth = health;
  this.attackName = attack1
  this.attackPower = power1
  this.battle = function() {
    if (power1 > activeEnemyAvatar.currenthealth) {
      activeEnemyAvatar.currenthealth = 0;
    } else {
      activeEnemyAvatar.currenthealth -= power1;
    }
  };
  this.picture = picture;
  this.avatar = avatar;
  this.switchpic = switchpic;
};

var Magnus = new Avatar("Magnus", 46,  50000,
                        "Omni Blaze Assault",
                        10000,
                        $('.clashavatarpic1'),
                        "./assets/av1.gif",
                        "./assets/av1small.png");

var Ghetsis = new Avatar("Ghetsis", 78,  100000,
                         "Epoch Hyperion Siege", 20000,
                         $('.clashavatarpic2'),
                        "./assets/av2.gif",
                        "./assets/av2small.png");

var Roxie = new Avatar("Roxie", 58, 71000,
                       "Vibro Scythe",
                       10000,
                       $('.clashavatarpic3'),
                       "./assets/av3.gif",
                       "./assets/av3small.png" );

var Ultimecia = new Avatar("Ultimecia", 1, 71000,
                   "The Divine Eulogy",
                   18000,
                   $('.clashavatarpic4'),
                   "./assets/av4.gif",
                   "./assets/av4small.png" );

var Gilgamesh = new Avatar("Gilgamesh", 250, 71000,
                   "Masamune",
                   20000,
                   $('.clashavatarpic5'),
                   "./assets/av5.gif",
                   "./assets/av5small.png" );

var Charon = new Avatar("Charon", 30, 71000,
                   "Imperial Rule #43",
                   30000,
                   $('.clashavatarpic6'),
                   "./assets/av6.gif",
                   "./assets/av6small.png" );


var avatarList = [Magnus, Ghetsis, Roxie, Ultimecia, Gilgamesh, Charon];
var activeAvatarsArray =[];
var usableAvatarList = activeAvatarsArray;
var avatarSelectArray = [Magnus.name, Ghetsis.name, Roxie.name, Ultimecia.name, Gilgamesh.name, Charon.name];


var Enemyavatar = function(name, level, health, attack1, power1, attack2, power2, picture, avatar, oneLiner, track) {
  this.name = name;
  this.level = level;
  this.maxhealth = health;
  this.currenthealth = health;
  this.attackNames = [
    attack1, attack2
  ];
  this.attackPowers = [
    power1, power2
  ];
  this.picture = picture;
  this.avatar = avatar;
  this.oneLiner = oneLiner;
  this.track = track;
  this.battle = function(power) {
    if (power > activeAvatar.currenthealth) {
      activeAvatar.currenthealth = 0;
    } else {
    activeAvatar.currenthealth -= power;
    }
  };
};

var ezra = new Enemyavatar("\"EZmode\" Ezra", 17, 80000,
                           "Mama Mia", 80000,
                           "Tragedy of Objecht", 80000,
                           $('.ezra'),
                           "./assets/ezra.gif",
                           ".... mama m--- WHAT?!..... mario is bae..",
                           $('#ezratrack'))

var jim = new Enemyavatar("\"Good Guy\" Jim", 46, 120000,
                          "That One Comic Joke Though", 80000,
                          "That Joke Is Still Funny", 80000,
                          $('.jim'),
                          "./assets/jim.gif",
                          "Good Job!!",
                          $('#jimtrack'))

var onePunchPhil = new Enemyavatar("Mastermind Phil", 999, 160000,
                                   "lol your code.", 80000,
                                   "TTT Master solution", 999999,
                                   $('.phil'),
                                   "./assets/phil.gif",
                                   "Get on my level..scrub.",
                                   $('#philtrack'));

var activeEnemyAvatarArray = [ezra, jim, onePunchPhil];




var showText = function (target, message, index, interval) {
  if (index < message.length) {
    $(target).append(message[index++]);
    setTimeout(function () { showText(target, message, index, interval); }, interval);
  }
}


$gaRing.on("click", function() {
  $gaRing.off();
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
      }, 1000);
    });
  }
}


function characterSelect() {
  console.log(" pick team deployed")
  if ($battlescreen.css('display') ==='block') {
    $('.character').on("click", function() {
      charchoose.play();
      console.log("pushed");
      activeAvatarsArray.push(avatarList[avatarSelectArray.indexOf($(this).attr('id'))]);
      console.log($(this).attr('id') + " added to team");
      $(this).off();
      $(this).css({background:'url("")'}, 600);
      $(this).children('.avatarRealized').fadeIn(600);
      queryConfirmTeam();
   });
  }
}

function queryConfirmTeam() {
  console.log("confirm Team deployed")
  if (activeAvatarsArray.length === 3) {
    $('.character').off().css({background:'url("")'}, 600);
    console.log("we've got a team: " + activeAvatarsArray[0].name + ", " + activeAvatarsArray[1].name + ", and " + activeAvatarsArray[2].name);
    activeAvatar = activeAvatarsArray[0];
    vsScreens();
  }
}

function vsScreens() {
  setTimeout(function() {
    $titleheader.fadeOut(500);
    $battlescreen.fadeOut(500);
    $('.avatarRealized').fadeOut(100);
    setTimeout(function() {
      $battlescreen.fadeIn(600);
      $battlescreen.animate({height: '60%'}, 100);
      $battlescreen.animate({top: '18%'}, 100);
      console.log("should be second")
      setTimeout(function() {
        vsscreenfx.play();
        $('.character').off().detach();
        activeAvatarsArray[0].picture.fadeIn(600);
        setTimeout(function() {
          vsscreenfx2.play();
          activeAvatarsArray[1].picture.fadeIn(600);
          setTimeout(function() {
            activeAvatarsArray[2].picture.fadeIn(600);
            setTimeout(function() {
              setTimeout(function() {
                enemyVsInitializer();
              });
            },3000);
          }, 700);
        }, 300);
      }, 300);
    }, 2000);
  }, 600);
}

function enemyVsInitializer() {
  setTimeout(function() {
    $loadinglines.text("VERSUS");
    var holdyourballsfordestruction = Math.floor(Math.random() * (3 - 0)) + 0;
    activeEnemyAvatar = activeEnemyAvatarArray[holdyourballsfordestruction];
    activeEnemyAvatar.picture.fadeIn(600);
    renderSwitchList();
    ezrafx.play();
    $('#song2').trigger('pause');
    activeEnemyAvatar.track.trigger('play');
    setTimeout(function() {
        $loadinglines.text('');

        transitionBattleInitiator();
    },2000)
  }, 100)
}

function transitionBattleInitiator() {
  setTimeout(function() {
    $battlescreen.children().fadeOut();
    setTimeout(function() {
      subRenderBattleScreen();
    },1000);
  }, 600);
}

function render() {
  $darkloading.fadeIn(400);
  $gaRing.fadeIn(800);
  $ga.fadeIn(800);
  $loadingRightChars.fadeIn(1000);
  $loadingLeftChars.fadeIn(1000);
  transitionCharSelect();
}

function renderOut() {
  $darkloading.fadeOut(400);
  $gaRing.fadeIn(800);
  $ga.fadeIn(800);
  $loadingRightChars.fadeIn(1000);
  $loadingLeftChars.fadeIn(1000);
  transitionCharSelect()
}










var $battleBoard = $('#battle_board');
var $fightTextBox = $('#fight');
var $famTextBox = $('#fam');
var $battleText = $('#battle_Text');
var $attack1Box = $('#attack1');
var $playerattackBoxArray = [$attack1Box];
var $playerImg = $('#player_img');
var $enemyImg = $('#enemy_img');
var $enemyNameLevel = $('#enemy_name_level');
var $playerNameLevel = $('#player_name_level');
var $playerHealth = $('#player_health_points');
var $enemyHealth = $('#enemy_health_points');
var $avatarListArray = $('#switchout').children();
var $attackTextBox = $('#attack_text_box');
var $switchPanel = $('#switchout');

//==============================================================================
/*RENDERS
=========*/

//Render to battle screen
function subRenderBattleScreen() {
  renderPlayerNameLevel();
  renderEnemyNameLevel();
  renderPlayerImg();
  renderEnemyImg();
  renderSwitchList();
  $darkloading.toggle();
  setTimeout(function() {
    $battleBoard.fadeIn(800);
  },1000);
  setTimeout(function() {
    $enemyNameLevel.animate({
    left: "toggle", },1000);
    $playerNameLevel.animate({
    right: "toggle", },1000);
  }, 1100);
  setTimeout(function() {
    $fightTextBox.fadeIn(1000);
    $switchPanel.fadeIn(600);
  },2000);
}

//Render active Avatar Attacks in Context to attack boxes. NEEDS TO HAPPEN ON EVENT SWITCH/AVATAR DEATH


//Render image
function renderPlayerImg() {
  $playerImg.attr("src",activeAvatar.avatar);
}

function renderEnemyImg() {
  $enemyImg.attr("src", activeEnemyAvatar.avatar);
}


//Render active Avatar name and level
function renderEnemyNameLevel() {
  $enemyNameLevel.text(activeEnemyAvatar.name + "         Lv." + activeEnemyAvatar.level)
                 .css({'color':'black', 'font-size': '25px',
                              'position': 'relative',
                              'float':'left',
                              'display':'none'
                            });
}
function renderPlayerNameLevel() {
  $playerNameLevel.text(activeAvatar.name + "         Lv." + activeAvatar.level)
                 .css({'color':'black', 'font-size': '25px',
                              'position': 'relative',
                              'float':'left',
                              'display':'none'
                            });
}

//Render switchList
function renderSwitchList() {
  for (i=0;i<3; i++) {
    if ($('#switchout').children().eq([i]).attr("src") ===  undefined) {
      $avatarListArray.eq([i]).pop()

    } else {
      $avatarListArray.eq([i]).attr("src",activeAvatarsArray[i].avatar);
    }
  };
}
//==============================================================================


//==============================================================================
/*EVENT LISTENERS
=================*/

//Clicking Fight brings up Attack box.
$fightTextBox.on("click", battleLogic);

//Clicking on Attack move in Attack box starts battle logic.

function update() {
  activeAvatarsArray.shift();
  console.log('spliced');
  activeAvatar= activeAvatarsArray[0];
  console.log('switched');
  renderPlayerImg();
  renderPlayerNameLevel();
}
//Clicking on Avatar should start switchout.
function theSwitch() {
  update();
  setTimeout(function() {
    $playerNameLevel.stop(600).fadeOut(600);
    $playerImg.stop(600).fadeOut(600);
    $('#player_info').stop(600).fadeOut(600);
    $playerHealth.fadeOut(600);
  }, 1100);
  setTimeout(function() {
    $battleText.css({'color':'white', 'font-size': '35px',
                            'position': 'relative',
                            'float':'left',
                            'display':'none'
                          });
    $battleText.text(activeAvatar.name + " takes the lead. ");
    $battleText.fadeIn(600);
  },2100);
  setTimeout(function() {
    $("#player_info").fadeIn(600);
    $playerNameLevel.animate({right: "toggle", },1000);
    $playerImg.toggle(600);
    $playerHealth.fadeIn(600);
    $playerHealth.animate({width: "162"}, 600);
    $battleText.fadeOut(600);
  }, 3800);
  setTimeout(function() {
    $fightTextBox.fadeIn(1000);
  },4300);
};



//==============================================================================
//==============================================================================


//CHECK USABLE AVATAR

//usabiity
//player move win function
function winRewards() {
   if (activeEnemyAvatar.currenthealth === 0) {
    setTimeout(function() {
      $enemyImg.fadeOut(600);
      console.log("enemy dead");
    }, 400);
    setTimeout(function() {
       $battleText.css({'color':'white', 'font-size': '35px',
                              'position': 'relative',
                              'float':'left',
                              'display':'none'
                            });
      $battleText.text("Beast Mode breh.");
      $battleText.fadeIn(400);
    }, 1000);
    setTimeout(function() {
      $battleText.css({'color':'white', 'font-size': '35px',
                              'position': 'relative',
                              'float':'left',
                              'display':'none'
                            });
      $battleText.text("You got 500 exp, and 4000 bitcoins.");
      $battleText.fadeIn(400);
    }, 2500);
    setTimeout(function() {
      $battleText.fadeOut(400);
      renderOut();
    }, 5500);
  }
}

//player out of usable avatars
function losePunishments() {
  console.log("losepunish");
    console.log("8");
    setTimeout(function() {
      $playerImg.fadeOut(600);
      console.log("You ran out of swag.");
    }, 400);
    setTimeout(function() {
       $battleText.css({'color':'white', 'font-size': '35px',
                              'position': 'relative',
                              'float':'left',
                              'display':'none'
                            });
      $battleText.text("Your crew got wrecked.");
      $battleText.fadeIn(400);
    }, 1000);
    setTimeout(function() {
      $battleText.css({'color':'white', 'font-size': '35px',
                              'position': 'relative',
                              'float':'left',
                              'display':'none'
                            });
      $battleText.text("Like real hard...Deuces.");
      $battleText.fadeIn(400);
    }, 2500);
    setTimeout(function() {
      $battleText.fadeOut(400);
      render();
    }, 5500);
}

//enemy return attack fnc
function enemyReturnAttack() {
  if (activeEnemyAvatar.currenthealth !== 0) {
    var holdyourballsfordestruction = Math.floor(Math.random() * (2 - 0)) + 0;
    setTimeout(function() {
      $battleText.css({'color':'white', 'font-size': '35px',
                              'position': 'relative',
                              'float':'left',
                              'display':'none'
                            });
      $battleText.text(activeEnemyAvatar.name + " used "+ activeEnemyAvatar.attackNames[holdyourballsfordestruction]);
      $battleText.fadeIn(400);
      setTimeout(function() {
        $enemyImg.animate({right: "100"});
        $enemyImg.animate({right: "250"});
        setTimeout(function() {
          $playerImg.animate({left: "170"}, 50);
          $playerImg.animate({left: "190"}, 50);
          setTimeout(function() {
            activeEnemyAvatar.battle(activeEnemyAvatar.attackPowers[holdyourballsfordestruction]);
            var $queryNewPlayerWidth = activeAvatar.currenthealth/(activeAvatar.currenthealth + activeEnemyAvatar.attackPowers[holdyourballsfordestruction]);
            $playerHealth.animate({width: $playerHealth.width()*$queryNewPlayerWidth}, 1000);
                setTimeout(function() {
                  if (activeAvatar.currenthealth === 0 && activeAvatarsArray.length < 1) {
                    losePunishments();
                  } else if (activeAvatar.currenthealth === 0 && activeAvatarsArray.length >= 1) {
                    switchOut();
                  } else {
                    returnTopFight();
                  }
                }, 200);
              },200);
        },600);
      }, 600);
    },600);
  }
}

//switchout function after active avatar has died
function switchOut() {
  console.log(" switch out");
      setTimeout(function() {
      $playerImg.fadeOut(1500);
      $battleText.fadeOut(1000);
      setTimeout(function() {
        $battleText.css({'color':'white', 'font-size': '35px',
                                'position': 'relative',
                                'float':'left',
                                'display':'none'
                              });
        $battleText.text(activeAvatar.name + " got decked, but you still got Fam");
        $battleText.fadeIn(400);
        setTimeout(function() {
          theSwitch();
        }, 3500);
      }, 2500);
    }, 400);
}


//Successful volley, return to main battle options.
function returnTopFight() {
  console.log("returning");
  if (activeAvatar.currenthealth > 0) {
    setTimeout(function() {
      $battleText.fadeOut(400);
      $fightTextBox.fadeIn(1000);
    },2500);
  }
}

//PLAYER FIGHT FNC.

function battleLogic() {
    setTimeout(function() {
      $battleText.css({'color':'white', 'font-size': '35px',
                              'position': 'relative',
                              'float':'left',
                              'display':'none'
                            });
      $fightTextBox.fadeOut(600);
      $famTextBox.fadeOut(600);
      $battleText.text(activeAvatar.name + " used "+ activeAvatar.attackName);
      $battleText.fadeIn(600);
    },600);
    setTimeout(function() {
      $playerImg.animate({left: "300"});
      $playerImg.animate({left: "190"});
    }, 1000);
    setTimeout(function() {
      $enemyImg.animate({right: "270"}, 50);
      $enemyImg.animate({right: "250"}, 50);
    }, 2000);
    activeAvatar.battle();
    setTimeout(function() {
      var $queryNewWidth = activeEnemyAvatar.currenthealth/(activeEnemyAvatar.currenthealth + activeAvatar.attackPower);
      console.log($queryNewWidth);
      $enemyHealth.animate({width: $enemyHealth.width()*$queryNewWidth});
    }, 2400);
    setTimeout(function() {
      winRewards();
      enemyReturnAttack();
    },3400);
  }



