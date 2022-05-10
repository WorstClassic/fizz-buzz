import React from 'react'
import PropTypes from 'prop-types'

import FizzBuzz from '../AppPages/Functions/FizzBuzz';
import { RemoteDataService } from '../RemoteDataService/RemoteDataService';
import { FIZZBUZZ_SHAPE } from '../Constants/PropTypeShapes';

const FizzBuzzEntry = ({ index, fizzBuzzObject }) => {
    const fizzbuzzInputs = RemoteDataService.getInputParams();
    const { [fizzbuzzInputs[4].name]: fizzBuzzInteger, ...trimmedObject } = fizzBuzzObject;
    const trimmedKeys = Object.keys(trimmedObject);
    return (
        <div key={`entry-${index}`} data-testid={`entry-${index}`}>
            <span key={`entry-${index}-fizzbuzz`}>
                FizzBuzz? = {FizzBuzz(fizzBuzzInteger)}
            </span>
            <div data-testid={`entry-${index}-rest`}>
                {trimmedKeys.map(
                    (entry) => (<div key={`entry-${index}-${entry}`}>{`${entry} has value ${trimmedObject[entry]}`}</div>))}
            </div>
        </div>
    );
};

FizzBuzzEntry.propTypes = {
    index: PropTypes.string.isRequired,
    fizzBuzzObject: PropTypes.shape(FIZZBUZZ_SHAPE).isRequired
};

export default FizzBuzzEntry;