/**
 * Add three more programming languages and return the languages array
 * @return {array} an array with four items
 */

function createAnArray() {
    let array = ["JavaScript"]; // Do not change this line
    /* Add three more items to the array here */
    // const array = [];
    array.push("CSS");
    array.push("HTML");
    array.push("java");

    return array;
}

/**
 *  Return BMW by accessing a property from the array of cars
 *
 *  @return {string} BMW
 */

function accessingAnArray() {
    const cars = ["BMW", "Honda", "Civic"]; // Do not change this line
    // Code here
    // let bad = cars[0];
    return cars[0];
}

/***
 * Create an array that contain two functions:
 * 1) the first function will add two arguments
 * 2) the second function will subtract two arguments
 * @returns {array} the array of functions
 *
 * @example
 * addFunctionsIntoArray()[0](10, 10) // 20;
 * addFunctionsIntoArray()[1](10, 10) // 0;
 */


function addFunctionsIntoArray() {
    // Create and return an array here 
    let add2 = (arg1, arg2) => arg1 + arg2;
    let sub2 = (arg1, arg2) => arg1 - arg2;
    const array = [add2, sub2];
    return array;
    // or could do 


    // const sum = addFunctionsIntoArray();
    // const difference = addFunctionsIntoArray();
    // return sum(), difference();

    // const numbers = [10, 10];
    // let adding = (numbers[0] + numbers[1]);
    // let subtracting = (numbers[0] - numbers[1]);
    // return adding;
    // return subtracting;

}

/**
 * Loop through the array using a for loop (or for ... of loop) and return the highest number
 * @param  { array }
 * @returns { number } the highest number that was in the array
 * @example
 * highestNumber([1, 10, 2, 3, 4]) // 10
 * highestNumber([-1, -5, -4]) // -1
 *
 **/
function highestNumber(array) {
    return Math.max(...array); // so easy and it works.
    // or can do
    // const newArray = [...array].sort((a, b) => b - a));
}
//    this was copied from google search and it did NOT work
//  for (let arrayIndex = 0; arrayIndex < arr.length; arrayIndex++)
//         for (let subArrayIndex = 0; subArrayIndex < arr[arrayIndex].length; subArrayIndex++)
//             if (arr[arrayIndex][subArrayIndex] > highestNumber[arrayIndex])
//                 highestNumber[arrayIndex] = arr[arrayIndex][subArrayIndex];
//     return highestNumber;
// }


/**
 * Combine an array by using the spread operator
 * @param  {array} array1
 * @param  {array} array2
 * @returns {array} an array that combines array1 and array2
 * @example
 * combineArray(['Japan','China','India'], ['USA','UK']) // ['Japan','China','India','USA','UK']
 **/

function combineArray(array1, array2) {
    let newArray = array1.concat(array2);
    return newArray;
    // return (array1, array2);
}



/**
 * Given an array of objects, where each object has an ID,
 * loop through an array using a for loop (or for ... of loop).
 * Return the object that matches a given ID.
 *
 * Once the object is found, you must break out of the loop for optimization purposes.
 * To Pass this challenge, break  must be used.
 *
 * @param  {array} arr
 * @param  {number} id
 * @returns {object} with the matching id
 *
 * @example
 * const people = [{
 *    id: 10,
 *    firstName: 'John',
 *    lastName: 'Smith'
 * },{
 *    id: 20,
 *    firstName: 'Cookie',
 *    lastName: 'Monster'
 * },{
 *    id: 30,
 *    firstName: 'Jane',
 *    lastName: 'Doe'
 * }
 * },{
 *    id: 40,
 *    firstName: 'Tom',
 *    lastName: 'Hardy'
 * }];
 * findAndAbort(people, 20); // { id: 20, firstName: 'Cookie', lastName: 'Monster' }
 *
 * // Please note, the loop never iterates over the last item, because we found our object. There is no need to continue looping.
 */

// function findAndAbort(arr, id) {
//     let obj = {};
//     for (let i 0; i < arr.length; i++) {
//         if (arr[i].id === id) {
//             obj = {
//                 id: arr[i].id,
//                 firstName: arr[i].firstName,
//                 lastName: arr[i].lastName
//             };
//             break;
//         }
//     }
//     return obj;
// }

// or could do...

function findAndAbort(arr, id) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        const myPerson = arr[i];
        if (myPerson.id === id) {
            obj = myPerson;
            break;
        }
    }
    return obj;
}


/**
 * A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., madam or racecar.
 * Checks to see if a string is a palindrome.
 * Use the split and join methods to solve this problem
 * @param  {[string]}  string
 * @return {Boolean}
 
 */

function isPalindrome(str) {
    let forward = str.split("");
    let backward = str.split("").reverse();
    return forward.join('') === backward.join('');
}

/***
 * Use sets to remove duplicate elements from an array
 * @return {array}
 */


//STOP HERE FOR WEDNESDAY 


function removeDuplicates() {
    let numbers = [2, 3, 4, 4, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 5, 32, 3, 4, 5]; // You can change this line
    let myNumbers = new Set(numbers);

    /** Return the an array of unique values */
    // let newNumbers = vals.sort().reduce(function(a, b) { if (b != a) a.unshift(b); return a }, [])
    return [...myNumbers];
}

/**
 * Return the value for hat inside clothes (which should be ball cap)
 * @return {string} type of hat
 */
function accessObject() {
    // Do not change clothes here
    let clothes = {
        hat: "ballcap",
        shirt: "jersey",
        shoes: "cleats"
    };
    // Only change code below this line
    return (clothes.hat);
}

/**
 *   Update the object to contain your first and last name.
 *   Add at least three skills inside the array
 *   @return {object} student
 */

function createStudentObject() {
    // Do not change student here
    let student = {
        firstName: "",
        lastName: "",
        skills: []
    };
    // Add code here
    student.firstName = "Carl";
    student.lastName = "Wirth";
    student.skills = ["Driving", "Mechanics", "Blacksmithing"];

    return student;
}

/**
 * Make an object "myDog" that represents a dog. It should contain the properties
 * "name", "legs", "tails" and "owners". Each should have a value.
 * "Owners" should be an array with a list of owner names.
 * @return {object}
 */

function createDogObject() {
    let myDog = {
        name: "",
        legs: "",
        tails: "",
        owners: [],
    }
    return myDog;
}

/**
 *  Using Object.keys, return all the properties contained in the object.
 *  The properties are name, legs, tails and friends.
 *
 *  @return {array}
 */

function returnObjectProperties() {
    // Do not change dog here
    let dog = {
        tail: 1,
        legs: 4,
        friends: ["Rusty", "Sparky"],
        name: "Rocket"
    };
    // Add code here
    // hint you need to return an array 
    let doggie = Object.keys(dog);
    return doggie;
}

/**
 * Combine two objects into one
 * @param  {object} obj1
 * @param  {object} obj2
 * @return {object} obj1 and obj2 combined
 */

function combineObject(obj1, obj2) {
    const newObject = {...obj1, ...obj2 };
    return newObject;
}
// let newArray = obj1.concat(obj2);
// return newArray;
// const output = ([obj1][obj2]);
// const output = ([obj1] + [obj2]);
// let output = ([obj1] + [obj2]);
// const output = obj1 + obj2;
// const output = [obj1] + [obj2]; 
// return combineObject[0] + [1];
// let output = combineObject[0] + combineObject[1];
// let output = (combineObject[0] + combineObject[1]);
// const output = (combineObject[0] + combineObject[1]);


// Console.log(output);


/**
 * Find a record with the matching id in a collection of records.
 * If the value is truthy, then swap out one of the records values with a new property.
 * If the original value is an array, it should add the new value to the array.
 *
 *  If prop is "tracks" but the album doesn't have a "tracks" property,
 *  create an empty array before adding the new value to the album's corresponding property
 *
 *  If prop is "tracks" and value isn't empty (""), push the value
 *  onto the end of the album's existing tracks array
 *
 *  If value is empty (""), delete the given prop property from the album.
 *
 * @param {Number} id what record to change
 * @param {String} property what property to replace
 * @param {String} value new value to replace with
 *
 *  @example
 *  updateRecords(5439, "artist", "ABBA"); // artist should be "ABBA"
 *  updateRecords(5439, "tracks", "Take a Chance on Me"); // tracks should be ["Old Track", "Take a Chance on Me""]
 *  updateRecords(2548, "artist", ""); // artist should not be set
 *  updateRecords(1245, "tracks", "Addicted to Love"); // tracks should be ["Old Track", "Addicted to Love""]
 *  updateRecords(2468, "tracks", "Free"); // tracks should have "1999"as the first element.
 *  updateRecords(2548, "tracks", ""); // tracks should not change
 *  updateRecords(1245, "album", "Riptide"); // album should be "Riptide"
 *
 *
 */

function updateRecords(id, prop, value) {
    // Do not change collection here

    let collection = {
        // id
        "2548": {
            album: "Slippery When Wet",
            artist: "Bon Jovi",
            tracks: ["Let It Rock", "You Give Love a Bad Name"]
        },
        // id
        "2468": {
            album: "1999",
            artist: "Prince",
            tracks: ["1999", "Little Red Corvette"]
        },
        // id
        "1245": {
            artist: "Robert Palmer",
            tracks: []
        },
        // id
        "5439": {
            album: "ABBA Gold"
        }
    };
    // Only change the code after this line
    // Logic Here
}

module.exports = {
    createAnArray,
    accessingAnArray,
    highestNumber,
    isPalindrome,
    createDogObject,
    createStudentObject,
    returnObjectProperties,
    combineArray,
    accessObject,
    combineObject,
    removeDuplicates,
    updateRecords,
    findAndAbort,
    addFunctionsIntoArray
};