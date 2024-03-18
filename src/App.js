// App.js

import React from 'react';
import MenuBar from './components/MenuBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HistoryLog from './components/HistoryLog';
import Home from './components/Home';
import Purchase from './components/Purchase';
import Sell from './components/Sell';
import './assets/App.css';

function App() {

  return (
    <>
      <Router>
        <div className='sidebar-wrapper'>
          <MenuBar />
          <Routes>
            <Route
              exact
              path="/"
              element={<Home />}
            />
            <Route path="/history" element={<HistoryLog />} />
            <Route path="/purchase" element={<Purchase />} />
            <Route path="/sell" element={<Sell />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
