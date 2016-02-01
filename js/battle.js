console.log("POKEBALLS READY");

//GLOBAL VARIABLES
  //Avatar Properties
    var Avatar = function(name, health, attackName, power) {
      this.name = name;
      this.maxhealth = health;
      this.currenthealth = health;
      this.attackName = attackName;
      this.power = power;
      this.battle = function(enemy) {
        console.log(this.name + " attacks with " + this.attackName + ", which does " + this.power + " damage.");
        console.log(enemy.name + " was dealt " + this.power + "damage.");
        enemy.currenthealth -= this.power;
        console.log(enemy.name + " has " + enemy.currenthealth + " health left.");
      }
    };

    var enemyAvatar = function(name, health, attackName1, attackName2, oneLiner) {
      this.name = name;
      this.maxhealth = health;
      this.currenthealth = health;
      this.attackName1 = attackName1;
      this.attackName2 = attackName2;
      this.oneLiner = oneLiner;
      this.battle = function(enemy) {
        if ((Math.floor(Math.random() * (2 - 0)) + 0) === 0) {
          console.log(this.name + " attacks with " + this.attackName1 + ".");
          console.log(enemy.name + " was dealt " + enemy.currenthealth + " damage");
          enemy.currenthealth -= enemy.currenthealth;
          console.log(enemy.name + " has " + enemy.currenthealth + " health left.");
        } else {
          console.log(this.name + " attacks with " + this.attackName2 + ".");
          if (enemy.currenthealth === 1) {
            console.log("The attack failed!");
          } else {
           console.log(enemy.name + " was dealt " + (enemy.currenthealth -1) + " damage.");
           enemy.currenthealth -= enemy.currenthealth -1;
           console.log(enemy.name + " has " + enemy.currenthealth + " health left.");
          }
        }
      }
    }

    var pikaFreakingChu = new Avatar("pika FRICKIN CHU", 1000, "Thunder", 100);

    var dragonite = new Avatar("big fucking dragon", 10000, "Fus Roh Dah", 4000);

    var onePunchPhil = new enemyAvatar("One Punch Phil", 100000, "one-punch", "mercy-punch", "huehue...weakling....");

    var avatarList = [pikaFreakingChu, dragonite];
    var activeAvatar = avatarList[0]; //needs to grab whoever.
    var activeEnemyAvatar = onePunchPhil;
    var usableAvatarList = avatarList;

     //needs to grab whoever.


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

//BATTLE SCREEN FUNCTIONS
  var battle = function() {
      console.log("A wild " + activeEnemyAvatar.name + " has appeared!");
      console.log(avatarList[0].name + " is up!");
  };

  //1. tick-based, animations running, waiting for user response

  //I. Player Turn Function
    var attack = function() {       // NEEDS EVENT LISTENER ON ATTACK NAME'S CLICK
      //a. damage calculation fnc
      activeAvatar.battle(activeEnemyAvatar);
      //b. "declares attack in text"

      //c. "attack animation"

      //d. "response animation"

      //e. "health bar goes down"

      //f. "attack effectiveness/oneliner in text"

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
      if (activeAvatar.currenthealth <= 0 && usableAvatarList != []) {   //THIS LOGIC NEEDS TO HASH OUT.
        var switchPrompt = prompt("Do you want to switch out?");  // NEEDS TO TURN TO TEXT ASKING SWITCH. AND YES OR NO KEYUP OR DOWN + ENTER.
        if (switchPrompt = "yes") {
          switchOut();
        } else {
          console.log('leaving battle....');
          console.log(activeEnemyAvatar.oneLiner);               //END BATTLE PUNISHMENTS, LOADING SCREEN, WORLD SCREEN/STORY LOADING FOR WAKING UP FROM DYING.);
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

  var switchOut = function() {                                                        //NEEDS TO TURN TO CLICK EVENT ON Avatar UL LIST.
      for (i=0; i <usableAvatarList.length; i++) {                                         //THIS NEEDS TO CHANGE TO UNSELECTABLE PANEL FOR FAINTED Avatar.
        var selectSwitchAvatar = prompt("Switch to " + usableAvatarList[i].name + "?");  //NEEDS TEXT ASKING FOR SWITCH CONFIRM TO VIABLE Avatar.
        if (selectSwitchAvatar = "yes") {
          activeAvatar = usableAvatarList[i];
          console.log('Go!' + activeAvatar.name + "!");
          break;
        } else {
          console.log('leaving battle....');
          console.log(activeEnemyAvatar.oneLiner);
        }
      }
  };


  //2. Enemy turn fnc:
    //I. attack (random if more than one attack)

      //a. damage calculation fnc
      //b. "declares attack in text"
      //c. "attack animation"
      //d. "response animation"
      //e. "health bar reacts"
      //f. "attack effectiveness/oneliner in text"
      //g1. player turn fnc. (uses while hp > 0, else...)
      //g2. end battle fnc.

    //II.










