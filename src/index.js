//Die Roll
Game.prototype.roll =function() {
  let rollR
  rollR = Math.ceil(Math.random() * 6);
  return rollR;
}
//Game Object type: constructor
function Game() {
  this.players = {}
  this.currentId = 0;
};

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
function Player(pName) {
  this.id = null;
  this.pName = pName;
  this.pScore = 0;
  this.pTotalScore = 0;
  this.turnCounter = 1;
  this.rolled = 0;
};

//playing game--------------------turn()
Player.prototype.turn =function() {
  if ((this.pTotalScore + this.pScore) >= 100) {
    console.log("YOU WIN FINALLY!")
    console.log("it only took you " + this.turnCounter + " rounds.")
  }
  this.rolled = fGame.roll()
  console.log(this.rolled)
  if (this.rolled === 1) {
    goRed();
    this.turnCounter +=1; 
    this.pScore = 0;
    console.log("0! End of turn. Total score is : " + this.pTotalScore + ".");
    console.log("1:" + this.rolled)
    fGame.updateScore();
  }
  else if (this.rolled > 1) {
    this.pScore += this.rolled;
    console.log (this.turnCounter + "| your total for turn is " + this.pScore +".");
    console.log ("Total game score: " + this.pTotalScore);
    console.log("2:" + this.rolled)
    fGame.updateScore();
  }
}  

Player.prototype.stay = function(){
  this.pTotalScore += this.pScore;
  this.pScore = 0;
  this.rolled = 0;
  this.turnCounter += 1;
  console.log ("your total score is " + this.pTotalScore + ".");
  console.log("stayed");
  fGame.updateScore();
  if ((this.pTotalScore + this.pScore) >= 100) {
    console.log("YOU WIN FINALLY!")
    console.log("it only took you " + this.turnCounter + " rounds.")
  }
}

//temp console
const fGame = new Game();
const player1 = new Player("James");
const player2 = new Player("Marvin");
fGame.addPlayer(player1);

//update score
Game.prototype.updateScore =function(){
  document.getElementById("total-score").innerText = fGame.players[1].pTotalScore;
  document.getElementById("round").innerText = fGame.players[1].turnCounter;
  document.getElementById("round-score").innerText = fGame.players[1].pScore;
  document.getElementById("die").innerText = fGame.players[1].rolled;
}


//UI
function goRed() {
  document.getElementById("die").style.backgroundColor = "red";
}
window.addEventListener("load", function(e){
  e.preventDefault();
  let p1Nameplate = document.getElementById("player-name-1");
  p1Nameplate.append(fGame.players[1].pName);
  document.getElementById("roll-button").addEventListener("click", function() {
    fGame.players[1].turn();
    document.getElementById("die").style.backgroundColor = "white";
  })  
  this.document.getElementById("stay-button").addEventListener("click", function() {
    document.getElementById("die").style.backgroundColor = "white";
    fGame.players[1].stay();
  })
});






// //#region main // stat tester

// rollTest
// let r1 = 0;
// let r2 = 0;
// let r3 = 0;
// let r4 = 0;
// let r5 = 0;
// let r6 = 0;

// let rollTry = 0;
// function rollTest(){
//   for (i = 0; i <100000000; i ++) {
//           rollTry = roll();
//           if (rollTry === 1) {
//             r1 =r1 +1;
//           }
//           else if (rollTry === 6) {
//             r6 =r6 +1;
//           }
//           else if (rollTry === 2) {
//             r2 =r2 +1;
//           }
//           else if (rollTry === 3) {
//             r3 =r3 +1;
//           }
//           else if (rollTry === 4) {
//             r4 =r4 +1;
//           }
//           else if (rollTry === 5) {
//             r5 =r5 +1;
//           }
//           else {
//             console.log("not")
//           }
//         }
//         return [r1,r2,r3,r4,r5,r6,(r1-r2)];
//       }
//       //#endregion
