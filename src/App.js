import './App.css';

import React from 'react'
import { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import InputField from './InputField/InputField';
import GenericForm from './GenericForm/GenericForm';

const App = () => {
  const [fakeStackIndex, setFakeStackIndex] = useState(0);
  const [elevatedState, setElevatedState] = useState('This is an app level statehook');
  const trialDataArray = [
    {
      name: 'First one',
      title: 'Type something'
    },
    {
      name: 'secondOne',
      title: 'This one has a default value',
      initValue: 'Second'
    },
    {
      name: 'First one',
      initValue: 'this is testing our default title appending.'
    }
  ];
  const commitToSessionStorage = (commitMe) => {
    sessionStorage.setItem(fakeStackIndex, JSON.stringify(commitMe));
    setFakeStackIndex(prev => prev + 1);
  };
  return (
    <div>
      App
      <GenericForm
        formSource={trialDataArray}
        submitText={'Click and Be Judged!'}
        submitAction={commitToSessionStorage}
      />
      <InputField
        name='a third one'
        title='From Elevated State'
        value={elevatedState}
        changeCall={e => setElevatedState(e.target.value)}
      />
    </div>
  )
}


export default App;
