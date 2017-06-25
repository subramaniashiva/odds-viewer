// Sample data which represents the back end API result.

/**
 * Generates a random object containing price and size key.
 * @param {number} count - Number of objects to be generated.
 * @return {Array} returns an array of objects.
 */
function generateRandomPriceSize(count: number): Array<Object> {
  let tempArray = [];
  for(let i = 0; i < count; i++) {
    tempArray.push({
      price: (Math.floor(Math.random() * 1000) + 50)/10,
      size: (Math.floor(Math.random() * 80) + 11)
    });
  }
  return tempArray;
}

/**
 * Generates a random object containing price and date key.
 * @param {number} count - Number of objects to be generated.
 * @return {Array} returns an array of objects.
 */
function generateRandomPriceDate(count: number): Array<Object> {
  let tempArray = [];
  for(let i = 0; i < count; i++) {
    tempArray.push({
      price: (Math.floor(Math.random() * 1000) + 50)/10,
      date: getPreviousDateString(count - i)
    });
  }
  return tempArray;
}

/**
 * Subtracts the date from give parameter and returns a string version of date.
 * @param {number} previous - Previous day count.
 * @return {string} returns a string in DD-MM-YYYY format.
 */
function getPreviousDateString(previous: number): string {
  let d = new Date();
  d.setDate(d.getDate() - previous);
  return `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}`;
}


/**
 * Generates random data as a substitute to API.
 * @return {Array} returns an array of objects containign odds details.
 */
export function generateData():Array<any> {
  const teams = ['Barcelona', 'Real Madrid', 'Man City', 'Man Utd', 'Chelsea',
    'Liverpool', 'Roma', 'Ajax', 'Sevilla', 'PSG'];

  const exchanges = ['Bet Fair', 'Ladbrokes', 'BetFred'];

  let teamObj = {};
  return teams.map((team, index) => {
    teamObj = {
      name: team,
      id: index + 1
    };

    teamObj['exchanges'] = [];

    exchanges.map((exchange, index) => {
      let exchangeObj = {
        name: exchange,
        id: (index + 1)*1000,
        currency: 'GBP'
      };
      exchangeObj['back_all'] = generateRandomPriceSize(3);

      exchangeObj['lay_all'] = generateRandomPriceSize(3);

      exchangeObj['history'] = {
        back_all: generateRandomPriceDate(5),
        lay_all: generateRandomPriceDate(5)
      }

      teamObj['exchanges'].push(exchangeObj);
    });

    return teamObj;
  });
}
