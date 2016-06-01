"use strict";

describe("Robot Function", function() {

  var testBot = new Robot;
  // console.log("testBot = ", testBot)

  it("should exist", function() {
      expect(testBot).toBeDefined();
  });

  it("should have a function named getHealth", function () {

      expect(testBot.getHealth).toBeDefined();
  });

  it("should have a function named addHealth", function () {
  
      expect(testBot.addHealth).toBeDefined();
  });

  it("should have a function named subtractHealth", function () {
  
      expect(testBot.subtractHealth).toBeDefined();
  });

  it("should increase the health by a value passed in", function () {

    testBot.addHealth(5)
    expect(testBot.getHealth()).toEqual(55);
  });

  it("should decrease the health by a value passed in", function () {

    testBot.subtractHealth(5)
    expect(testBot.getHealth()).toEqual(50);
  });


  ////////////////////Drone Testing//////////////////////////
  var testKillBot = new Drone;

  it("Drone should exist", function() {
      expect(testKillBot).toBeDefined();
  });

  it("Laser attack should decrease the health of an opponent by a value passed in", function () {
    testKillBot.laserAttack(testBot);
    console.log("testBot health after laser attack = ", testBot.getHealth());
    const isWithinRange = testKillBot.laserAttack(testBot) <= 25 && testKillBot.laserAttack(testBot) >= 10
    // console.log("isWithinRange", isWithinRange);
    expect(isWithinRange).toBe(true);
  });

  it("Claw smash should decrease the health of an opponent by a value passed in", function () {
    testKillBot.clawSmash(testBot);
    const isWithinRange = testKillBot.clawSmash(testBot) <= 25 && testKillBot.clawSmash(testBot) >= 10
    // console.log("testBot health after clawSmash = ", testBot.getHealth());
    expect(isWithinRange).toBe(true);
  });

  ////////////////////Bipedal Testing//////////////////////////

  var bipedBot = new Bipedal();

  it("Drone should exist", function() {
      expect(bipedBot).toBeDefined();
  });

  it("Bitch slap should decrease the health of an opponent by a value passed in", function () {
    bipedBot.bitchSlap(testKillBot);
    console.log("testKillBot health after bitchSlap = ", testKillBot.getHealth());
    const isWithinRange = bipedBot.bitchSlap(testKillBot) <= 25 && bipedBot.bitchSlap(testKillBot) >= 10
    expect(isWithinRange).toBe(true);
  });

  it("High kick should decrease the health of an opponent by a value passed in", function () {
    bipedBot.highKick(testKillBot);
    console.log("testKillBot health after highKick = ", testKillBot.getHealth());
    const isWithinRange = bipedBot.highKick(testKillBot) <= 25 && bipedBot.highKick(testKillBot) >= 10
    expect(isWithinRange).toBe(true);
  });

  ////////////////////ATV Testing//////////////////////////

  var atvBot = new ATV

    it("ATV should exist", function() {
        expect(atvBot).toBeDefined();
    });

    it("Run Over should decrease the health of an opponent by a value passed in", function () {
      atvBot.runOver(bipedBot);
      console.log("bipedBot health after runOver = ", bipedBot.getHealth());
      const isWithinRange = atvBot.runOver(bipedBot) <= 25 && atvBot.runOver(bipedBot) >= 10
      expect(isWithinRange).toBe(true);
    });

    it("Chainsaw should decrease the health of an opponent by a value passed in", function () {
      atvBot.chainSaw(bipedBot);
      console.log("bipedBot health after chainSaw = ", bipedBot.getHealth());
      const isWithinRange = atvBot.chainSaw(bipedBot) <= 25 && atvBot.chainSaw(bipedBot) >= 10
      expect(isWithinRange).toBe(true);
    });

});
