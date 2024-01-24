/* const removeFromArray = function(arr, ...theArgs) {

    let outputArr = arr;

    // Iterate through all values to be removed

    for (i = 0; i < theArgs.length; i++) {

        let removeThis = theArgs[i];

        // Compare all values to be removed individually, iterated through all
        // values in the provided array

        for (j = 0; j < arr.length; j++) {
            
            if (removeThis === arr[j]) {
                
                outputArr.splice(j,1);

            }
        }
    }

    return outputArr;

}; */

// Alternate more efficient method

const removeFromArray = function(arr, ...theArgs) {

    //  Filter creates a new array with array elements that pass a test.
    //  The filter method uses a callback function we have designed here as an
    //  arrow function.

    // Includes allows us to check if an element is present in an array.
    // We check individually if the elements of arr are NOT included in theArgs.
    // If this returns true on each check, this element is passed into the new
    // array created by the filter method.
    // N.B. Includes is just a check, it does not create a new array from its
    // true results, thus the inclusion of the filter method to do just that.

    return arr.filter((valueF) => !theArgs.includes(valueF));
}

// Do not edit below this line
module.exports = removeFromArray;
