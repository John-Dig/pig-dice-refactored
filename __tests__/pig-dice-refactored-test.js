import Player from './../src/pig-dice-BL.js';

//test 1
describe('Player', () => {
  test('Should create a Player object', () => {
    const playerA = new Player("Richard");
    expect(playerA.id).toEqual(1);
    expect(playerA.pName).toEqual("Richard");
    expect(playerA.pTotalScore).toEqual(0);
    expect(playerA.turnCounter).toEqual(1);
    expect(playerA.rolled).toEqual(0);
  });
});

//test 2
describe('Player.prototype.roll()', () => {
  test('Should return 1,2,3,4,5, or 6', () => {
    const playerA = new Player();
    const playerRoll = playerA.roll();
    expect(playerRoll).toBeGreaterThanOrEqual(10);
    expect(playerRoll).toBeLessThan(0);
  });
});
