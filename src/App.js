import React from 'react';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Interest from './components/Interest';
import MainPage from './components/MainPage';
import Resume from './components/Resume';

export default function App () {
    return (
      <div>
        <Header/>
        <NavBar/>
        <MainPage/>
        <Resume/>
        <Interest/>
      </div>
    )
}