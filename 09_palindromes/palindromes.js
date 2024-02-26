const palindromes = function (str) {

    const regex = /[^a-z0-9]/g;
    const strPuncEtcRemoved = str.toLowerCase().replace(regex,"");
    return strPuncEtcRemoved.split('').reverse().join('') === strPuncEtcRemoved;    
    
};

// Do not edit below this line
module.exports = palindromes;
