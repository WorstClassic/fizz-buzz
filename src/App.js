import './App.css';

import React from 'react'
import { Routes, Route } from "react-router-dom";
import InputPage from './AppPages/InputPage/InputPage';
import ReviewPage from './AppPages/ReviewPage/ReviewPage';
import { homepath, reviewpath } from './Constants/Path';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path={homepath} element={<InputPage />} />
        <Route path={reviewpath} element={<ReviewPage />} />
      </Routes>
    </div>
  )
}


export default App;
