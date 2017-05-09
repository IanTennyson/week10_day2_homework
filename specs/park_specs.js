var assert = require("assert");
var Park = require("../park.js");
var Dinosaur = require("../dinosaur.js");

describe("Park", function(){

  beforeEach(function(){
    this.park1 = new Park();
    this.dinosaur1 = new Dinosaur("T-Rex", 1);
    this.dinosaur2 = new Dinosaur("Barney", 10);
    this.dinosaur3 = new Dinosaur("Barney", 5);
    this.dinosaur4 = new Dinosaur("Barney", 3);
  });

  it("enclosure should start empty", function(){
    assert.strictEqual(0, this.park1.enclosure.length);
  });

  it("can add a dino to enclosure", function(){
    this.park1.add(this.dinosaur1);
    this.park1.add(this.dinosaur2);
    this.park1.add(this.dinosaur2);
    this.park1.add(this.dinosaur2);
    assert.strictEqual(4, this.park1.enclosure.length);
  });

  it("can delete dino's of a particular type from enclosure", function(){
    this.park1.add(this.dinosaur2);
    this.park1.add(this.dinosaur2);
    this.park1.add(this.dinosaur1);
    this.park1.add(this.dinosaur2);
    this.park1.add(this.dinosaur3);
    this.park1.add(this.dinosaur4);
    assert.strictEqual(6, this.park1.enclosure.length);
    this.park1.remove("Barney");
    assert.strictEqual(1, this.park1.enclosure.length);
  });

  it("can find all the dinos with an offspring count more than 2", function(){
    this.park1.add(this.dinosaur1);
    this.park1.add(this.dinosaur2);
    this.park1.add(this.dinosaur3);
    assert.strictEqual(2, this.park1.dinosWithMoreThanTwoOffspring.length);
  })

});