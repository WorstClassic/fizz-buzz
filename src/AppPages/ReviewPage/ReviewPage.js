import React from 'react';
import { Link } from 'react-router-dom';

import { homepath } from '../../Constants/Path';
import { STACK_PTR } from '../../Constants/variable-names';
import FizzBuzzEntryList from '../../FizzBuzzEntryList/FizzBuzzEntryList';


const ReviewPage = () => {
    const { [STACK_PTR]: stack_ptr, ...trimmedStorage } = sessionStorage;
    const sessionStorageKeys = Object.keys(trimmedStorage);
    return (<div>
        <Link to={homepath}>More Entries!</Link>
        <FizzBuzzEntryList sessionStorageKeys={sessionStorageKeys} />
    </div>);
};
export default ReviewPage;