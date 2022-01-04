
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer"
import { useState,useEffect } from "react";
import Home from "./pages/Home"
import About from "./pages/About"
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import { LoginProvider } from "./content/LoginContext";


function App() {
  
  return (
    <LoginProvider>
    <Router>
    <div  className="flex flex-col justify-between w-screen h-screen">
    <Navbar/>

    <main>
      <Routes>
      <Route path="/" element={ <Home/>}/>
      <Route path="/about" element= {<About />}/>
      </Routes>
     
    </main>
    <Footer/>
    </div>
    </Router>
    </LoginProvider>
  );
}

export default App;
