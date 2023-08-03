import React from 'react';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';

// navbar
import Navbar from './Navbar';

// pages
import Homepage from './Homepage';
import People from './People';
import Person from './Person';
import ErrorPage from './Error';
import About from './About';

const Index = () => {
    return (
        <Router>
            <Navbar/>            
            <Routes>
            <Route exact path="/" element={<Homepage/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/people" element={<People/>} />
            <Route path="/person/:id" element={<Person/>} />
            <Route path="*" element={<ErrorPage/>} />
            </Routes>
        </Router>
    );
}

export default Index;