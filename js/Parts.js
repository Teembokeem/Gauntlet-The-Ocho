console.log("In the beginning...");


//Item Properties
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

var $itemTextBox = $('#item');

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

//worldmap stuff


var$worldMap;
var subRenderWorldScreen = function() {
    $battleBoard.fadeOut(1000);
    setTimeout(function() {
      $worldMap.fadeIn(800);
    },1000);
};



var $boneOutTextBox = $('#bone_Out');
