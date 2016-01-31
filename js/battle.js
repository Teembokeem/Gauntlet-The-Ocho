console.log("POKEBALLS READY");

var activeAvatar;
var passiveAvatar;

var Avatar = function(name, health, attackName, power) {
  this.name = name;
  this.health = health;
  this.attackName = attackName;
  this.power = power;
  this.battle = function(enemy) {
    enemy.health -= this.power;
    console.log("you did " + this.power + " dmg. remaining health: " + enemy.health);
}
};

Avatar.prototype

var pikaFreakingChu = new Avatar("pika FRICKIN CHU", 1000, "Thunder", 100);

var onePunchPhil = new Avatar("One Punch Phil", 100000, "one-punch", 999);


var battle = function() {

};
