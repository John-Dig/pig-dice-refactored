import Player from './../src/pig-dice-BL.js';

describe('Player', () => {

  test('Should create a Player object', () => {
    const playerA = new Player("Richard");
    expect(playerA.id).toEqual(1);
    expect(playerA.pName).toEqual("Richard");
    expect(playerA.pTotalScore).toEqual(0);
    expect(playerA.turnCounter).toEqual(1);
    expect(playerA.rolled).toEqual(1);
  });
});



// describe
// test 1('', () => {
//   const  = new 
//   expect(x).toEqual(y);
//   expect(triangle.side2).toEqual(4);
//   expect(triangle.side3).toEqual(5);
// });

// test 2('', () => {
//   const  = new 
//   expect(x).toEqual(y);
//   expect(triangle.side2).toEqual(4);
//   expect(triangle.side3).toEqual(5);
// });