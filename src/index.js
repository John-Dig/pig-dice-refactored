import Game from "./pig-dice-BL";
import Player from "./pig-dice-BL";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

//temp console
export const fGame = new Game();
const player1 = new Player("James");
fGame.addPlayer(player1);


//UI
//function goRed() {
//  document.getElementById("die").style.backgroundColor = "red";
//}
window.addEventListener("load", function(e){
  e.preventDefault();
  let p1Nameplate = document.getElementById("player-name-1");
  p1Nameplate.append(fGame.players[1].pName);
  document.getElementById("roll-button").addEventListener("click", function() {
    fGame.players[1].turn();
    document.getElementById("die").style.backgroundColor = "white";
  });  
  this.document.getElementById("stay-button").addEventListener("click", function() {
    document.getElementById("die").style.backgroundColor = "white";
    fGame.players[1].stay();
  });
});