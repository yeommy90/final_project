import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Register from './components/Member/Register';
import BaseLayout from 'components/Layout/BaseLayout';
import Login from 'components/Member/Login';
import Home from 'components/Home';
import SearchPage from 'components/Search/SearchPage';
import ProfilePage from 'components/Profile/ProfilePage';
import AnalysisPage from 'components/Profile/Analysis/AnalysisPage';
import Contents from 'components/Contents/ContentsPage';

function App() {
  return (
    <BaseLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/analysis" element={<AnalysisPage />} />
        <Route path="/contents" element={<Contents />} />
      </Routes>
    </BaseLayout>
  );
}

export default App;
