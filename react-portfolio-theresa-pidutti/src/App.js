import React, {useState} from 'react';
import Header from './components/Header';
import Aboutme from './components/Aboutme';
import Project from './components/Project';
import Footer from './components/Footer';
import info from './info.json';
import './App.css';

function App() {
    const [state, setState] =  useState(info);

    return (
        <>
        <Header />
        <Aboutme />
        {state.map(item => <Project item={item} /> )}
        <Footer />
        </>
    );
}

export default App;
