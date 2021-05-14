
/* Vuex store initial state */
export const INITIAL_STORE_STATE = {
  state: {
    classes: [],
    languages: [],
    monsters: [],
    subclasses: [],
    items: [],
    alignments: [],
  },
  mutations: {
    setClasses(state, newState) {
      state.classes = newState;
    },
    setLanguages(state, newState) {
      state.languages = newState;
    },
    setMonsters(state, newState) {
      state.monsters = newState;
    },
    setSubclasses(state, newState) {
      state.subclasses = newState;
    },
    setItems(state, newState) {
      state.items = newState;
    },
    setAlignments(state, newState) {
      state.alignments = newState;
    },
  },
}

/* Retrieves a random value from the given array */
export const getRandomValue = (arr) => {
  if (arr && arr[0] && arr[0].name) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index].name;
  } else {
    return "...";
  }
};

/* Retrieves random number of values from the given array (as a string)
    - Always returns at least one value
    - Every subsequent value has a 50% chance to be added
*/
export const getRandomValues = (arr) => {
  if (arr && arr[0] && arr[0].name) {
    let arr2 = [...arr]
    let results = [];
    do {
      const index = Math.floor(Math.random() * arr2.length);
      results.push(arr2[index].name)
      arr2.splice(index, 1)
    }
    while (arr2.length > 0 && Math.random() < 0.5)
    
    return results.join(", ");
  } else {
    return "...";
  }
};

/* Random Name Generator Algorithm */

// Generates a random name starting with "initial"
export function generateName(initial = "") {
  const UPPER_CASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const VOWELS = "aeiouy";
  const VOWELS_UPPER = "AEIOUY";
  const CONSONANTS = "bcdfghjklmnpqrstvwxz";
  // const LOWER_CASE_ALL = "abcdefghijklmnopqrstuvwxyz";

  let name = "";

  // No initial values -> generate random one
  if (initial.length == 0) {
    // 2/3 chance to be Consonant + vowel + consonant + vowel
    if (Math.floor(Math.random() * 3) + 1 < 3) {
      name += UPPER_CASE.charAt(Math.floor(Math.random() * UPPER_CASE.length));
      name += VOWELS.charAt(Math.floor(Math.random() * VOWELS.length));
      name += CONSONANTS.charAt(Math.floor(Math.random() * CONSONANTS.length));
      name += VOWELS.charAt(Math.floor(Math.random() * VOWELS.length));
    }
    // 1/3 chance to start with vowel
    else {
      name += VOWELS_UPPER.charAt(
        Math.floor(Math.random() * VOWELS_UPPER.length)
      );
      // Vvcv
      if (Math.floor(Math.random() * 3) + 1 == 1) {
        name += VOWELS.charAt(Math.floor(Math.random() * VOWELS.length));
        name += CONSONANTS.charAt(
          Math.floor(Math.random() * CONSONANTS.length)
        );
        name += VOWELS.charAt(Math.floor(Math.random() * VOWELS.length));
      }
      // Vcvc
      else if (Math.floor(Math.random() * 3) + 1 == 2) {
        name += CONSONANTS.charAt(
          Math.floor(Math.random() * CONSONANTS.length)
        );
        name += VOWELS.charAt(Math.floor(Math.random() * VOWELS.length));
        name += CONSONANTS.charAt(
          Math.floor(Math.random() * CONSONANTS.length)
        );
      }
      // Vcvv
      else {
        name += CONSONANTS.charAt(
          Math.floor(Math.random() * CONSONANTS.length)
        );
        name += VOWELS.charAt(Math.floor(Math.random() * VOWELS.length));
        name += VOWELS.charAt(Math.floor(Math.random() * VOWELS.length));
      }
    }

    // 50% chance to get a final letter
    if (Math.floor(Math.random() * 2) % 2 == 0) {
      // A 50/50 chance to get a final vowel vs. consonant
      if (Math.floor(Math.random() * 2) % 2 == 0) {
        name += VOWELS.charAt(Math.floor(Math.random() * VOWELS.length));
      } else {
        name += CONSONANTS.charAt(
          Math.floor(Math.random() * CONSONANTS.length)
        );
      }
    }
  }
  // Else generate a random second letter 50/50 chance to get a vowel -> go from there
  else {
    if (Math.floor(Math.random() * 2) % 2 == 0) {
      name += VOWELS.charAt(Math.floor(Math.random() * VOWELS.length));
      // Next consonant + vowel + consonant
      name += CONSONANTS.charAt(Math.floor(Math.random() * CONSONANTS.length));
      name += VOWELS.charAt(Math.floor(Math.random() * VOWELS.length));

      // 50% chance to get a final letter
      if (Math.floor(Math.random() * 2) % 2 == 0) {
        // A 50/50 chance to get a final vowel vs. consonant
        if (Math.floor(Math.random() * 2) % 2 == 0) {
          name += VOWELS.charAt(Math.floor(Math.random() * VOWELS.length));
        } else {
          name += CONSONANTS.charAt(
            Math.floor(Math.random() * CONSONANTS.length)
          );
        }
      }
    } else {
      name += CONSONANTS.charAt(Math.floor(Math.random() * CONSONANTS.length));
      // Next vowel + consonant + vowel
      name += VOWELS.charAt(Math.floor(Math.random() * VOWELS.length));
      name += CONSONANTS.charAt(Math.floor(Math.random() * CONSONANTS.length));

      // 50% chance to get a final vowel
      if (Math.floor(Math.random() * 2) % 2 == 0) {
        name += VOWELS.charAt(Math.floor(Math.random() * VOWELS.length));
      }
    }
  }

  return initial + name;
}
