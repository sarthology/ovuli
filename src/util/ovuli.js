'use strict';

const moment = require('moment');
/**
 * This is a function to caluclate female different ovuli days.
 * @param {string} lastDate -  Day of female's last period.
 * @param {string} averageCycle - Average cycle days of females.
 *
 */
const calculateOvuli = ({ lastDate }, { averageCycle }) => {
  let result = {
    approximateOvulationDate: { day: '', month: '' },
    nextPeriodDate: { day: '', month: '' },
    nextPregnancTestDate: { day: '', month: '' },
    fertileWindow: { start: '', startMonth: '', end: '' },
  };

  // To calculate period date
  result['nextPeriodDate']['day'] = moment(lastDate)
    .add(averageCycle - 1, 'days')
    .format('DD');
  result['nextPeriodDate']['month'] = moment(lastDate)
    .add(averageCycle - 1, 'days')
    .format('MM');

  // To calculate next pregnancy date
  result['nextPregnancTestDate']['day'] = moment(lastDate)
    .add(averageCycle, 'days')
    .format('DD');
  result['nextPregnancTestDate']['month'] = moment(lastDate)
    .add(averageCycle, 'days')
    .format('MM');

  // To calculate approximate ovulation
  let maxOvulationDays = 26;
  let currentPregnancyCycle = 40 - averageCycle;
  let ovulationDays = maxOvulationDays - currentPregnancyCycle - 1;

  let approximateOvulationDate = moment(lastDate).add(ovulationDays, 'days');

  result['approximateOvulationDate']['day'] = approximateOvulationDate.format('DD');
  result['approximateOvulationDate']['month'] = approximateOvulationDate.format('MM');

  // To calculate Fertile window
  result['fertileWindow']['start'] = moment(approximateOvulationDate)
    .subtract(3, 'days')
    .format('DD');
  result['fertileWindow']['end'] = moment(approximateOvulationDate)
    .add(1, 'days')
    .format('DD');
  result['fertileWindow']['startMonth'] = moment(approximateOvulationDate)
    .subtract(3, 'days')
    .format('MM');

  return result;
};

/**
 * This is a function to caluclate female different ovuli days.
 * @param {string} cycles -  Array of female's last `n` numbers of periods's first days.
 *
 *
 */
const calculateAverageCycle = cycles => {
  let totalCycleDays = 0;

  for (let index = 1; index < cycles.length; index++) {
    let start = moment(cycles[index - 1]).format('YYYY-MM-DD');
    let end = moment(cycles[index]).format('YYYY-MM-DD');

    // If you are using moment.js you can do it easily.

    start = moment(start, 'YYYY-MM-DD');
    end = moment(end, 'YYYY-MM-DD');

    //Difference in number of days
    let duration = moment.duration(start.diff(end)).asDays();
    totalCycleDays = totalCycleDays + duration;
  }

  let averageCycleDay = totalCycleDays / (cycles.length - 1);

  return averageCycleDay;
};

const compareDate = lastDate => {
  const dateObj = new Date(new Date().getFullYear(), lastDate.month - 1, lastDate.day);
  const estimateDate = moment(dateObj);

  const today = moment();

  return estimateDate < today ? true : false;
};

module.exports = {
  calculateOvuli,
  calculateAverageCycle,
  compareDate,
};
