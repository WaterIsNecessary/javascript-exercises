const fibonacci = function(rawMember) {

    const filteredMember = +rawMember;

    if (filteredMember === 0) return 0;
    
    else if (filteredMember < 0) return "OOPS";
    
    else {

        const fibonacciStart = [1,1];    

        for (i = 0, j = 1; i < filteredMember; i++, j++) {

            fibonacciStart.push(fibonacciStart[i] + fibonacciStart[j]);

        }; 

        return fibonacciStart[filteredMember - 1];

    }
};

// Do not edit below this line
module.exports = fibonacci;
