import './App.css';

import React, { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import InputPage from './AppPages/InputPage/InputPage';
import ReviewPage from './AppPages/ReviewPage/ReviewPage';
import { homepath, reviewpath } from './Constants/Path';

const App = () => {
  const [fakeStackIndex, setFakeStackIndex] = useState(0);
  const incrementStack = () => {
    setFakeStackIndex(fakeStackIndex + 1);
  };
  return (
    <div>
      <Routes>
        <Route path={homepath} element={<InputPage stackIndex={fakeStackIndex} incrementStack={incrementStack} />} />
        <Route path={reviewpath} element={<ReviewPage />} />
      </Routes>
    </div>
  )
}


export default App;
