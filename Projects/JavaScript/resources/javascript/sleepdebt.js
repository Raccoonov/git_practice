// Getting data on actual sleep hours
const getSleepHours = day => {
    if (day === 'monday') {
      return 8;
    } else if (day === 'tuesday') {
      return 7;
    } else if (day === 'wednesday') {
      return 9;
    } else if (day === 'thursday') {
      return 6;
    } else if (day === 'friday') {
      return 10;
    } else if (day === 'saturday') {
      return 10;
    } else if (day === 'sunday') {
      return 10;
    } else {
      console.log('Wrong input')
    }
  };
  console.log(getSleepHours('monday'));
  // Summing up the actual sleep hours
  const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') +  getSleepHours('thursday') + getSleepHours('friday') +  getSleepHours('saturday') + getSleepHours('sunday');
  /* Alternative method:
  const getActualSleepHours = () => 6 + 7 + 9 + 8 + 5 + 10 + 11;
  */
  console.log(getActualSleepHours());
  // Getting the ideal sleep hours
  function getIdealSleepHours(hours) {
    return hours * 7;
  };
  /*
  Alternative method:
  const getIdealSleepHours = idealHours => idealHours * 7;
  */
  
  console.log(getIdealSleepHours(9));
  // Calculating sleep debt
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(9);
    if (actualSleepHours === idealSleepHours) {
      console.log('You\'ve got the perfect amount of sleep!');
    } else if (actualSleepHours > idealSleepHours) {
      const diffMore = actualSleepHours - idealSleepHours;
      console.log(`You\'ve got ${diffMore} hours more sleep than needed`);
    } else if (actualSleepHours < idealSleepHours) {
      //Alternative way to do it//
      console.log('You\'ve got ' + (idealSleepHours - actualSleepHours) + ' hours less sleep than needed...');
    } else {
      console.log('Ahem!');
    }
  };
  calculateSleepDebt();