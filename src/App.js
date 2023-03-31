import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Greeting from './component/Greeting';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Greeting />} />
    </Routes>
  </Router>
  // <h2>Welcome Welcome</h2>
);

export default App;