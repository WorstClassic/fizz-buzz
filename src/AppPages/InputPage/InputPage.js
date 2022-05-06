
import React from 'react'
import { useNavigate } from 'react-router-dom';
import GenericForm from '../../GenericForm/GenericForm';
import { FizzBuzzInputs } from '../../DataSupply/FizzBuzzInputs';
import { reviewpath } from '../../Constants/Path';

const InputPage = ({ stackIndex, incrementStack }) => {

    const navigate = useNavigate();

    const commitToSessionStorage = (commitMe) => {
        sessionStorage.setItem(stackIndex, JSON.stringify(commitMe));
        incrementStack();
        navigate(reviewpath);
    };
    return (
        <GenericForm
            formSource={FizzBuzzInputs}
            submitText={'Click and Be Judged!'}
            submitAction={commitToSessionStorage}
        />
    )
}


export default InputPage;
