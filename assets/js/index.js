// oho, you're very sneaky
// only 1337 haxx0rs know of "inspect element"
var variables = {
  location: ['in libraries', 'around public parks', 'in coffeshops', 'in bookstores', 'on rooftops'],
  beverage: ['chai latte', 'macchiato', 'hibiscus tea', 'black tea', 'kombucha'],
  music: [
    'Vampire Weekend',
    'the Hamilton soundtrack',
    'Radiohead',
    'Ratatat',
    'Daft Punk',
    'LCD Soundsystem',
    'Caravan Palace',
    'Tame Impala',
    'MGMT',
    'The xx',
    'Foster The People',
    'Two Door Cinema Club',
    'Grouplove',
    'The Modern Lovers',
    'STRFKR',
    'fun.',
    'Animal Collective'
  ],
  reading: [
    'Noam Chomsky',
    'Malcolm Gladwell',
    'David Foster Wallace',
    'Hacker News',
    'Nate Silver',
    'John Gruber',
    'Marvin Minsky',
    'Douglas Hofstadter'
  ]
};

function select(options, oldValue) {
  var index = Math.floor(Math.random() * options.length);
  while (options[index] === oldValue) index = Math.floor(Math.random() * options.length);
  return options[index];
}

function click(event) {
  event.target.textContent = select(variables[event.target.id], event.target.textContent);
}

for (var key in variables) {
  if (variables.hasOwnProperty(key)) {
    var element = document.getElementById(key);
    element.textContent = select(variables[key]);
    element.addEventListener('click', click);
  }
}
