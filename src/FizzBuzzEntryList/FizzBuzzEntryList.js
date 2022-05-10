import React from 'react'
import PropTypes from 'prop-types'


import FizzBuzzEntry from '../FizzBuzzEntry/FizzBuzzEntry';

const FizzBuzzEntryList = ({ sessionStorageKeys }) => {
    const children = sessionStorageKeys.map(index => {
        let ourObject;
        try {
            ourObject = JSON.parse(sessionStorage.getItem(index));
        } catch (e) {
            if (e.name === "SyntaxError")
                console.log(`index ${index} has thrown a syntax error`);
            //This log is a placeholder for a more mature solution.
            else console.log(`index ${index} has thrown an unexpected error`);
        }
        if (ourObject === undefined) {
            return (<></>);
        }
        else {
            return (<FizzBuzzEntry
                key={`entry-${index}`}
                index={index}
                fizzBuzzObject={ourObject}
            />);
        }
    });
    return (<div key={`EntryList`} data-testid="EntryList">
        {children}
    </div>);
};

FizzBuzzEntryList.propTypes = { sessionStorageKeys: PropTypes.arrayOf(PropTypes.string).isRequired };

export default FizzBuzzEntryList;