import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main/Main';
import Graph from './pages/graph/Graph';

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/graph' element={<Graph />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
