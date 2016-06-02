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

  // Drones should start with 80 health
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


////////////////////////Bipeds////////////////////////

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

function IG88 () {

  this.model = function () {
    return "IG-88";
  };

  this.laserRifle = function(opponent) {
    let damage = Math.floor(Math.random() * 17 + 11);
    opponent.subtractHealth(damage);
    return damage;
  };
}

IG88.prototype = new Bipedal();

function HumanoidX () {

  this.model = function () {
    return "Humanoid-X";
  };

  this.rocketPunch = function(opponent) {
    let damage = Math.floor(Math.random() * 16 + 12);
    opponent.subtractHealth(damage);
    return damage;
  };
}

HumanoidX.prototype = new Bipedal();

////////////////////////ATVs////////////////////////

function ATV () {

  //ATVs should start with 75 health
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
