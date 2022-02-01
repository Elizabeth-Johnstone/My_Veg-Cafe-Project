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
import Omelette from "./components/pages/Instructions/Omelette";
import Matcha from "./components/pages/Instructions/Matcha";
import Quesadilla from "./components/pages/Instructions/Quesadilla";
import Couscous from "./components/pages/Instructions/Couscous";
import Cookies from "./components/pages/Instructions/Cookies";
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
          <Route exact path="/veggie-omelette" element={<Omelette />} />
          <Route exact path="/matcha-latte" element={<Matcha />} />
          <Route exact path="/quesadilla" element={<Quesadilla />} />
          <Route exact path="/couscous-bowl" element={<Couscous />} />
          <Route exact path="/peanut-butter-cookies" element={<Cookies />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
