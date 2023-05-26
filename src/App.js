import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Edit from './components/Edit';
import Home from './components/Home';
import LoginPage from './components/LoginPage';
import Create from './components/Create'
  
function App() {
    return (
        <div className='App'>
  
            <Router>
                <Routes>
                    <Route exact path="/" element={ <LoginPage/> } />
                    <Route path='/home' element={<Home />} />
                    <Route path='/create' element={<Create />} />
                    <Route path='/edit/:id' element={<Edit />} />
                </Routes>
            </Router>
        </div>
    );
}
  
export default App;
