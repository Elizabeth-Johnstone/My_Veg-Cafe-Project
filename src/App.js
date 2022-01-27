import React, {useEffect, useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer.js";
import "./App.css";
import WelcomeSection from "./components/landingComponents/WelcomeSection";
import CardItems from "./components/pages/Recipes/CardItems";
import Favorites from "./components/pages/Favorites";
import LogIn from "./components/loginComponents/LogIn";
import Dashboard from "./components/loginComponents/Dashboard";
import SignUp from "./components/loginComponents/SignUp";
import AvocadoToast from "./components/pages/Instructions/AvocadoToast";

function App() {
  const[isLoggedIn, setIsLoggedIn] = useState(false)
  const loginUser = () => setIsLoggedIn(!isLoggedIn)

  useEffect(() => {
    if(localStorage.getItem('id')) {
      setIsLoggedIn(true)
    }
  }, [])

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="*" element={<WelcomeSection />} />
          <Route exact path="/recipes" element={<CardItems />} />
          <Route exact path="/favorites" element={<Favorites />} />
          <Route path="/login" element={isLoggedIn ? <Dashboard /> : <LogIn logFunction={loginUser} />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/avocado-toast" element={<AvocadoToast />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
