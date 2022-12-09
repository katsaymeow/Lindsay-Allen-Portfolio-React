import React, { useState } from "react";
import NavBar from "./components/NavBar";
import MainPage from "./components/MainPage";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About";

export default function App() {
  const [currentPage, setCurrentPage] = useState("MainPage");

  const renderPage = () => {
    if (currentPage === "MainPage") {
      return <MainPage />;
    }
    if (currentPage === "Projects") {
      return <Projects />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}
