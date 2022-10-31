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
      title: 'ideal',
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
      title: 'Chatime',
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


// Our code goes here:
// Create a variable to store our form in -> querySelector?
// Create a listener so we know when the user has submitted their choices
// preventDefault()
// Store users choices in 2 variables (one for drinks and one for price)
// Use our drink choice variable to access the corresponding array


// Step 4 - Creating a Randomizer Function for our options array, but also for ANY array we may need to randomize at a later date.

function randomItem(randomArray){
  const randomIndexNumber = Math.floor(Math.random() * randomArray.length );
  return randomArray[randomIndexNumber]
}


// Step 1a: First thing is target the form itself and pop it into a variable so that we can easily attach an eventListener to it.

const formEl = document.querySelector('form');
// console.log(formEl);

// Step 1b: Let's add an eventListener so that we can access the user's input once they submit!

formEl.addEventListener('submit', function(event){
  // console.log(event);
  event.preventDefault();

  // Step 1c: Let's target the individual inputs and pull the value from them!
  const type = document.querySelector('input[name=beverage]:checked').value;
  const price = document.querySelector('input[name=price]:checked').value;

  // console.log(type);
  // console.log(price);

  // Step 2 Now that we've got our user's selection in the form of a string, let's use it to target the appropriate array within the drinks object.

  const choice = drinks[type];
  // Hey! Why can't I use dot notation above? Because the type variable returns a string, which is in quotes. So, your dot notation would produce drinks."coffee" or drinks."tea" which won't work! Square brackets are required!
  

  // console.log(choice);


  // Step 3b - We need to create an empty array that will hold all the Stores that meet our User's Price Preference.

  const options = [];


  // Step 3a - Now that we've used the User's Selection to target and isolate a specific drink array, we can loop through said array and ALSO use a conditional/if statement to compare the USER's Price Choice against the price value in each store in the array.

  for (let i = 0; i < choice.length; i++ ){

    const store = choice[i];

    if (store.price === price) {
      options.push(store);
      // console.log(options);
    }
  }

  
// Take this NEW array of cafes that meet our users selections exactly and randomly pick one
// Math.randomizer
// Take the TITLE from this randomly picked CAFE and insert it into our html


// Step 4b: Let's CALL the randomItem randomizer function and PASS our options array as an argument and STORE it in a variable for later use (when we put our data ON the page in our html)
// console.log(randomItem(options).title);

const optionsToDisplay = randomItem(options);

// console.log(optionsToDisplay);

// Step 5: Now let's inject this result into our HTML. All we really need is the store name, or "title" property from our object. 

const results = document.querySelector('.results');
console.log(results);
results.innerHTML = `<h2>${optionsToDisplay.title}</h2>`;

});


