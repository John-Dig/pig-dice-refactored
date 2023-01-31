.1 Describe: roll()
Test: "roll outputs number between 1-6"
Code: roll();
Expected Output: <1-6>

.2 Describe: rollTest()
Test: "output is evenly distributed for 100E^6 rolls"
Code: rollTest()
Expected Output: <16,66x,xxx *6>

.3 Describe Game()
Test: "Game object exists"
Code: Game()
Expected Output:ƒ Game(){...}

.4 Describe: Player()
Test: "Player object exists"
Code: Player()
Expected Output: ƒ Player()){...}

.5 
Test: "players are added to Game correctly"
Code:
Expected Output: ok

.51 
Test: add die roll to Game object
Code:
Expected Output: ok

.6 starting turn
Test: exits turn on rolling 1
Code: player1.turn()
Expected Output: 0! End of turn. Total score is : *

.611
Test: if 2-6, adds roll to player score and prompts player for choice
Code: player1.turn()
Expected Output: * -- "roll again?"

.62
Test: if player choses "stay", outputs score to total and advances turn counter
Code: player1.turn()
Expected Output: ok

.7
Test: works fully in console
Code:
Expected Output: ok

.8 adding UI
.81 format
#
.811 window.onload

.82 add die to playing area
stay() should be sep. function?

.9 display die roll, player score, total score

1.0 fully playable 1 player
1.1 make die square, configure score display
#
1.2 add red die for rolling 1



