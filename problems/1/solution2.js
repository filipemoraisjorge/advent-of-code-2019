const input = require('./input');
const utils  = require('./solution');
const {calculateFuel, sum } = utils;

function calculateFuelR(mass) {
    const fuel = calculateFuel(mass);
    if (fuel <=0) return 0;
    return calculateFuel(mass) + calculateFuelR(fuel);
}

const solution = input.map(calculateFuelR).reduce(sum);

module.exports = solution;

