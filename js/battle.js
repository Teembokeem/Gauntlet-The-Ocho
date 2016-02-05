console.log("POKEBALLS READY");








//GLOBAL VARIABLES
  //Jquery Vars

  //Avatar Properties
    var Avatar = function(name, level, health, attack1, power1, attack2, power2, attack3, power3, attack4, power4, picture) {
      this.name = name;
      this.level = level;
      this.maxhealth = health;
      this.currenthealth = health;
      this.attackNames = [
        attack1, attack2, attack3, attack4
      ];
      this.attackPowers = [
        power1, power2, power3, power4
      ];
      this.battle = function(power) {
        if (power > activeEnemyAvatar.currenthealth) {
          activeEnemyAvatar.currenthealth = 0;
        } else {
          activeEnemyAvatar.currenthealth -= power;
        }
      };
      this.picture = picture;
    };

    var pikaFreakingChu = new Avatar("pika FRICKIN CHU", 46,  500,
                                     "Thunder", 100,
                                     "ThunderBolt", 200,
                                     "iron tail", 500,
                                     "Electroball", 10000,
                                     "./assets/stockMale.gif");

    var dragonite = new Avatar("Ob Jecht", 78,  10000,
                               "Lost in Braces", 40000,
                               "filler", 432432,
                               "filler", 11112,
                               "faller", 98799,
                               "./assets/obJecht.png");

    var avatarList = [pikaFreakingChu, dragonite];
    var activeAvatar = avatarList[0];
    var usableAvatarList = avatarList;

    var enemyAvatar = function(name, level, health, attack1, power1, attack2, power2, attack3, power3, attack4, power4, oneLiner) {
      this.name = name;
      this.level = level;
      this.maxhealth = health;
      this.currenthealth = health;
      this.attackNames = [
        attack1, attack2, attack3, attack4
      ];
      this.attackPowers = [
        power1, power2, power3, power4
      ];
      this.oneLiner = oneLiner;
      this.battle = function(power) {
        if (power > activeAvatar.currenthealth) {
          activeAvatar.currenthealth = 0;
        } else {
        activeAvatar.currenthealth -= power;
        }
      };
  };

    var onePunchPhil = new enemyAvatar("One Punch Phil",999, 10000,
                                       "one-punch", 500,
                                       "mercy-punch", 500,//activeAvatar.currenthealth-1,
                                       "Jargon Jargon", 500,
                                       "Simple Math", 500,
                                       "huehue...weakling....");

    var activeEnemyAvatar = onePunchPhil;     //needs to grab whoever.


  //Item Properties
    var  StatItem = function(name, multiplier, target) {
      this.name = name;
      this.multiplier = multiplier;
      this.description = "increased your " + target + " stat";
      this.effect = function() {
        activeAvatar.power *= multiplier;
      };
    };

    var attackUp = new StatItem("roids", 1.5, "attack");

    var Potion = function(name, power, target) {
      this.name = name;
      this.power = power;
      this.description = "Healed your " + target;
      this.effect = function(user) {
        user.currenthealth += this.power;
      };
    };

    var regularPotion = new Potion("regular potion", 100, "health");

    var itemList = [regularPotion, attackUp];


                                //==============\\
                                //FIGHT FUNCTION\\
                                //==============\\
//after rendering battle scene.

var $worldMap = $('#world_map');
var $battleBoard = $('#battle_board');
var $loadingScreen = $('#loading_Screen');
var $fightTextBox = $('#fight');
var $itemTextBox = $('#item');
var $famTextBox = $('#fam');
var $boneOutTextBox = $('#bone_Out');
var $battleText = $('#battle_Text');
var $attack1Box = $('#attack1');
var $attack2Box = $('#attack2');
var $attack3Box = $('#attack3');
var $attack4Box = $('#attack4');
var $playerattackBoxArray = [$attack1Box, $attack2Box, $attack3Box, $attack4Box];
var $playerImg = $('#player_img');
var $enemyImg = $('#enemy_img');
var $enemyNameLevel = $('#enemy_name_level');
var $playerNameLevel = $('#player_name_level');
var $playerHealth = $('#player_health_points');
var $enemyHealth = $('#enemy_health_points');
var $avatarSwitchPanel = $('#switchout');
var $avatarListArray = $(".avatarlist");




//==============================================================================
/*RENDERS
=========*/

//Render back to world screen
var subRenderWorldScreen = function() {
    $battleBoard.fadeOut(1000);
    setTimeout(function() {
      $worldMap.fadeIn(800);
    },1000);
};
//Render to battle screen
var subRenderBattleScreen = function() {
  renderActiveAttacks();
  renderPlayerNameLevel();
  renderEnemyNameLevel();
  renderPlayerImg();
  renderSwitchList();
  $worldMap.fadeOut(1000);
  setTimeout(function() {
    $battleBoard.toggle(800);
    $battleBoard.fadeIn(800);
  },1000);
  setTimeout(function() {
    $( "#enemy_info" ).animate({
    left: "+=150", },1000);
    $( "#player_info" ).animate({
    right: "+=150", },1000);
  }, 1100);
  setTimeout(function() {
    $enemyNameLevel.animate({
    left: "toggle", },1000);
    $playerNameLevel.animate({
    right: "toggle", },1000);
  }, 1100);
  setTimeout(function() {
    $fightTextBox.fadeIn(1000);
    $itemTextBox.fadeIn(1600);
    $famTextBox.fadeIn(2200);
    $boneOutTextBox.fadeIn(2400);
  },2000);
};

//Render active Avatar Attacks in Context to attack boxes. NEEDS TO HAPPEN ON EVENT SWITCH/AVATAR DEATH
var renderActiveAttacks = function() {
  for(i=0;i<4;i++) {
    $playerattackBoxArray[i].text(activeAvatar.attackNames[i])
                      .css({'color':'white', 'font-size': '35px',
                            'position': 'relative',
                            'display': 'none',
                            'float':'left'
                          });
  };
};

//Render image
var renderPlayerImg = function() {
  $playerImg.attr("src",activeAvatar.picture);
}
//Render active Avatar name and level
var renderEnemyNameLevel = function() {
  $enemyNameLevel.text(activeEnemyAvatar.name + "         Lv." + activeEnemyAvatar.level)
                 .css({'color':'black', 'font-size': '25px',
                              'position': 'relative',
                              'float':'left',
                              'display':'none'
                            });
}
var renderPlayerNameLevel =function() {
  $playerNameLevel.text(activeAvatar.name + "         Lv." + activeAvatar.level)
                 .css({'color':'black', 'font-size': '25px',
                              'position': 'relative',
                              'float':'left',
                              'display':'none'
                            });
}

//Render switchList
var renderSwitchList = function() {
  for (i=0;i<usableAvatarList.length; i++) {
    $avatarListArray.eq([i]).attr("src",usableAvatarList[i].picture);
  };
}
//==============================================================================


//==============================================================================
/*EVENT LISTENERS
=================*/

//Clicking Fight brings up Attack box.
$fightTextBox.on("click", function() {
  $fightTextBox.fadeOut(200);
  $itemTextBox.fadeOut(300);
  $famTextBox.fadeOut(400);
  $boneOutTextBox.fadeOut(500);
  setTimeout(function() {
    $attack1Box.fadeIn(300);
    $attack2Box.fadeIn(400);
    $attack3Box.fadeIn(500);
    $attack4Box.fadeIn(600);
  }, 1000);
});

//Clicking on Attack move in Attack box starts battle logic.
for (var i=0;i<4;i++) {
  $playerattackBoxArray[i].on("click", battleLogic);
};

//Clicking on Avatar should start switchout.
for(var i=0;i<usableAvatarList.length;i++) {
  $avatarListArray.eq([i]).on("click", function() {
  var $srcLink = $(this).attr('src');
  activeAvatar = usableAvatarList[usableAvatarList.indexOf($srcLink)];
  renderActiveAttacks();
  renderPlayerImg();
  renderPlayerNameLevel();
  setTimeout(function() {
    $playerNameLevel.stop(600).fadeOut(600);
    $playerImg.stop(600).fadeOut(600);
    $('player_info').stop(600).fadeOut(600);
    $avatarSwitchPanel.fadeOut(600);
    $avatarListArray.fadeOut(600);
    $playerHealth.fadeOut(600);
  }, 1100);
  setTimeout(function() {
    $('#enemy_info').css({'opacity': '1'});
    $('#player_info').css({'opacity': '1'});
    $battleText.css({'color':'black', 'font-size': '35px',
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
    $itemTextBox.fadeIn(1600);
    $famTextBox.fadeIn(2200);
    $boneOutTextBox.fadeIn(2400);
    updateUsableAvatar();
    renderSwitchList();
  },4300);
  });
};

//famTextBox Click.
$famTextBox.on("click", function() {
  $fightTextBox.fadeOut(200);
  $itemTextBox.fadeOut(300);
  $famTextBox.fadeOut(400);
  $boneOutTextBox.fadeOut(500);
  setTimeout(function() {
    $battleText.css({'color':'black', 'font-size': '35px',
                            'position': 'relative',
                            'float':'left',
                            'display':'none'
                          });
    $battleText.text(" Bae wants to throw it down. Hype.");
    $battleText.fadeIn(400);
  }, 2500);
  setTimeout(function() {
    $('#enemy_info').css({'opacity': '0.7'});
    $('#player_info').css({'opacity': '0.7'});
    $avatarSwitchPanel.fadeIn(600)
    $avatarListArray.fadeIn(600)
  }, 3500);
});

//==============================================================================
//==============================================================================

//THE MASTER ATK FNC.

//CHECK USABLE AVATAR
function updateUsableAvatar() {                    //NEEDS TO RUN WITH COFFEE Avatar CENTER.
  for (i=0; i<usableAvatarList.length; i++) {
    if (usableAvatarList[i].currenthealth <= 0) {
      usableAvatarList.splice(usableAvatarList[i], 1);
    }
  }
}

//usabiity
//player move win function
function winRewards() {
   if (activeEnemyAvatar.currenthealth === 0) {
    setTimeout(function() {
      $enemyImg.fadeOut(600);
      console.log("enemy dead");
    }, 400);
    setTimeout(function() {
       $battleText.css({'color':'black', 'font-size': '35px',
                              'position': 'relative',
                              'float':'left',
                              'display':'none'
                            });
      $battleText.text("Beast Mode breh.");
      $battleText.fadeIn(400);
    }, 1000);
    setTimeout(function() {
      $battleText.css({'color':'black', 'font-size': '35px',
                              'position': 'relative',
                              'float':'left',
                              'display':'none'
                            });
      $battleText.text("You got 500 exp, and 4000 bitcoins.");
      $battleText.fadeIn(400);
    }, 2500);
    setTimeout(function() {
      $battleText.fadeOut(400);
      subRenderWorldScreen();
    }, 5500);
  }
}

//player out of usable avatars
function losePunishments() {
  if (activeAvatar.currenthealth === 0 && usableAvatarList.length < 1) {
    console.log("8");
    setTimeout(function() {
      $playerImg.fadeOut(600);
      console.log("You ran out of swag.");
    }, 400);
    setTimeout(function() {
       $battleText.css({'color':'black', 'font-size': '35px',
                              'position': 'relative',
                              'float':'left',
                              'display':'none'
                            });
      $battleText.text("Your crew got wrecked.");
      $battleText.fadeIn(400);
    }, 1000);
    setTimeout(function() {
      $battleText.css({'color':'black', 'font-size': '35px',
                              'position': 'relative',
                              'float':'left',
                              'display':'none'
                            });
      $battleText.text("Like real hard...Deuces.");
      $battleText.fadeIn(400);
    }, 2500);
    setTimeout(function() {
      $battleText.fadeOut(400);
      subRenderWorldScreen();
    }, 5500);
  }
}

//enemy return attack fnc
function enemyReturnAttack() {
  if (activeEnemyAvatar.currenthealth !== 0) {
    var holdyourballsfordestruction = Math.floor(Math.random() * (4 - 0)) + 0;
    setTimeout(function() {
      $battleText.css({'color':'black', 'font-size': '35px',
                              'position': 'relative',
                              'float':'left',
                              'display':'none'
                            });
      $battleText.text(activeEnemyAvatar.name + " used "+ activeEnemyAvatar.attackNames[holdyourballsfordestruction]);
      $battleText.fadeIn(400);
      console.log("1");
      console.log(holdyourballsfordestruction);
    },600);
    setTimeout(function() {
      $enemyImg.animate({right: "170"});
      $enemyImg.animate({right: "140"});
      console.log("2");
    }, 1000);
    setTimeout(function() {
      $playerImg.animate({left: "100"});
      $playerImg.animate({left: "110"});
      console.log("3");
    }, 2000);
    setTimeout(function() {
      activeEnemyAvatar.battle(activeEnemyAvatar.attackPowers[holdyourballsfordestruction]);
      console.log(activeEnemyAvatar.attackPowers[holdyourballsfordestruction]);
      var $queryNewPlayerWidth = activeAvatar.currenthealth/(activeAvatar.currenthealth + activeEnemyAvatar.attackPowers[holdyourballsfordestruction]);
      console.log($queryNewPlayerWidth);
      console.log(activeAvatar.currenthealth + activeEnemyAvatar.attackPowers[holdyourballsfordestruction]);
      $playerHealth.animate({width: $playerHealth.width()*$queryNewPlayerWidth}, 1000);
      console.log("4");
      console.log(activeAvatar);
      console.log(activeEnemyAvatar);
      updateUsableAvatar();
      renderSwitchList();
    }, 3000);
  }
}

//switchout function after active avatar has died
function switchOut() {
  if (activeAvatar.currenthealth === 0 && usableAvatarList.length >= 1) {
    console.log("7");
    setTimeout(function() {
      $playerImg.fadeOut(1500);
      $battleText.fadeOut(1000);
    }, 400);
    setTimeout(function() {
      $battleText.css({'color':'black', 'font-size': '35px',
                              'position': 'relative',
                              'float':'left',
                              'display':'none'
                            });
      $battleText.text(activeAvatar.name + " got decked, but you still got Fam");
      $battleText.fadeIn(400);
    }, 2500);
    setTimeout(function() {
      $('#enemy_info').css({'opacity': '0.7'});
      $('#player_info').css({'opacity': '0.7'});
      $avatarSwitchPanel.fadeIn(600)
      $avatarListArray.fadeIn(600)
    }, 3500);
  }
}

//Actual Switch


//Successful volley, return to main battle options.
function returnTopFight() {
  if (activeAvatar.currenthealth > 0) {
    console.log("9");
    setTimeout(function() {
      $battleText.fadeOut(400);
      $fightTextBox.fadeIn(1000);
      $itemTextBox.fadeIn(1600);
      $famTextBox.fadeIn(2200);
      $boneOutTextBox.fadeIn(2400);
    },2500);
  }
}

//PLAYER FIGHT FNC.

function battleLogic() {
    var $queryAttack = $(this).text();
    var $queryPower = activeAvatar.attackPowers[activeAvatar.attackNames.indexOf($(this).text())];
    console.log($queryPower);
    $attack1Box.fadeOut(200);
    $attack2Box.fadeOut(300);
    $attack3Box.fadeOut(400);
    $attack4Box.fadeOut(500);
    setTimeout(function() {
      $battleText.css({'color':'black', 'font-size': '35px',
                              'position': 'relative',
                              'float':'left',
                              'display':'none'
                            });
      $battleText.text(activeAvatar.name + " used "+ $queryAttack);
      $battleText.fadeIn(600);
    },600);
    setTimeout(function() {
      $playerImg.animate({left: "80"});
      $playerImg.animate({left: "110"});
    }, 1000);
    setTimeout(function() {
      $enemyImg.animate({right: "130"});
      $enemyImg.animate({right: "140"});
    }, 2000);
    activeAvatar.battle(activeAvatar.attackPowers[activeAvatar.attackNames.indexOf($(this).text())]);
    setTimeout(function() {
      var $queryNewWidth = activeEnemyAvatar.currenthealth/(activeEnemyAvatar.currenthealth + $queryPower);
      console.log($queryNewWidth);
      $enemyHealth.animate({width: $enemyHealth.width()*$queryNewWidth});
    }, 2400);
    setTimeout(function() {
      winRewards();
      enemyReturnAttack();
    },3400);
    setTimeout(function() {
      switchOut();
      losePunishments();
      returnTopFight();
    }, 7000);
};





  //II. item menu chosen (takes a turn): NEEDS FUNCTION

    /*var useItem = function(a) {
      //a. item menu pops up

      //b. click on item.

      //c. close item menu

      //d. item effect calc fnc
      itemList[a].effect(activeAvatar);
      //e. "declare item use"
      console.log(activeAvatar.name + " used " + itemList.name);
      //f. "item use animation"
      //g. "item effect animation/health bar/status icon"
      //h. item effectiveness in text
      console.log(itemList.name + " " + this.description + itemList.power + " health. Sitting at " + activeAvatar.currenthealth + " health.");
      //i. enemy turn fnc(uses while hp>0)
    };*/





