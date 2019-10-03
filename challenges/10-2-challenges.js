/***
 *
 * * Javascript Arrays
 *   The first item in the array should be a "string"
 *   The second item in the array should be a function
 *   The third item in the array should be an array
 *   @example
 *   typeof [0] // "string"
 *   typeof [1] // "function"
 *   Array.isArray([2])  // "array"
 *
 *
 *  */

function createAnArray() {
    let carlArray = [];
    carlArray.push("headache");
    carlArray.push(function newHeadache() {});
    carlArray.push([]);
    return carlArray;

    // or could do
    // let array = ["", () => {}];

}

/***
 *   The function will accept two arguments: the string and the target.
 *   Uppercase the target word in the string.
 *   If the target exceeds the length of the string, return undefined.
 *
 *
 *   hint
 *   use the Split method
 *
 *   @example
 *   uppercaseTargetWord("first second third", 2) // returns "first SECOND third"
 *   uppercaseTargetWord("Javascript is cool", 3) // returns "Javascript is COOL"
 *   uppercaseTargetWord("Javascript is not cool", 5) // returns undefined
 *
 *
 *
 *  */

function uppercaseTargetWord(str, target) {
    let word = str.split(' ');
    if (word[target - 1] == undefined) {
        return undefined;
    }

    word[target - 1] = word[target - 1].toUpperCase();
    let newWords = word.join(" ");
    return newWords;
}

module.exports = {
    createAnArray,
    uppercaseTargetWord
};