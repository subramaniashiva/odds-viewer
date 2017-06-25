// Sample data which represents the back end API result.

export function generateData():Array<Object> {
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

function getPreviousDateString(previous: number): string {
  let d = new Date();
  d.setDate(d.getDate() - previous);
  return `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}`;
}
