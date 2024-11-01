import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import HomePage from './Components/HomePage';
import LoginForm from './Components/LoginForm';



function App() {
    return (
    <Router>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        

        

        </Routes>
    </Router>
    );
}

export default App;

