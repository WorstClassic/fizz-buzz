
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import GenericForm from '../../GenericForm/GenericForm';
import { RemoteDataService } from '../../RemoteDataService/RemoteDataService';
import { reviewpath } from '../../Constants/Path';
import { STACK_PTR, SUBMIT_TEXT } from '../../Constants/variable-names';

const InputPage = () => {

    const navigate = useNavigate();
    const [allLoaded, setAllLoaded] = useState(false);
    const [inputParams, setInputParams] = useState(null);

    useEffect(() => {
        const incomingParams = RemoteDataService.getInputParams;
        setInputParams(incomingParams);
        setAllLoaded(true);
        return () => {
        }
    }, [setInputParams, setAllLoaded])

    const commitToSessionStorage = (commitMe) => {
        const stackIndex = sessionStorage.getItem(STACK_PTR) || 0;
        sessionStorage.setItem(stackIndex, JSON.stringify(commitMe));
        sessionStorage.setItem(STACK_PTR, parseInt(stackIndex) + 1);
        navigate(reviewpath);
    };
    return (allLoaded &&
        <GenericForm
            formSource={inputParams}
            submitText={SUBMIT_TEXT}
            submitAction={commitToSessionStorage}
        />
    )
}


export default InputPage;
