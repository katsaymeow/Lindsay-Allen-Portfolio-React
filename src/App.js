import React, {useState} from 'react';
import NavBar from './components/NavBar';
import Header from './components/Header';
import MainPage from './components/MainPage';
import Resume from './components/Resume';
import Footer from './components/Footer';
import Projects from './components/Projects';

export default function App () {
  const pages = ['MainPage', 'Resume', 'Interest'];
  const [currentPage, setCurrentPage] = useState(pages[0]);
  // setCurrentPage() => {
// I think I need to set this logic on in the nav page since that is where the links will be performed?
  // }
  // I want a conditional statement that will take the onclick actions of the page for resume mainpage and projects
    return (
      <div>
        <Header/>
        <NavBar 
        currentPage={currentPage}/>
        <MainPage/>
        <Projects/> 
         <Resume/>
        <Footer/>
      </div>
    )
}// needs conditional rendering and handler functions like setCurrentPage. 