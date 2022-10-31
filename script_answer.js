const drinks = {
  coffee: [
    {
      title: 'Early Bird',
      price: '$$',
    },
    {
      title: 'Strange Love',
      price: '$$',
    },
    {
      title: 'Fahrenheit',
      price: '$$',
    },
    {
      title: 'Voodoo Child',
      price: '$$',
    },
    {
      title: 'Dark Horse',
      price: '$',
    },
    {
      title: 'Cops',
      price: '$',
    },
    {
      title: 'i deal',
      price: '$',
    },
    {
      title: 'Jimmy\'s',
      price: '$',
    }
  ],
  tea: [
    {
      title: 'Icha',
      price: '$$',
    },
    {
      title: 'Ten Ren\'s',
      price: '$$',
    },
    {
      title: "David's Tea",
      price: '$$',
    },
    {
      title: 'Bubble Lee',
      price: '$$',
    },
    {
      title: 'Chattime',
      price: '$',
    },
    {
      title: 'Tealish',
      price: '$',
    },
    {
      title: 'Kung Fu',
      price: '$',
    },
    {
      title: 'Gong Cha',
      price: '$',
    }
  ]
};


// Step 4a: PUT THIS FUNCTION IN THE EVENT LISTENER TO START, then move it out of the event listener up to the top so they can reuse it! 
// Let's make a function that holds a randomizer that will give us a random number between 1 and the total length of ANY array. So we'll need a parameter for now. 
function randomItem(optionsArray) {
  const index = Math.floor(Math.random() * optionsArray.length);
  return optionsArray[index];
}



// Step 1: Let's create an Event Listener so that we can get the user's input. We want to know what they've picked!

// Step 1a: first thing we should do is target the form itself and pop it into a variable.
const formEl = document.querySelector('form');

// Step 1b: Now let's add an eventListener to the form so we can "hear" when our users submit the form and we can store their <selections!></selections!>
formEl.addEventListener('submit', function(event){
  console.log(event);
  event.preventDefault();

  // How can we get the users data? Let's target the individual inputs and pull the value from them!
  const type = document.querySelector('input[name=beverage]:checked').value;
  const price = document.querySelector('input[name=price]:checked').value;


  // Step 2: Now that we've got the user's selection, let's use it to target the appropriate array within our Drinks Object! 
  const choice = drinks[type];
  // Hey! Why not dot notation? Because "type" returns a string, so dot notation would be drinks."coffee", which doesn't work. Do a typeof to see that it's a string
  console.log(drinks["coffee"]);
  console.log(typeof type);

  // Step 3b: we need to create the array that we're going to push stuff to!
  const options = [];

  // Step 3: Now that we've used the User's Selection to target a specific drink array, we can loop through it and ALSO compare the prices. When we find price ranges that are the same as the User's choice, we can take those options and push them into a new array for us to use later.
  for (let i = 0; i < choice.length; i++) {
    
    // Try the below with choice[i] first (so if -> choice[i].price === price), then add a store variable
    const store = choice[i];

    if (store.price === price) {
      options.push(store)
    }
  }

  // Step 4 Now we need to take this array of cafes that fit both our Beverage and Price requirements and select a random ONE store to display. We'll need a randomizer to make that work! See above!

  // Step 4b = let's call the randomItem func, pass the options array through as an argument, and store the results in the optionToDisplay variable
  const optionToDisplay = randomItem(options);

  // Console.log(optionToDisplay to see the random store object that's been selected)

  // Step 5: Now let's inject this result into our HTML. All we really need is the store name or the "title" property in our store object. So let's target the area we want this to show up in (the results section), and then use innerHTML to insert the store name!
  const results = document.querySelector('.results');
  results.innerHTML = `<h2 class="choice">${optionToDisplay.title}</h2>`;
})