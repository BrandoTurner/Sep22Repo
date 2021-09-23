// Write out a Switch Statement for the pseudo code below

// If favoriteMovie is "jaws"

// Assign moviePhrase the value "You're gonna need a bigger boat."

// Else if favoriteMovie is "the shining"
// Assign moviePhrase the value "All work and no play makes Jack a dull boy."

// Else if favoriteMovie is "star wars"
// Assign moviePhrase the value "Do. Or do not. There is no try."

// Else if favoriteMovie is "forrest gump"
// Assign moviePhrase the value "Life was like a box of chocolates."

// Else if favoriteMovie is "back to the future"
// Assign moviePhrase the value "Where we're going, we don't need roads."

// Else
// Assign moviePhrase the value "Great movie choice!"
// Assume star wars is your favorite movie.

let moviePhrase = "You're gonna need a bigger boat";
const favMovie = 'jaws';

switch (favMovie) {
  case 'the shining':
    moviePhrase = "All work and no play makes Jack a dull boy";
    // console.log(moviePhrase);
  // return moviePhrase;
    break;
  case 'star wars':
    moviePhrase = "Do. Or do not. There is no try."
    // console.log(moviePhrase)
    break;
  case 'forrest gump':
    moviePhrase = "Life was like a box of chocolates."
    // console.log(moviePhrase);
    break;
  default:
    console.log(`Great movie choice!`);
};

//console.log(favMovie);