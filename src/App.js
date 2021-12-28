
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer"
import { useState,useEffect } from "react";
import Home from "./pages/Home"
import About from "./pages/About"
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import { initial } from "lodash";



function App() {
  
  return (
    <Router>
    <div className="flex flex-col justify-between h-screen">
    <Navbar/>

    <main>
      <h1>Main/Search</h1>
      {/* {!token?( 
        <div className=" grid justify-center mx-auto ">
        <button className="btn btn-ghost bg-success">Log In</button>
        <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&response_type=${RESPONSE_TYPE}`}
        >Login with Spotify</a>
      </div>
        
         ):
      (
        <div className="grid justify-center">
        <button onClick ={handleLogout}className="btn btn-success">Logout</button>
        <Routes>
      <Route path="/" element={ <Home/>}/>
      <Route path="/about" element= {<About/>}/>
      </Routes>
        </div>
      
      )} */}
      <Routes>
      <Route path="/" element={ <Home/>}/>
      <Route path="/about" element= {<About />}/>
      </Routes>
     
    </main>
    <Footer/>
    </div>
    </Router>
  );
}

export default App;
