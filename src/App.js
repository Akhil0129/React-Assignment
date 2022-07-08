import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Video1 from './pages/video1.js';
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/Video1/:id" element={<Video1 />} />
          <Route path="/Video2/:id" element={<Video1 />} />
          <Route path="/Video3/:id" element={<Video1/>} />
          <Route path="/Video4/:id" element={<Video1 />} />
          <Route path="/Video5/:id" element={<Video1 />} />
          <Route path="/Video6/:id" element={<Video1 />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;