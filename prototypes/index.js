const { kitties } = require('./datasets/kitties');
const { clubs } = require('./datasets/clubs');
const { mods } = require('./datasets/mods');
const { cakes } = require('./datasets/cakes');
const { classrooms } = require('./datasets/classrooms');
const { breweries } = require('./datasets/breweries');
const { nationalParks } = require('./datasets/nationalParks');
const { books } = require('./datasets/books');
const { weather } = require('./datasets/weather');
const { instructors, cohorts } = require('./datasets/turing');
const { bosses, sidekicks } = require('./datasets/bosses');
const { constellations, stars } = require('./datasets/astronomy');
const { weapons, characters } = require('./datasets/ultima');
const { dinosaurs, humans, movies } = require('./datasets/dinosaurs');






// SINGLE DATASETS
// =================================================================

// DATASET: kitties from ./datasets/kitties
const kittyPrompts = {
  orangeKittyNames() {

    // Return an array of just the names of kitties who are orange e.g.
    // ['Tiger', 'Snickers']
    const result = kitties.filter(kitty => kitty.color === 'orange').map(kitty => kitty.name)
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  sortByAge() {
    // Sort the kitties by their age

    const result = kitties.sort((a, b) => {return b.age - a.age});
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  growUp() {
    // Return an array of kitties who have all grown up by 2 years e.g.
    // [{
    //   name: 'Felicia',
    //   age: 4,
    //   color: 'grey'
    // },
    // {
    //   name: 'Tiger',
    //   age: 7,
    //   color: 'orange'
    // },
    // ...etc]

    const result = kitties.sort((a, b) => b.age - a.age).map(kitty =>  {

      kitty.age += 2
      return kitty
    })
    return result;
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: clubs from ./datasets/clubs
const clubPrompts = {
  membersBelongingToClubs() {
    // Create an object whose keys are the names of people, and whose values are
    // arrays that include the names of the clubs that person is a part of. e.g.
    // {
    //   Louisa: ['Drama', 'Art'],
    //   Pam: ['Drama', 'Art', 'Chess'],
    //   ...etc
    // }

    const result = clubs.reduce((list, club) => {
      club.members.forEach(member => {
        if(!list[member]) {
          list[member] = [];
        }
        list[member].push(club.club)

      })
        return list

    }, {});
    //console.log('the result', result)
    return result;

    // Annotation:
  }

}






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: mods from ./datasets/mods
const modPrompts = {
  studentsPerMod() {
    // Return an array of objects where the keys are mod (the number of the module)
    // and studentsPerInstructor (how many students per instructor there are for that mod) e.g.
    // [
    //   { mod: 1, studentsPerInstructor: 9 },
    //   { mod: 2, studentsPerInstructor: 11 },
    //   { mod: 3, studentsPerInstructor: 10 },
    //   { mod: 4, studentsPerInstructor: 8 }
    // ]

    const result = mods.reduce((array, course) => {
      let obj = {};
      let mod = course.mod
      let studentsPerInstructor = course.students / course.instructors;
      obj = {mod, studentsPerInstructor}
      array.push(obj);


      return array
    }, [])
    //console.log('the result', result)
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: cakes from ./datasets/cakes
const cakePrompts = {
  stockPerCake() {
    // Return an array of objects that include just the flavor of the cake and how
    // much of that cake is in stock e.g.
    // [
    //    { flavor: 'dark chocolate', inStock: 15 },
    //    { flavor: 'yellow', inStock: 14 },
    //    ..etc
    // ]

    const result = cakes.reduce((array, cake) => {
      let flavor = cake.cakeFlavor;
      let inStock = cake.inStock;

      if(!array[cake]) {
        let obj = {flavor, inStock};
        array.push(obj);
      }

      return array
    } , []);
    //console.log('le result', result)
    return result;

    // Annotation:
    // Reduce through the cakes array, if the array does not include the cakeFlavor
    // add the flavor
    // add the inStock amount
  },

  onlyInStock() {
    // Return an array of only the cakes that are in stock
    // e.g.
    // [
    //   {
    //   cakeFlavor: 'dark chocolate',
    //   filling: null,
    //   frosting: 'dark chocolate ganache',
    //   toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
    //   inStock: 15
    // },
    // {
    //   cakeFlavor: 'yellow',
    //   filling: 'citrus glaze',
    //   frosting: 'chantilly cream',
    //   toppings: ['berries', 'edible flowers'],
    //   inStock: 14
    // },
    // ..etc
    // ]

    const result = cakes.filter(cake => cake.inStock > 0);
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  totalInventory() {
    // Return the total amount of cakes in stock e.g.
    // 59

    const result = cakes.reduce((sum, cake) => {
      sum += cake.inStock


      return sum
    }, 0);
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]

    const result = cakes.reduce((allToppings, cake) => {

      cake.toppings.forEach((topping) => {
        if(!allToppings.includes(topping)) {
          allToppings.push(topping)
        }
      })

      return allToppings
    }, []);
    //console.log('list of toppings', result)
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  groceryList() {
    // I need to make a grocery list. Please give me an object where the keys are
    // each topping, and the values are the amount of that topping I need to buy e.g.
    // {
    //    'dutch process cocoa': 1,
    //    'toasted sugar': 3,
    //    'smoked sea salt': 3,
    //    'berries': 2,
    //    ...etc
    // }

    const result = cakes.reduce((list, cakes) => {
      cakes.toppings.forEach(topping => {
        if(!list[topping]) {
          list[topping] = 0
        }
        list[topping]++
      })

      return list
    }, {});
    console.log('grocery list', result)
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: classrooms from ./datasets/classrooms
const classPrompts = {
  feClassrooms() {
    // Create an array of just the front-end classrooms. e.g.
    // [
    //   { roomLetter: 'A', program: 'FE', capacity: 32 },
    //   { roomLetter: 'C', program: 'FE', capacity: 27 },
    //   { roomLetter: 'E', program: 'FE', capacity: 22 },
    //   { roomLetter: 'G', program: 'FE', capacity: 29 }
    // ]

    const result = classrooms.filter(classroom => classroom.program === 'FE');
    console.log(result);
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  totalCapacities() {
    // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    // {
    //   feCapacity: 110,
    //   beCapacity: 96
    // }

    const result = classrooms.reduce((obj, currentClassroom) => {
      if (currentClassroom.program === 'FE') {
        obj['feCapacity'] += currentClassroom.capacity;
      } else if (currentClassroom.program === 'BE') {
        obj['beCapacity'] += currentClassroom.capacity;
      }


      return obj;
    }, {
      feCapacity: 0,
      beCapacity: 0
    });
    //console.log(result)
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  sortByCapacity() {
    // Return the array of classrooms sorted by their capacity (least capacity to greatest)

    const result = classrooms.sort((a, b) => {return a.capacity - b.capacity});
    console.log(result);
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: books from './datasets/books

const bookPrompts = {
  removeViolence() {
    // return an array of all book titles that are not horror or true crime. Eg:

    //  ['1984', 'The Great Gatsby', 'Lord of the Flies', 'Harry Potter and the Sorcerer\'s Stone',
    //   'The Hitchhiker\'s Guide to the Galaxy', 'Flowers for Algernon', 'Slaughterhouse-Five',
    //   'The Handmaid\'s Tale', 'The Metamorphosis', 'Brave New World', 'Life of Pi',
    //   'The Curious Incident of the Dog in the Night - Time', 'The Bell Jar',
    //   'Catch-22', 'Treasure Island']
    const result = books.filter(currentBook => currentBook.genre !== 'Horror' && currentBook.genre !== 'True Crime').map(book => book.title);
    // console.log('the result', result)
    return result;

    // Annotation:
    // Write your annotation here as a comment
    // Filter through the books array to make a new array of all the books.
    //      that are not horror or true crime
    // Map through those books just to return the title

  },
  getNewBooks() {
    // return an array of objects containing all books that were
    // published in the 90's and 00's. Inlucde the title and the year Eg:

    // [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
    //  { title: 'Life of Pi', year: 2001 },
    //  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]

    const booksFromThe90sAnd00s = books.filter(currentBook => currentBook.published >= 1990 && currentBook.published < 2010)
    const booksFromThePast = booksFromThe90sAnd00s.reduce((acc, currentBook) => {
        let obj = {'title': currentBook.title, 'year': currentBook.published}
        acc.push(obj)
        return acc
    }, [])
    return booksFromThePast;

    // Annotation:
    // Write your annotation here as a comment
    // Filter through the books array to make an array of all books that
    //    were published between 1990 -2000
    // Reduce through the new array of books to make an array of objects
    //    where the objects includes the currentBook.title and the currentBook.published
  }

};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: weather from './datasets/weather

const weatherPrompts = {
  getAverageTemps() {
    // return an array of all the average temperatures. Eg:
    // [ 40, 40, 44.5, 43.5, 57, 35, 65.5, 62, 14, 46.5 ]

    const result = weather.map(city => (city.temperature.high + city.temperature.low) / 2 );
    //console.log(result);
    return result;

    // Annotation:
    //
  },

  findSunnySpots() {
    // Return an array of sentences of the locations that are sunny
    // and mostly sunny. Include the location and weather type. Eg:
    // [ 'Atlanta, Georgia is sunny.',
    // 'New Orleans, Louisiana is sunny.',
    // 'Raleigh, North Carolina is mostly sunny.' ]

    const result = weather.filter(city => city.type === 'sunny' || city.type === 'mostly sunny').map(area => `${area.location} is ${area.type}.`);
    console.log('le result', result)
    return result;

    // Annotation:
    // Filter through weather array to grab Sunny and Mostly Sunny cities
    // For each city that fits this condition map through and create a string with
    // `${city.location} is ${city.type}`
  },

  findHighestHumidity() {
    // Return the location with the highest humidity. Eg:
    // {
    //   location: 'Portland, Oregon',
    //   type: 'cloudy',
    //   humidity: 84,
    //   temperature: { high: 49, low: 38 }
    // }

    const sortedByHumidity = weather.sort((a , b) => {return b.humidity - a.humidity});
    // console.log('sortedByHumidity:', sortedByHumidity[0])
    return sortedByHumidity[0];

    // Annotation:
    // Write your annotation here as a comment

  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------


// DATASET: nationalParks from ./datasets/nationalParks

const nationalParksPrompts = {
  getParkVisitList() {
    /// Return an object containing the names of which parks I need to visit
    // and the ones I have already visited eg:
    // {
    //   parksToVisit: ["Yellowstone", "Glacier", "Everglades"],
    //   parksVisited: ["Rocky Mountain", "Acadia", "Zion"]
    //}

    const result = nationalParks.reduce((acc, park) => {

      if(park.visited) {
        acc.parksVisited.push(park.name);
      } else {
        acc.parksToVisit.push(park.name);
      }

      return acc
    }, {
        parksToVisit: [],
        parksVisited: []
    });
    console.log(result);
    return result;

    // Annotation:
    // Reduce.
  },

  getParkInEachState() {
    // Return an array of objects where the key is the state and the value is its National Park
    // eg: [ { Colorado: 'Rocky Mountain' },
    // { Wyoming: 'Yellowstone' },
    // { Montana: 'Glacier' },
    // { Maine: 'Acadia' },
    // { Utah: 'Zion' },
    // { Florida: 'Everglades' } ]





// **** Question for mentor ****



    // const result = nationalParks.reduce((acc, park) => {
    //   let obj = {}
    //   obj = {park.name,}
    //
    //
    //
    //
    // }, []);
    // console.log(result)
    // return result;

    // Annotation:
    // reduce into an obj
  },



  getParkActivities() {
    // Return an array of all the activities I can do
    // in a National Park. Make sure to exclude duplicates. eg:
    // [ 'hiking',
    //   'shoeshoing',
    //   'camping',
    //   'fishing',
    //   'boating',
    //   'watching wildlife',
    //   'cross-country skiing',
    //   'swimming',
    //   'bird watching',
    //   'canyoneering',
    //   'backpacking',
    //   'rock climbing' ]

    const result = nationalParks.reduce((activities, park) => {
      park.activities.forEach((activity, index) => {
        if(!activities.includes(activity)) {
          activities.push(activity)
        }
      })

      return activities
    }, []);
    console.log('le result', result);
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};



// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: breweries from ./datasets/breweries
const breweryPrompts = {
  getBeerCount() {
    // Return the total beer count of all beers for every brewery e.g.
    // 40

    const result = breweries.reduce((total, brewery) => {
      brewery.beers.forEach((beer, index) => {
        total++
      })


      return total
    }, 0);
    console.log(result)
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  getBreweryBeerCount() {
    // Return an array of objects where each object has the name of a brewery
    // and the count of the beers that brewery has e.g.
    // [
    //  { name: 'Little Machine Brew', beerCount: 12 },
    //  { name: 'Ratio Beerworks', beerCount: 5},
    // ...etc.
    // ]

    const result = breweries.reduce((count, brewery) => {
      name = brewery.name;
      beerCount = 0;
      obj = {};

      brewery.beers.forEach((beer, index) => {
        beerCount++;
      })

      obj = {name, beerCount}
      count.push(obj);


      return count
    }, []);
    console.log(result)
    return result;

    // Annotation:
    // Reduce. Premake the acc.
  },

  findHighestAbvBeer() {
    // Return the beer which has the highest ABV of all beers
    // e.g.
    // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }
    let abv = 0;

    const result = breweries.reduce((highest, brewery) => {
      let name, type, ibu;


      brewery.beers.forEach((beer, index) => {
        if(beer.abv > abv) {
          name = beer.name;
          type = beer.type;
          abv = beer.abv;
          ibu = beer.ibu;
        }
        highest = {name, type, abv, ibu};
      })


      return highest;
    }, {});
    console.log(result);
    return result;

    // Annotation:
    // Reduce. forEach
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DOUBLE DATASETS
// =================================================================

// DATASET: instructors, cohorts from ./datasets/turing
const turingPrompts = {
  studentsForEachInstructor() {
    // Return an array of instructors where each instructor is an object
    // with a name and the count of students in their module. e.g.
    // [
    //  { name: 'Pam', studentCount: 21 },
    //  { name: 'Robbie', studentCount: 18 }
    // ]

    const result = instructors.reduce((total, instructor) => {
      let name, studentCount;
      let obj = {};

      cohorts.forEach((cohort, index) => {
        if(instructor.module === cohort.module) {
          name = instructor.name
          studentCount = cohort.studentCount
          obj = {name, studentCount};
          total.push(obj);
        }

      })

      //console.log('le total', total)
      return total
    }, []);
    return result;

    // Annotation:
    // reduce, forEach
  },

  studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    //{
    //   cohort1806: 15,
    //   cohort1804: 7,
    //   cohort1803: 10,
    //   cohort1801: 9
    // }
    //



//**** QUESTION FOR MENTOR **********//

    const cohortAverages = cohorts.reduce((averagesByCohort, cohort) => {
      const instructorsPerModule = instructors.filter(instructor => {
        return instructor.module === cohort.module
      }).length;
      const cohortName = 'cohort' + cohort.cohort;
      const studentTeacherRatio = cohort.studentCount / instructorsPerModule

      averagesByCohort[cohortName] = studentTeacherRatio


      return averagesByCohort
    }, {});


    console.log(cohortAverages)
    return cohortAverages

    // Annotation:
    // Reduce. Add up how many instructors each cohort has. Divide by the number of students in the same cohort.
  },

  modulesPerTeacher() {
    // Return an object where each key is an instructor name and each value is
    // an array of the modules they can teach based on their skills. e.g.:
    // {
    //     Pam: [2, 4],
    //     Brittany: [2, 4],
    //     Nathaniel: [2, 4],
    //     Robbie: [4],
    //     Leta: [2, 4],
    //     Travis: [1, 2, 3, 4],
    //     Louisa: [1, 2, 3, 4],
    //     Christie: [1, 2, 3, 4],
    //     Will: [1, 2, 3, 4]
    //   }

    const result = instructors.reduce((acc, currentInstructor) => {
      //console.log('current instructor', currentInstructor)
      console.log(currentInstructor.name)
      acc[currentInstructor.name] = []
      //  console.log(acc)

      cohorts.forEach(cohort => {
        cohort.curriculum.forEach(skill =>  {
          if(currentInstructor.teaches.includes(skill) && !acc[currentInstructor.name].includes(cohort.module)) {
            //push this corresponding module to the
            //to the acc key of currentInstructor array
            acc[currentInstructor.name].push(cohort.module)
          }
        })
      })


      console.log('acc', acc)

      return acc
    }, {});
    return result;

    // Annotation:
    // Goal: Return 1 object: Reduce.
    // Iterate through the instructors array (reduce),
    // Goal: Make a key of instructor.name
        // If instructor.name is not included in the obj/acc
        // !acc[instructor.name]
        // then make a new entry with that instructor name as the key
    // Goal: Assign a value of a blank array
    // that match the instructor.teaches array
        // and have the value be an empty array
    // go into cohorts array, for each index in curriculum,
    // if that string is included in the instructor.teachers
    // push that cohort.module into the instructors array
  },

  curriculumPerTeacher() {
    // Return an object where each key is a curriculum topic and each value is
    // an array of instructors who teach that topic e.g.:
    // {
    //   html: [ 'Travis', 'Louisa' ],
    //   css: [ 'Travis', 'Louisa' ],
    //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
    //   recursion: [ 'Pam', 'Leta' ]
    // }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: bosses, sidekicks from ./datasets/bosses
const bossPrompts = {
  bossLoyalty() {
    // Create an array of objects that each have the name of the boss and the sum
    // loyalty of all their sidekicks. e.g.:
    // [
    //   { bossName: 'Jafar', sidekickLoyalty: 3 },
    //   { bossName: 'Ursula', sidekickLoyalty: 20 },
    //   { bossName: 'Scar', sidekickLoyalty: 16 }
    // ]

    const upperCaseBossNames =  Object.keys(bosses).map((currentBoss) => bosses[currentBoss].name);
    //console.log(upperCaseBossNames)
    const sidekickLoyaltyPerBoss = upperCaseBossNames.reduce((acc, currentBoss) => {
      // let bossName = currentBoss;
      let sidekickLoyalty = 0;
      sidekicks.forEach(currentSidekick => {
        if (currentSidekick.boss === currentBoss) {
          sidekickLoyalty += currentSidekick.loyaltyToBoss
        }
      })
      // let obj = {bossName, sidekickLoyalty};
      acc.push({bossName: currentBoss, sidekickLoyalty})

      console.log('the acc', acc)
      return acc

    }, []);

    return sidekickLoyaltyPerBoss;

    // Annotation:
    // Write your annotation here as a comment
    // Object.keys(bosses) to retrieve an array of boss names
    // Reduce the array of names check through the bosses object
      // Push the bosses[currentBoss].name into acc
      // This should return an almost identical array of names that are now
          //uppercase
    //Reduce through the uppercaseNamesArray
    // Declare bossName to currentBoss
    // decare sidekickLoyalty = 0;
    // Reduce through the array of boss names
    // For each through the sidekicks array
        // if currentSidekick.boss === currentBoss
        // sidekickLoyalty += currentSideKick.loyaltyToBoss
    // Outside the forEach,
    // Create a new obj = {bossName, sidekickLoyalty}
    // acc.push(obj)

  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: constellations, stars } from ./datasets/astronomy
const astronomyPrompts = {
  starsInConstellations() {
    // Return an array of all the stars that appear in any of the constellations
    // listed in the constellations object e.g.
    // [
    //   { name: 'Rigel',
    //     visualMagnitude: 0.13,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 860,
    //     color: 'blue' },
    //   { name: 'Betelgeuse',
    //     visualMagnitude: 0.5,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 640,
    //     color: 'red' }
    // ]



    const starsInConstellations = stars.reduce((newArr, star) => {
      const keyNames = Object.keys(constellations);
      console.log('the key names', keyNames)
      keyNames.forEach(name => {
        if (constellations[name].stars.includes(star.name)) {
          newArr.push(star)
        }

      })
      return newArr;
    }, [])

    console.log(starsInConstellations)
    return starsInConstellations
    // Annotation:

    // Iterate through the stars array and access each 'star' --> reduce
    // Initilize accumulator as an empty array (Output)
    // Assign keys in constellation dataset to new 'keyNames' array --> Object.keys()
    // Iterate through key names and for each 'name', run conditional to check if it has current star name --> forEach
    // In our conditional, access constellation element with that key name ---> constellation[name]
    // check if its 'stars' property (array) includes the current star's 'name' (string)
    // if truthy, push current element into access
    // return acc




    // const result = stars.reduce((arrayOfStars, currentStar) => {
    //   console.log('constellation name', currentStar.constellation)
    //   console.log('hello', constellations[currentStar.constellation]);
    //   if (constellations[currentStar.constellation].stars.includes(currentStar.name)) {
    //     arrayOfStars.push(currentStar)
    //   }
    //
    //
    //   return arrayOfStars
    // }, []);
    // return result;

    // Annotation:
    // Write your annotation here as a comment
    // Reduce over the stars array
    // if constellations[currentStar.constellation] = currentStar.constellation
    // then push currentStar into the reduce accumulator
  },

  starsByColor() {
    // Return an object with keys of the different colors of the stars,
    // whose values are arrays containing the star objects that match e.g.
    // {
    //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
    //   white: [{obj}, {obj}],
    //   yellow: [{obj}, {obj}],
    //   orange: [{obj}],
    //   red: [{obj}]
    // }

// Is there a way to do this dynamically?
  const result = stars.reduce((acc, star) => {
    if (!acc[star.color]) {
      acc[star.color] = []
    }

    acc[star.color].push(star)



    return acc;
  }, {})


  console.log('le result', result)
  return result;


    // const result = stars.reduce((colorObj, star) => {
    //   if (star.color === 'blue') {
    //     colorObj['blue'].push(star)
    //   } else if (star.color === 'white') {
    //     colorObj['white'].push(star);
    //   } else if (star.color === 'yellow') {
    //     colorObj['yellow'].push(star);
    //   } else if (star.color === 'orange') {
    //     colorObj['orange'].push(star)
    //   } else if (star.color === 'red') {
    //     colorObj['red'].push(star)
    //   }
    //
    //
    //
    //   return colorObj;
    // }, {
    //   blue: [],
    //   white: [],
    //   yellow: [],
    //   orange: [],
    //   red: []
    //
    // })
    //
    // console.log('the result', result);
    // return result;

    // Annotation:
    // Write your annotation here as a comment
    // Reduce through the stars array -- reduce
    // Make the acc include blue, white, yellow, orange, and red
    // check the color of the star
    // if the color of the star matches a key in the acc
    // then push that star to the array in the value of that color
  },

  constellationsStarsExistIn() {
    // Return an array of the names of the constellations that the brightest stars are part of e.g.

    //  [ "Canis Major",
    //    "Carina",
    //    "Boötes",
    //    "Auriga",
    //    "Orion",
    //    "Lyra",
    //    "Canis Minor",
    //    "The Plow",
    //    "Orion",
    //    "The Little Dipper" ]


    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: charaters, weapons from ./datasets/ultima
const ultimaPrompts = {
  totalDamage() {

    // Return the sum of the amount of damage for all the weapons that our characters can use
    // Answer => 113

    const result = characters.reduce((acc, currentCharacter) => {
      const weaponsDamage = currentCharacter.weapons.reduce((weaponAcc, currentWeapon) => {
       weaponAcc += weapons[currentWeapon].damage

        //console.log('weaponAcc', weaponAcc)
        return weaponAcc
      }, 0)

        acc += weaponsDamage

        return acc
    } , 0);
    return result;

    // Annotation:
    // Write your annotation here as a comment
    // Iterate in the characters array --> Reduce
    // As I am reducing through each character's weapons array
    // Use the weapon name to check the weapons object, to access that weapon
    // If the names are the same, then add weapon.damage to the acc

  },

  charactersByTotal() {

    // Return the sum damage and total range for each character as an object.
    // ex: [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}

    const result = characters.map(currentCharacter => {

      let characterWeaponObj = currentCharacter.weapons.reduce((statsObj, currentWeapon) => {
        statsObj.damage += weapons[currentWeapon].damage
        statsObj.range += weapons[currentWeapon].range

        //console.log('statsObj', statsObj)
        return statsObj
      }, {
        damage: 0,
        range: 0,
      });
      let obj = {[currentCharacter.name]: characterWeaponObj}
      return obj;
    });
    console.log('le result', result)
    return result;

    // Annotation:
    // Write your annotation here as a comment
    // Input: characters array
    // Output: an array of objects, with the key being the character name
    // and the value is an object with keys of either damager or ranges
    // and the value of their totals
    //
    // Map through each character in the characters array ---> Map
    // For each character, make a new object
    // key: character.name
    // value: {damage: totalDmg, range: totalRange)


  },
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: dinosaurs, humans, movies from ./datasets/dinosaurs
const dinosaurPrompts = {
  countAwesomeDinosaurs() {
    // Return an object where each key is a movie title and each value is the
    // number of awesome dinosaurs in that movie. e.g.:
    // {
    //   'Jurassic Park': 5,
    //   'The Lost World: Jurassic Park': 8,
    //   'Jurassic Park III': 9,
    //   'Jurassic World': 11,
    //   'Jurassic World: Fallen Kingdom': 18
    // }
    //2nd try

    const result = movies.reduce((acc, currentMovie) => {
      acc[currentMovie.title] = 0;
      currentMovie.dinos.forEach(currentDino => {
        if (dinosaurs[currentDino].isAwesome) {
          acc[currentMovie.title]++
        }
      })

      return acc
    }, {});
    console.log('the result', result)
    return result;


    // 1st way

    // const result = movies.reduce((acc, currentMovie) => {
    //   const dinoCount = currentMovie.dinos.reduce((count, currentDino) => {
    //     if (dinosaurs[currentDino].isAwesome) {
    //       count++
    //     }
    //
    //     //console.log('count', count);
    //     return count
    //   }, 0)
    //     console.log('current movie', currentMovie.title)
    //
    //       //currentMovie.title
    //       acc[currentMovie.title] = dinoCount
    //
    //   //  console.log(acc)
    //   return acc
    // }, {});
    // return result;

    // Annotation:
    // Write your annotation here as a comment
    // Iterate through the movies array --> reduce
    // Iterate through each movie's dinos ---> reduce
    // For each movie's dino, find the matching dinosaur in the dinosaurs object by
    //    using the currentDino
    // If Check the dinosaurs[currentDino].is awesome === true
    //  then we add 1 to the accumulator for the current movie
    // If 1st reduce acc does not include the current movie
    //  then create the current movie with the value of amount of Awesome dino's
    //  from the 2nd acc
  },

  averageAgePerMovie() {
    /* Return an object where each key is a movie director's name and each value is
        an object whose key is a movie's title and whose value is the average age
        of the cast on the release year of that movie.
      e.g.:
      {
        'Steven Spielberg':
          {
            'Jurassic Park': 34,
            'The Lost World: Jurassic Park': 37
          },
        'Joe Johnston':
          {
            'Jurassic Park III': 44
          },
        'Colin Trevorrow':
          {
            'Jurassic World': 56
           },
        'J. A. Bayona':
          {
            'Jurassic World: Fallen Kingdom': 59
          }
      }
    */

    const result = movies.reduce((acc, currentMovie) => {
      if (!acc[currentMovie.director]) {
        acc[currentMovie.director] = {[currentMovie.title]: 0}
      } else {
        acc[currentMovie.director][currentMovie.title] = 0
      }

      const totalAgeOfAllCast = currentMovie.cast.reduce((totalAge, currentCastMember) => {
        totalAge += currentMovie.yearReleased - humans[currentCastMember].yearBorn

        return totalAge
      }, 0)
      acc[currentMovie.director][currentMovie.title] = Math.floor(totalAgeOfAllCast / currentMovie.cast.length)
      return acc
    }, {})
    return result;

    // Annotation:
    // Write your annotation here as a comment
    // iterate through the movies array --> reduce;
    // if acc does not include currentMovie.director
    //   then add acc[currentMovie.director] = {currentMovie.title = 0}
    // if acc does include currentMovie.director.currentMovie.title
    //  then add the currentMovie.title
    // iterate through the currentMovie.cast ---> reduce
    // if (humans[currentCastMember])
    //  then let age = humans[currentCastMember.yearBorn] - currentMovie.yearReleased
    // add that age to the ageAcc
    // Once done iterating through all cast Members of the current movie
    // divide ageAcc / currentMovie.cast.length

  },

  uncastActors() {
    /*
    Return an array of objects that contain the names of humans who have not been cast in a Jurassic Park movie (yet),
    //their nationality, and their imdbStarMeterRating. The object in the array should be sorted alphabetically by nationality.

    e.g.
      [{
        name: 'Justin Duncan',
        nationality: 'Alien',
        imdbStarMeterRating: 0
      },
      {
        name: 'Karin Ohman',
        nationality: 'Chinese',
        imdbStarMeterRating: 0
      },
      {
        name: 'Tom Wilhoit',
        nationality: 'Kiwi',
        imdbStarMeterRating: 1
      }, {
        name: 'Jeo D',
        nationality: 'Martian',
        imdbStarMeterRating: 0
      }]


    */
    // WRONG WAY
    //
    //
    let castActors = movies.reduce((acc, curMovie) => {
      curMovie.cast.forEach(member => {
        if(!acc.includes(member)){
          acc.push(member);
        }
      });
      return acc;
    }, []);
    let humanNames = Object.keys(humans);
    let result = humanNames.reduce((acc, curHuman) => {
      if(!castActors.includes(curHuman)) {
        let obj = {
          name : curHuman,
          nationality: humans[curHuman].nationality,
          imdbStarMeterRating: humans[curHuman].imdbStarMeterRating,
        };
        acc.push(obj);
      }
      return acc;
    }, []);
    //let sortedUncastActors =
    const newResult = result.sort((a,b) => {
      // console.log('a nationality', a.nationality)
      // console.log('b nationality', b.nationality)
      {return a.nationality.localeCompare(b.nationality)}
    });
    // console.log(result);
    return newResult;


    // const namesOfAllHumans = Object.keys(humans)
    // const uncast = namesOfAllHumans.reduce((acc, currentHuman) => {
    //   var name;
    //   let obj;
    //     movies.forEach(currentMovie => {
    //       if (!currentMovie.cast.includes(currentHuman)) {
    //         //console.log('current human', currentHuman)
    //         name = currentHuman;
    //         let nationality = humans[currentHuman].nationality
    //         //console.log(humans[currentHuman].nationality)
    //         let imdbStarMeterRating = humans[currentHuman].imdbStarMeterRating;
    //         //console.log('current human imdb rating', humans[currentHuman].imdbStarMeterRating)
    //         obj = {name, nationality, imdbStarMeterRating}
    //         //console.log('needed obj', obj)
    //       }
    //     })
    //     if (!acc.includes(obj)) {
    //       acc.push(obj);
    //     }
    //
    //
    //
    //   console.log('the acc', acc)
    //     return acc
    // }, [])
    // //console.log('uncast', acc)
    // const sortCast = uncast.sort((a, b) => a.nationality.localeComapre(b.nationality))
    // return sortCast;

    // Annotation:
    // Write your annotation here as a comment
    // Object.keys(humans) to retrieve all humans in the humans object
    // Reduce through the human names array from above
    // For each through the movies each, for each currentMovie.cast
        // if (!currentMovie.cast.includes(currentHuman))
          // Does it stop at the single movie? --- mental note
          // let name = NotAppearInMovie = curentHuman
    // let nationality = humans[currentHuman].nationality
    // let imdbStarMeterRating = humans[currentHuman].imdbStarMeterRating
    // let obj = {actor, nationality, imdbStarMeterRating}
    // acc.push(obj)
  },

  actorsAgesInMovies() {
    /*
    Return an array of objects for each human and the age(s) they were in the movie(s) they were cast in, as an array of age(s). Only include humans who were cast in at least one movie.

    e.g.
    [ { name: 'Sam Neill', ages: [ 46, 54 ] },
      { name: 'Laura Dern', ages: [ 26, 34 ] },
      { name: 'Jeff Goldblum', ages: [ 41, 45, 63, 66 ] },
      { name: 'Richard Attenborough', ages: [ 70, 74, 92, 95 ] },
      { name: 'Ariana Richards', ages: [ 14, 18 ] },
      { name: 'Joseph Mazello', ages: [ 10, 14 ] },
      { name: 'BD Wong', ages: [ 33, 55, 58 ] },
      { name: 'Chris Pratt', ages: [ 36, 39 ] },
      { name: 'Bryce Dallas Howard', ages: [ 34, 37 ] } ]
    */

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};

module.exports = {
  breweryPrompts,
  turingPrompts,
  clubPrompts,
  bossPrompts,
  classPrompts,
  modPrompts,
  kittyPrompts,
  cakePrompts,
  astronomyPrompts,
  ultimaPrompts,
  nationalParksPrompts,
  weatherPrompts,
  bookPrompts,
  dinosaurPrompts
};
