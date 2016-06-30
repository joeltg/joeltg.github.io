  // oho, you're very sneaky
  // only 1337 haxx0rs know the way of "inspect element"
  var variables = {
    location: ['in libraries', 'around public parks', 'in coffeshops', 'in bookstores', 'on rooftops'],
    beverage: ['chai latte', 'macchiato', 'hibiscus tea', 'mango black tea'],
    music: ['Vampire Weekend', 'the Hamilton soundtrack', 'Radiohead', 'Ratatat', 'Daft Punk'],
    reading: ['Noam Chomsky', 'Malcolm Gladwell', 'David Foster Wallace', 'Hacker News', 'Nate Silver', 'John Gruber']
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

//  maybe someday?
//  setInterval(function() {
//    var keys = Object.keys(variables);
//    var variable = keys[keys.length * Math.random() << 0];
//    var element = document.getElementById(variable);
//    element.textContent = select(variables[variable], element.textContent);
//  }, 5000);
