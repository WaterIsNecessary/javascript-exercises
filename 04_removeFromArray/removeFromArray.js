const removeFromArray = function(arr, ...theArgs) {

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
};

// Do not edit below this line
module.exports = removeFromArray;
