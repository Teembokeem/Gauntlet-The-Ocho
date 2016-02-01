console.log("POKEBALLS READY");

//GLOBAL VARIABLES
  //Mon Properties
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

    var enemyAvatar = function(name, health, attackName1, attackName2) {
      this.name = name;
      this.maxhealth = health;
      this.currenthealth = health;
      this.attackName1 = attackName1;
      this.attackName2 = attackName2;
      this.battle = function(enemy) {
        if ((Math.floor(Math.random() * (2 - 0)) + 0) === 0) {
          console.log(this.name + " attacks with " + this.attackName1 + ", which did " + enemy.currenthealth + " damage.");
          console.log(enemy.name + " was dealt " + enemy.currenthealth + " damage");
          enemy.currenthealth -= enemy.currenthealth;
          console.log(enemy.name + " has " + enemy.currenthealth + " health left.");
        } else {
          console.log(this.name + " attacks with " + this.attackName2 + ", which did " + (enemy.currenthealth -1) + " damage.");
          console.log(enemy.name + " was dealt " + (enemy.currenthealth -1) + " damage.");
          enemy.currenthealth -= enemy.currenthealth -1;
          console.log(enemy.name + " has " + enemy.currenthealth + " health left.");
        }
      }
    };

    var pikaFreakingChu = new Avatar("pika FRICKIN CHU", 1000, "Thunder", 100);

    var dragonite = new Avatar("big fucking dragon", 10000, "Fus Roh Dah", 4000);

    var onePunchPhil = new enemyAvatar("One Punch Phil", 100000, "one-punch", "mercy-punch");

    var pokemonList = [pikaFreakingChu, dragonite];
    var activeAvatar = pokemonList[0]; //needs to grab whoever.
    var activeEnemyAvatar = onePunchPhil;

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

var battle = function() {
    console.log("A wild " + activeEnemyAvatar.name + " has appeared!");
    console.log(pokemonList[0].name + " is up!");
};
//1. tick-based, animations running, waiting for user response

//Master fnc: while player hp > 1, and enemy hp >1
                //run player fnc
                //run enemy fnc
              // if player hp <1,

//MASTER attack fnc (click/pressing enter): NEEDS FUNCTION

  var attack = function() {       // this should have event listener on attack button, after choosing specific attack.
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
      console.log('you win!');
    }
  };

  var enemyAttack = function() {                      //LIKE THIS BECAUSE OTHERWISE RUNS LOOP.
    activeEnemyAvatar.battle(activeAvatar);

    if(activeAvatar.currenthealth >0) {
      attack(activeAvatar, activeEnemyAvatar);
    } else {
      // endbattle fnc
      console.log('You Lost');
    }
  };


//1. Player turn fnc

  //I. Player Attack func
    var attackselected = function() {
      attack(activeAvatar, activeEnemyAvatar);
    };
  //II. item menu chosen (takes a turn): NEEDS FUNCTION

 /* var queryItem = function(itemList[0]) {
    if (activeAvatar.currenthealth === activeAvatar.maxhealth) {
      console.log('cannot use potion. already at max health');
    } else {
      useItem();
    }
  };*/

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










