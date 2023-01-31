import {Game, Player} from "./pig-dice-BL";
//import 'bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

//temp console
export const game = new Game();
const player1 = new Player("James");
game.addPlayer(player1);


//UI
//function goRed() {
//  document.getElementById("die").style.backgroundColor = "red";
//}
window.addEventListener("load", function(e){
  e.preventDefault();
  let p1Nameplate = document.getElementById("player-name-1");
  p1Nameplate.append(game.players[1].pName);
  document.getElementById("roll-button").addEventListener("click", function() {
    game.players[1].turn();
    document.getElementById("die").style.backgroundColor = "white";
  });  
  this.document.getElementById("stay-button").addEventListener("click", function() {
    document.getElementById("die").style.backgroundColor = "white";
    game.players[1].stay();
  });
});