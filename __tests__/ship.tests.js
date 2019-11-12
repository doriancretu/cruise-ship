const Ship = require('../src/Ship.js');

describe('Ship', () => {
  it ('Ship object can be created',() => {
    expect(new Ship()).toBeInstanceOf(Object);
  });
  it ('has a starting port', () => {
    const ship = new Ship('Titanic', 'Dover');
    expect(ship.startingPort).toBe('Dover');

  })
});