console.log("POKEBALLS READY");

//GLOBAL VARIABLES
  //Jquery Vars

  //Avatar Properties
    var Avatar = function(name, level, health, attack1, power1, attack2, power2, attack3, power3, attack4, power4) {
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
        activeEnemyAvatar.currenthealth -= power;
      }
    };

    var pikaFreakingChu = new Avatar("pika FRICKIN CHU", 46,  1000,
                                     "Thunder", 100,
                                     "ThunderBolt", 200,
                                     "iron tail", 500,
                                     "Electroball", 10000);

    var dragonite = new Avatar("Ob Jecht", 78,  10000,
                               "Lost in Braces", 40000);

    var avatarList = [pikaFreakingChu, dragonite];
    var activeAvatar = avatarList[0];

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
        activeAvatar.currenthealth -= power;
      }
    };

    var onePunchPhil = new enemyAvatar("One Punch Phil",999, 100000,
                                       "one-punch", activeAvatar.currenthealth,
                                       "mercy-punch", activeAvatar.currenthealth-1,
                                       "Jargon Jargon", 800,
                                       "Simple Math", 300,
                                       "huehue...weakling....");

    var activeEnemyAvatar = onePunchPhil;
    var usableAvatarList = avatarList;       //needs to grab whoever.


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


//Render active Avatar Attacks in Context to attack boxes. NEEDS TO HAPPEN ON EVENT SWITCH/AVATAR DEATH.
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

//Render active Avatar name and level
var renderAvatarsNameLevel = function() {
  $enemyNameLevel.text(activeEnemyAvatar.name + "         Lv." + activeEnemyAvatar.level)
                 .css({'color':'black', 'font-size': '25px',
                              'position': 'relative',
                              'float':'left',
                              'display':'none'
                            });
  $playerNameLevel.text(activeAvatar.name + "         Lv." + activeAvatar.level)
                 .css({'color':'black', 'font-size': '25px',
                              'position': 'relative',
                              'float':'left',
                              'display':'none'
                            });
}

//Clicking Fight brings up attack box.
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



//THE MASTER ATK FNC.
/*var masterAttackFNC = function() {*/

//ENEMY ATTACK FNC
var enemyAttack = function() {
  var holdyourballsfordestruction = Math.floor(Math.random() * (4 - 0)) + 0;
  console.log(holdyourballsfordestruction);
  setTimeout(function() {
      $battleText.css({'color':'black', 'font-size': '35px',
                              'position': 'relative',
                              'float':'left',
                              'display':'none'
                            });
      $battleText.text(activeEnemyAvatar.name + " used "+ activeEnemyAvatar.attackNames[holdyourballsfordestruction]);
      $battleText.fadeIn(400);
      console.log("1")
    },3000);
    setTimeout(function() {
      $enemyImg.animate({right: "180"});
      $enemyImg.animate({right: "140"});
      console.log("2")
    }, 3400);
    setTimeout(function() {
      $playerImg.animate({left: "60"});
      $playerImg.animate({left: "110"});
      console.log("3")
    }, 4400);
    activeEnemyAvatar.battle(activeEnemyAvatar.attackPowers[holdyourballsfordestruction]);
    setTimeout(function() {
      var $queryNewWidth = activeAvatar.currenthealth/(activeEnemyAvatar.currenthealth + activeEnemyAvatar.attackPowers[holdyourballsfordestruction]);
      console.log($queryNewWidth);
      $playerHealth.animate({width: $playerHealth.width()*$queryNewWidth});
      console.log("4")
    }, 5400);
};


//PLAYER FIGHT FNC.
for (i=0;i<4;i++) {
  $playerattackBoxArray[i].on("click", function() {
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
      $playerImg.animate({left: "60"});
      $playerImg.animate({left: "110"});
    }, 1000);
    setTimeout(function() {
      $enemyImg.animate({right: "180"});
      $enemyImg.animate({right: "140"});
    }, 2000);
    activeAvatar.battle(activeAvatar.attackPowers[activeAvatar.attackNames.indexOf($(this).text())]);
    setTimeout(function() {
      var $queryNewWidth = activeEnemyAvatar.currenthealth/(activeEnemyAvatar.currenthealth + $queryPower);
      console.log($queryNewWidth);
      $enemyHealth.animate({width: $enemyHealth.width()*$queryNewWidth});
    }, 2400);
    /*setTimeout(function() {
      $battleText.fadeOut(600);
      $battleText.text()//placeholder for attack effectiveness);
      $battleText.fadeIn(600);
    }, 3400);*/
    console.log(activeAvatar);
    console.log(activeEnemyAvatar);
    var holdyourballsfordestruction = Math.floor(Math.random() * (4 - 0)) + 0;
    setTimeout(function() {
      $battleText.css({'color':'black', 'font-size': '35px',
                              'position': 'relative',
                              'float':'left',
                              'display':'none'
                            });
      $battleText.text(activeEnemyAvatar.name + " used "+ activeEnemyAvatar.attackNames[holdyourballsfordestruction]);
      $battleText.fadeIn(400);
      console.log("1")
      console.log(holdyourballsfordestruction);
    },3000);
    setTimeout(function() {
      $enemyImg.animate({right: "180"});
      $enemyImg.animate({right: "140"});
      console.log("2")
    }, 3400);
    setTimeout(function() {
      $playerImg.animate({left: "60"});
      $playerImg.animate({left: "110"});
      console.log("3")
    }, 4400);
    activeEnemyAvatar.battle(activeEnemyAvatar.attackPowers[holdyourballsfordestruction]);
    console.log(activeEnemyAvatar.attackPowers[holdyourballsfordestruction]);
    setTimeout(function() {
      var $queryNewPlayerWidth = activeAvatar.currenthealth/(activeAvatar.currenthealth + activeEnemyAvatar.attackPowers[holdyourballsfordestruction]);
      console.log($queryNewPlayerWidth);
      console.log(activeEnemyAvatar.currenthealth + activeEnemyAvatar.attackPowers[holdyourballsfordestruction]);
      $playerHealth.animate({width: $playerHealth.width()*$queryNewPlayerWidth}, 1000);
      console.log("4")
      console.log(activeAvatar);
      console.log(activeEnemyAvatar);
    }, 5400);
  });
};


      //b. "declares attack in text"

      //c. "attack animation"

      //d. "response animation"

      //e. "health bar goes down"

      //f. "attack effectiveness/oneliner in text"
var somefunc = function() {
      //g1. enemy's turn fnc (uses while hp>0, else...)
      if (activeEnemyAvatar.currenthealth > 0) {
        enemyAttack(activeEnemyAvatar, activeAvatar);
      } else {
        //endbattle fnc.
        console.log('you win!');                        //END BATTLE REWARDS, LOADING SCREEN, WORLD SCREEN
      }
    };
    var updateUsableAvatar = function() {                    //NEEDS TO RUN WITH COFFEE Avatar CENTER.
      for (i=0; i<usableAvatarList.length; i++) {
        if (usableAvatarList[i].currenthealth <= 0) {
          usableAvatarList.splice(usableAvatarList[i], 1);
        }
      }
    };

    var enemyAttack = function() {                      //LEAVE IT LIKE THIS BECAUSE OTHERWISE RUNS LOOP.
      activeEnemyAvatar.battle(activeAvatar);

      updateUsableAvatar();
      if (usableAvatarList[0] == undefined) {
        console.log("Your fam blacked out.");
        console.log('leaving battle....');
        console.log(".........." + activeEnemyAvatar.oneLiner);   //END BATTLE PUNISHMENTS, LOADING SCREEN, WORLD SCREEN/STORY LOADING FOR WAKING UP FROM DYING.);
      } else if (activeAvatar.currenthealth <= 0) {
        var switchPrompt = prompt("Do you want to switch out?");  // NEEDS TO TURN TO TEXT ASKING SWITCH. AND YES OR NO KEYUP OR DOWN + ENTER.
        if (switchPrompt = "yes") {
          switchList();
        } else {
        console.log("You gave up.");
        console.log("....." + activeEnemyAvatar.oneLiner);
        }
      }
    };
  //II. item menu chosen (takes a turn): NEEDS FUNCTION

    var useItem = function(a) {
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
    };



  //III. switch menu chosen (takes a turn)
    //a. open switch menu
    //b. click on friend
    //c. alert are you sure
    //d. closes switch menu
    //e. make switched friend activeplayer
    //f. declare switching from to in text
    //g. switching animation, resizing active to small, keith to big
    //h. keith one-liner
    //i. enemy turn fnc (uses while hp>0)

var subRenderBattleScreen = function() {
  renderActiveAttacks();
  renderAvatarsNameLevel();
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

var subRenderWorldScreen = function() {
    $battleBoard.fadeOut(1000);
    setTimeout(function() {
      $worldMap.fadeIn(800);
    },1000);
};







