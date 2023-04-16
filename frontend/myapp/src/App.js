import React from "react";
import { Route, Routes } from "react-router-dom";
import NucleoIcons from "./views/NucleoIcons";
import LandingPage from "./views/examples/LandingPage";
import ProfilePage from "./views/examples/ProfilePage";
import RegisterPage from "./views/examples/RegisterPage";
import BaseLayout from "components/Layout/BaseLayout";
import Home from "views/Home";

function App() {
  return (
    <BaseLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nucleo-icons" element={<NucleoIcons />} />
        <Route path="/landing-page" element={<LandingPage />} />
        <Route path="/profile-page" element={<ProfilePage />} />
        <Route path="/register-page" element={<RegisterPage />} />
      </Routes>
    </BaseLayout>
  );
}

export default App;
