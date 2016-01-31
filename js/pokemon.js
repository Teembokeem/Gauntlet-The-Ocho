  console.log("script linked!");


  var pikaFreakingChu = {
    monid: "pikaFreakingChu",
    maxhealth: 4000,
    currenthealth:4000,
    attack: {
      attid: "EDM Drop",
      value: 30000000
    }
  }

  var dragonite = {
    monid: "Dragonite",
    health: 300000,
    attack: {
      attid: "Catch Fade",
      value: 30034343
    }
  }

  var mewSix = {
    name: "MewSix",
    health: 2000000000,
    attack1: "Insta-Win",
  }

  var theOne = [pikaFreakingChu, dragonite, mewSix];

  theOne[0].koCondition = dragonite;
  theOne[1].koCondition = mewSix;
  theOne[2].koCondition = "You lose Bro.";


  var donaldTrumpMon = {
    monid: "TrumpTramp",
    maxhealth: 100000000,
    currenthealth: 100000000,
    attack: {
        attid:"'I Don't Know What I Am Saying'",
        value: 500
      }
  }

  var theDevil = [donaldTrumpMon];

  var battle = function(currentPokemon) {
    while (currentPokemon.currenthealth > 0 && donaldTrumpMon.currenthealth > 0 ) {
      console.log(theBaeAttack(currentPokemon));
      if (donaldTrumpMon.currenthealth === 0) {
        return theOne + " has defeated " + theDevil;
      }
      else {
        console.log(enemyAttack(currentPokemon));
      }
    }
  };

  var theBaeAttack = function(currentPokemon) {
      donaldTrumpMon.currenthealth -= currentPokemon.attack.value;
      console.log(pikaFreakingChu.monid + " used " + currentPokemon.attack.attid + " and dealt " + currentPokemon.attack.value);
      if (donaldTrumpMon.currenthealth < 0) {
        donaldTrumpMon.currenthealth === 0;
        console.log(donaldTrumpMon.monid + " has " + donaldTrumpMon.health + " health left");
        console.log(donaldTrumpMon.monid + " has fainted.");
        return "you frickin did it.";
      } else {
        console.log(donaldTrumpMon.monid + " has " + donaldTrumpMon.health + " health left");
      }
  }

  var enemyAttack = function(currentPokemon) {
      currentPokemon.currenthealth = currentPokemon.health - donaldTrumpMon.attack.value;
      console.log(donaldTrumpMon.monid + " used " + donaldTrumpMon.attack.attid + " and dealt " + donaldTrumpMon.attack.value);
      if (currentPokemon.health < 0) {
        currentPokemon.health = 0;
        console.log(currentPokemon.monid + " has fainted.")
        return "you lost bruh.";
      }
      return "pikaFreakingChu has " + currentPokemon.health + " health left";
    }







