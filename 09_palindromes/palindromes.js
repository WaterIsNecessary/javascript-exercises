const palindromes = function (str) {

    const rawArray = str.toLowerCase().split('');

    const filteredArray = rawArray.filter((el,ind,arr) => {
        if (el === " " || el === "." || el === "!" || el === ",") return false;
        else return true;
    });

    const frontToBack = filteredArray.join('');
    
    const backToFront = filteredArray.reverse().join('');    

    // remove these . " " ! ,
    // lowercase
    // now use str as a reference 

    

    return (backToFront === frontToBack) ? true : false;
    
};

// Do not edit below this line
module.exports = palindromes;
