//Player Object Type: constructor
export default function Player(pName) {
  this.id = 1;
  this.pName = pName;
  this.pScore = 0;
  this.pTotalScore = 0;
  this.turnCounter = 1;
  this.rolled = 0;
}
//method roll
Player.prototype.roll =function() {
  let rollR;
  rollR = Math.ceil(Math.random() * 6);
  return rollR;
};
//method turn()
Player.prototype.turn =function() {
  this.rolled = player1.roll();
  if (this.rolled === 1) {
    //goRed();
    this.turnCounter +=1; 
    this.pScore = 0;
    player1.updateScore();
  }
  else if (this.rolled > 1) {
    this.pScore += this.rolled;
    player1.updateScore();
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
  player1.updateScore();
};

//update score
Player.prototype.updateScore =function(){
  document.getElementById("total-score").innerText = player1.players[1].pTotalScore;
  document.getElementById("round").innerText = player1.players[1].turnCounter;
  document.getElementById("round-score").innerText = player1.players[1].pScore;
  document.getElementById("die").innerText = player1.players[1].rolled;
};