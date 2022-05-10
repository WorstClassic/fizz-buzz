const FizzBuzz = (maybeNumber) => {
    const number = parseInt(maybeNumber);
    if (isNaN(number))
        return null;
    else {
        //We could do additonal checking here
        let output = '';
        if (number % 3 === 0)
            output += 'fizz';
        if (number % 5 === 0)
            output += 'buzz'
        return output;
    }
};

export default FizzBuzz;