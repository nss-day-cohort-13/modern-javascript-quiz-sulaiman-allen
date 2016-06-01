"use strict";

function Robot () {

  var health = 50;

  this.getHealth = function() {
    return health;
  };

  this.addHealth = function(healthBoost) {
    health += healthBoost;
    // return this.health;
  };

  this.subtractHealth = function (subtractVal) {
    health -= subtractVal;
    // return this.health;
  };
}

////////////////////////Drones////////////////////////
function Drone () {

  // KillBots should start with 80 health
  var health = this.addHealth(30);

  this.laserAttack = function(opponent) {
    let damage = Math.floor(Math.random() * 12 + 10);
    opponent.subtractHealth(damage);
    return damage;
  };

  this.clawSmash = function(opponent) {
    let damage = Math.floor(Math.random() * 5 + 9);
    opponent.subtractHealth(damage);
    return damage;
  };

}


Drone.prototype = new Robot();

function Bipedal () {

  //Bipedal Robots should start with 70 health
  var health = this.addHealth(20);

  this.bitchSlap = function(opponent) {
    let damage = Math.floor(Math.random() * 15 + 10);
    opponent.subtractHealth(damage);
    return damage;
  };

  this.highKick = function(opponent) {
    let damage = Math.floor(Math.random() * 9 + 9);
    opponent.subtractHealth(damage);
    return damage;
  };
}

Bipedal.prototype = new Robot();

function ATV () {
  var health = this.addHealth(25);

  this.runOver = function(opponent) {
    let damage = Math.floor(Math.random() * 17 + 6); 
    opponent.subtractHealth(damage);
    return damage;
  };

  this.chainSaw = function(opponent) {
    let damage = Math.floor(Math.random() * 9 + 7);
    opponent.subtractHealth(damage);
    return damage;
  };
}

ATV.prototype = new Robot();
