const assert = require('assert');

const ovuli = require('./ovuli');

const calculateOvuliTestCases = [
  ['01-12-2019', 21, 7, 12, 21, 12, 22, 12, 4, 8, 12],
  ['30-11-2019', 31, 16, 12, 30, 12, 1, 12, 13, 17, 12],
  ['30-03-2020', 29, 13, 4, 27, 4, 28, 4, 10, 14, 4],
  ['31-03-2020', 22, 7, 4, 21, 4, 22, 4, 4, 8, 4],
];

const calculateAverageCycleTestCases = [
  [[21, 22, 23], 31],
  [[22, 21, 23], 30.5],
  [[4, 3, 10], 33],
  [[5, 6, 3], 29],
  [[6, 6, 6], 30],
  [[6, 6, 3], 28.5],
];

const compareDateTestCases = [
  ['01-01-2020', false],
  ['11-02-2020', false],
  ['24-03-2020', false],
  ['30-04-2020', true],
  ['05-05-2020', true],
];

describe('calculateOvuli', () => {
  calculateOvuliTestCases.forEach(testCase => {
    it(`
            approximateOvulationDate: { day: ${testCase[2]}, month: ${testCase[3]} },
            nextPeriodDate: { day: ${testCase[4]}, month: ${testCase[5]} },
            nextPregnancTestDate: { day: ${testCase[6]}, month: ${testCase[7]} },
            fertileWindow: { start: ${testCase[8]}, startMonth: ${testCase[9]}, end: ${testCase[10]} },
          `, () => {
      assert.equal(ovuli.calculateOvuli(testCase[0], testCase[1], testCase[2]));
    });
  });
});

describe('calculateAverageCycle', () => {
  calculateAverageCycleTestCases.forEach(testCase => {
    it(`${testCase[1]}`, () => {
      assert.equal(ovuli.calculateAverageCycle(testCase[0], testCase[1]));
    });
  });
});

describe('compareDate', () => {
  compareDateTestCases.forEach(testCase => {
    it(`${testCase[1]}`, () => {
      assert.equal(ovuli.compareDate(testCase[0]), testCase[1]);
    });
  });
});
