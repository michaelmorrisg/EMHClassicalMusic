import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import License from './Components/License/License';
import Tour from './Components/Tour/Tour';

export default (
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/licensing" element={<License />} />
        <Route path="/tour-2022" element={<Tour />} />
    </Routes>
);
