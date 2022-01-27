import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer.js";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomeSection from "./components/landingComponents/WelcomeSection";
import CardItems from "./components/pages/CardItems";
import Favorites from "./components/pages/Favorites";
import LogIn from "./components/loginComponents/LogIn";
import SignUp from "./components/loginComponents/SignUp";
import AvocadoToast from "./components/pages/Recipes/AvocadoToast";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="*" element={<WelcomeSection />} />
          <Route exact path="/recipes" element={<CardItems />} />
          <Route exact path="/favorites" element={<Favorites />} />
          <Route exact path="/login" element={<LogIn />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/avocado-toast" element={<AvocadoToast />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
