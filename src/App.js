import './App.css';

import React from 'react'
import { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import InputField from './InputField/InputField';

const App = () => {
  const [elevatedState, setElevatedState] = useState('second');
  return (
    <div>
      App
      <InputField
        name='First one'
        title='Just type something'
        initValue={'Anythings fine'}
      />
      <InputField
        name='second one'
        title='A second field'
        initValue={'Will it work? it should'}
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
