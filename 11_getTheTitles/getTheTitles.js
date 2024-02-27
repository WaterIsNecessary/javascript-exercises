const getTheTitles = function(array) {

    // Good thinking but you can do this in a simpler way -- look below

    /* let newArr = array.reduce((accumulator, currentValue, ind) => {
        accumulator[ind] = currentValue.title;
        return accumulator;
    },[]);

    return newArr; */

    // The most simple way is to use the map function which has it inbuilt to
    // map the return values into an array of themselves

    let newArr = array.map(ele => ele.title);

    return newArr;

};

// Do not edit below this line
module.exports = getTheTitles;
