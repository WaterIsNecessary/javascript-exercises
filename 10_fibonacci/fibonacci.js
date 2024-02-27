const fibonacci = function(rawMember) {

    const filteredMember = +rawMember;

    // You could replace the else if with if and remove the else syntax and
    // just use the code within it - the code still works. YOu should research
    // whether what you have done is best practice to be able to clearly see
    // what the code is doing OR if removing the else if and replacing with
    // if and removing the else syntax and just having the code contained
    // within it there is better practice.

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
