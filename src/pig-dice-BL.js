import fGame from "index.js";

//Die Roll
Game.prototype.roll =function() {
  let rollR;
  rollR = Math.ceil(Math.random() * 6);
  return rollR;
};
//Game Object type: constructor
export function Game() {
  this.players = {};
  this.currentId = 0;
}

//Game method for assigning unique id to player
Game.prototype.aId = function() {
  this.currentId += 1;
  return this.currentId;
};

//add player
Game.prototype.addPlayer = function(player) {
  player.id = this.aId();
  this.players[player.id] = player;
  //this.Players[id] = player;
};

//Player Object Type: constructor
export function Player(pName) {
  this.id = null;
  this.pName = pName;
  this.pScore = 0;
  this.pTotalScore = 0;
  this.turnCounter = 1;
  this.rolled = 0;
}

//playing game--------------------turn()
Player.prototype.turn =function() {
  this.rolled = fGame.roll();
  if (this.rolled === 1) {
    //goRed();
    this.turnCounter +=1; 
    this.pScore = 0;
    fGame.updateScore();
  }
  else if (this.rolled > 1) {
    this.pScore += this.rolled;
    fGame.updateScore();
  }
};  

Player.prototype.stay = function(){
  if ((this.pTotalScore + this.pScore) >= 100) {
    this.pScore = 999;
  }
  this.pTotalScore += this.pScore;
  this.pScore = 0;
  this.rolled = 0;
  this.turnCounter += 1;
  fGame.updateScore();
};



//update score
Game.prototype.updateScore =function(){
  document.getElementById("total-score").innerText = fGame.players[1].pTotalScore;
  document.getElementById("round").innerText = fGame.players[1].turnCounter;
  document.getElementById("round-score").innerText = fGame.players[1].pScore;
  document.getElementById("die").innerText = fGame.players[1].rolled;
};