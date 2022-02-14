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

const result = {
  'UK': [
    {
      firstName: 'Jan',
      lastName: 'Kowalski',
      company: {
        name: 'Industry LTD',
        address: '20 Williams Circle',
        countryCode: 'UK'
      }
    }, {
      firstName: 'Ann',
      lastName: 'Tayor',
      company: {
        name: 'Ally Financial',
        address: '9 Purple Finch Street',
        countryCode: 'UK'
      }
    }
  ],
  'US': [
    {
      firstName: 'John',
      lastName: 'Smith',
      company: {
        name: 'VxxonMobil',
        address: '770 Cemetery Street',
        countryCode: 'US'
      }
    }, {
      firstName: 'Arnold',
      lastName: 'Blake',
      company: {
        name: 'Washington Wizards',
        address: '4 Old Brook Street',
        countryCode: 'US'
      }
    }
  ]
}

let aa = Object.keys(data).reduce((result,key) => {
  console.log(result[key]);

}, {})





