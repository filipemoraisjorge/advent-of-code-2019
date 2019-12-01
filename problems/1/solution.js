const input = require('./input');

// divide by three, round down, and subtract 2.
function calculateFuel(mass) {
    return Math.floor(mass/3)-2;
}
function sum(a,b) { return a+b }

const solution = input.map(calculateFuel).reduce(sum);

module.exports = { solution, calculateFuel, sum};

