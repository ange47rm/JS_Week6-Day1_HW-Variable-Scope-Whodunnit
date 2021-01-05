// Episode 1

const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Library',
    weapon: 'Rope'
};                                                  
  
const declareMurderer = function() {
    return `The murderer is ${scenario.murderer}.`;
}
  
const verdict = declareMurderer();                  
  console.log(verdict);

// EXPLANATION:
// Scenario defined using a const type variable. 
// declareMurderer function will return whatever the murderer is set to, in this case Miss Scarlet.
// The verdict const variable calls the anonymous function declareMurderer and as the murderer has been 'hardcoded' to be Miss Scarlet, she is the murderer.

// ------------------------------------------------------------ //

// Episode 2

const murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {               
  return `The murderer is ${murderer}.`;
}

changeMurderer();                                   
const verdict = declareMurderer();                  
console.log(verdict);

// EXPLANATION:
// The murderer is hardcoded to be Professor Plum using a const variable.
// The changeMurderer function will not run and cause an error, as the murderer variable is a const variable, already assigned, which cannot be changed.
// declareMurderer function would return Professor Plum as the murderer remains unchanged, however the error will prevent this to run before getting to this line of code.

// ------------------------------------------------------------ //

// Episode 3

let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);

// EXPLANATION:
// Professor Plum is declared to be the murderer, this is OUTSIDE of the declareMurderer anonymous function though.
// As murderer is also defined within declareMurderer, the function will refer to "its own" murderer which is set to 'Mrs. Peacock'.
// First verdict will be 'Mrs. Peacock', as this refers to the declareMurderer function, and related murderer.
// Second verdict is unable to even see Mrs Peacock (being that a let veriable declared within a function), therefore the murderer will be Professor Plum.

// ------------------------------------------------------------ //

// Episode 4

let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);

// EXPLANATION:
// declareAllSuspects function sees all 3 previously declared suspects, however it alters the value of suspect 3. Whatever this is, this function makes it Colonel Mustard.
// The values of function declareAllSuspects are stored in the suspects variable.
// Suspects will be Miss Scarlet (1), Professor Plum (2), Colonel Mustard(3) and this is the output of the declareAllSuspects function.
// The last line of code instead has nothing to do with the function, and from "its point of view", suspect 3 should be Mrs. Peacock.

// ------------------------------------------------------------ //

// Episode 5

const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Kitchen',
    weapon: 'Candle Stick'
};
  
const changeWeapon = function(newWeapon) {
    scenario.weapon = newWeapon;
}
  
const declareWeapon = function() {
    return `The weapon is the ${scenario.weapon}.`;
}
  
changeWeapon('Revolver');
const verdict = declareWeapon();
console.log(verdict);

// EXPLANATION:
// Scenario defined using a const type variable. Scenario is an object with keys.
// Despite the scenario being a const variable, it is an object with with keys (mutable data).
// changeWeapon('Revolver') changes the scenario.weapon key from Candle Stick to Revolver.
// The verdict const variable runs the declareWeapon function, and the weapon will be Revolver after the change.

// ------------------------------------------------------------ //

// Episode 6

let murderer = 'Colonel Mustard';

const changeMurderer = function() {
    murderer = 'Mr. Green';
  
    const plotTwist = function() {
      murderer = 'Mrs. White';
    }
                                                            Note: THIS WAS A BIT CONFUSING
    plotTwist();                             
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// EXPLANATION:
// When function changeMurderer is run, this overwrites the murderer from Colonel Mustard to Mr. Green for starters.
// Within it, an anonymous function is defined and its result is assigned to the const variable plotTwist.
// Function plotTwist runs, and the murderer is changed to Mrs. White. The scope of 'murderer' is not just local, so this will be seen by declareMurderer.
// declareMurderer will declare Mrs. White. 

// ------------------------------------------------------------ //

// Episode 7

let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    let murderer = 'Colonel Mustard';

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';
    }

    unexpectedOutcome();
  }

  plotTwist();
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// EXPLANATION:
// When function changeMurderer is run, it initially changes the murderer from Professor Plum to Mr. Green.
// The plotTwist (sub)function is defined within, this creates a let (local scope) murderer variable and sets it to Colonel Mustard.
// Within plotTwist itself, another function - unexpectedOutcome - is defined, this takes the local murderer (Colonel Mustard) and changes it to Miss Scarlet.
// Function unexpectedOutcome runs, the 'local murderer' is set to Miss Scarlet. As the murderer declared within plotTwist is a completely new variable defined within...
// ... which ignores the murderer already declared outside Mr. Green (former Professor Plum), the local murderer is basically ignored by function changeMurderer.
// As a consequence, the murderer turns out to be Mr Green (note: I had to run this to completely understand it. )
// Experiment: modifying -let murderer = 'Colonel Mustard'- to - murderer = 'Colonel Mustard'-, removing let, carries on using the former murderer, and when you run the code in that case, the murderer is Miss Scarlet.

// ------------------------------------------------------------ //

// Episode 8

const scenario = {
    murderer: 'Mrs. Peacock',
    room: 'Conservatory',
    weapon: 'Lead Pipe'
};
  
const changeScenario = function() {
    scenario.murderer = 'Mrs. Peacock';
    scenario.room = 'Dining Room';
  
    const plotTwist = function(room) {
      if (scenario.room === room) {
        scenario.murderer = 'Colonel Mustard';
      }
  
    const unexpectedOutcome = function(murderer) {
        if (scenario.murderer === murderer) {
          scenario.weapon = 'Candle Stick';
        }
    }
  
    unexpectedOutcome('Colonel Mustard');
    }
  
    plotTwist('Dining Room');
}
  
const declareWeapon = function() {
    return `The weapon is ${scenario.weapon}.`
}
  
  changeScenario();
  const verdict = declareWeapon();
  console.log(verdict);

// EXPLANATION:
// Scenario defined using a const type variable. Scenario is an object with keys.
// changeScenario function is called, scenario.murderer is set to what it already is - Mrs. Peacock - however scenario.room is changed to Dining Room.
// within the same function plotTwist is run, as the room provided - Dining Room - is the same as the current scenario.room and as that's the case, Colonel Mustard becomes the scenario.murderer.
// Within changeScenario, another function, unexpectedOutcome is defined and if the murderer provided is equal to scenario.murderer which it is (Colonel Mustard), scenario.weapon changes to Candle Stick (from Lead Pipe).
// The verdict will see Candle Stick being the scenario weapon.

// ------------------------------------------------------------ //

// Episode 9

let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

// EXPLANATION:
// murderer is initially set to Professor Plum
// an if statement runs, condition evaluates to true, however the code block executed creates a new, local variable. This does not overwrite the current murderer and is forgotten as the code block ends.
// Murderer will be Professor Plum.

