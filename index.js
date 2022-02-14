const data = {
  0: {
    firstName: 'Jan',
    lastName: 'Kowalski',
    company: {
      name: 'Industry LTD',
      address: '20 Williams Circle',
      countryCode: 'UK'
    }
  },
  1: {
    firstName: 'John',
    lastName: 'Smith',
    company: {
      name: 'VxxonMobil',
      address: '770 Cemetery Street',
      countryCode: 'US'
    }
  },
  2: {
    firstName: 'Arnold',
    lastName: 'Blake',
    company: {
      name: 'Washington Wizards',
      address: '4 Old Brook Street',
      countryCode: 'US'
    }
  },
  3: {
    firstName: 'Ann',
    lastName: 'Tayor',
    company: {
      name: 'Ally Financial',
      address: '9 Purple Finch Street',
      countryCode: 'UK'
    }
  }
}

// const result = {
//   'UK': [
//     {
//       firstName: 'Jan',
//       lastName: 'Kowalski',
//       company: {
//         name: 'Industry LTD',
//         address: '20 Williams Circle',
//         countryCode: 'UK'
//       }
//     }, {
//       firstName: 'Ann',
//       lastName: 'Tayor',
//       company: {
//         name: 'Ally Financial',
//         address: '9 Purple Finch Street',
//         countryCode: 'UK'
//       }
//     }
//   ],
//   'US': [
//     {
//       firstName: 'John',
//       lastName: 'Smith',
//       company: {
//         name: 'VxxonMobil',
//         address: '770 Cemetery Street',
//         countryCode: 'US'
//       }
//     }, {
//       firstName: 'Arnold',
//       lastName: 'Blake',
//       company: {
//         name: 'Washington Wizards',
//         address: '4 Old Brook Street',
//         countryCode: 'US'
//       }
//     }
//   ]
// }

let result = {};
const addToResult = (el) =>  {
  if (!el) {
    console.error('Parameter el cannot be null');
    return;
  }
  let countryCode = el.company.countryCode;

  let resEl = result[countryCode];
  if (!resEl) {
    result[countryCode] = [];
  }
  result[countryCode].push(el);
}
Object.keys(data).reduce((prev, curr, idx, arr) => {
  if (prev) {
    addToResult(data[prev]);
  }
  addToResult(data[curr]);
})

console.log(result);





