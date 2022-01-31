import React, {useEffect, useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer.js";
import "./App.css";
import WelcomeSection from "./components/landingComponents/WelcomeSection";
import Favorites from "./components/pages/Favorites/Favorites";
import LogIn from "./components/loginComponents/LogIn";
import AfterLogin from "./components/loginComponents/AfterLogin";
import SignUp from "./components/loginComponents/SignUp";
import AvocadoToast from "./components/pages/Instructions/AvocadoToast";
import SearchRecipes from "./components/pages/Recipes/SearchRecipes";


function App() {
  const[isLoggedIn, setIsLoggedIn] = useState(false)
  const loginUser = () => setIsLoggedIn(!isLoggedIn)

  useEffect(() => {
    if(localStorage.getItem('ID')) {
      setIsLoggedIn(true)
    }
  }, [])

  return (
    <>
      <BrowserRouter>
        <Navbar userStatus = {isLoggedIn} changeStatus = {setIsLoggedIn}/>
        <Routes>
          <Route exact path="*" element={<WelcomeSection />} />
          <Route exact path="/recipes" element={<SearchRecipes />} />
          <Route exact path="/favorites" element={<Favorites />} />
          <Route path="/login" element={isLoggedIn ? <AfterLogin /> : <LogIn logFunction={loginUser} />} />
          <Route path="/signup" element={isLoggedIn ? <AfterLogin /> : <SignUp logFunction={loginUser} />} />
          <Route exact path="/avocado-toast" element={<AvocadoToast />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
