// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
    return this.strength
    }
receiveDamage(damage) {
    this.health -= damage ;
}
    }

// Viking
class Viking extends Soldier {
    constructor (name, health, strength) {
        super(health, strength)
        this.name = name;
    }
    receiveDamage(damage) {
      super.receiveDamage(damage);
      if (this.health > 0) {
         return `${this.name} has received ${damage} points of damage`;
      } else {
          return`${this.name} has died in act of combat`;
      }
    }
    battleCry() {
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon extends Soldier{
constructor (health, strength) {
    super (health, strength)
}
receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
        return `A Saxon has received ${damage} points of damage`;
    } else {
        return `A Saxon has died in combat`;
    }
}
}

// War
class War {
    constructor () { 
  this.vikingArmy = [];
  this.saxonArmy = [] ;
}
addViking(viking) {
    this.vikingArmy.push(viking);
}
addSaxon(saxon) {
    this.saxonArmy.push(saxon);
}
vikingAttack() {
   let indexSaxon = [Math.floor(Math.random() * this.saxonArmy.length)];
   let randomSaxon = this.saxonArmy[indexSaxon];
   let indexViking = [Math.floor(Math.random() * this.vikingArmy.length)];
   let randomViking = this.vikingArmy[indexViking];
   if (randomSaxon.health > 0) {
       this.saxonArmy.splice(randomSaxon,1);
 } 
  return randomSaxon.receiveDamage(randomViking.strength)
 }
saxonAttack() {
    if (randomViking.health > 0) {
        this.vikingArmy.splice(randomViking,1);
  } 
   return randomViking.receiveDamage(randomSaxon.strength)
  }
}



