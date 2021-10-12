import React from 'react';
import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";


function App() {
    console.log('App rendering')
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <Profile/>
        </div>
    );
}


export default App;
