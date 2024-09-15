import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MainPage from './Components/MainPage/MainPage'
import PatientPage from './Components/PatientPage/PatientPage'
import './App.css'
import Navbar from './Components/NavBar/NavBar'
import TrackingPage from './Components/TrackingPage/TrackingPage'
import Dashboard from './Components/Dashboard/Dashboard'
import SettingScreen from './Components/SettingScreen/SettingScreen'

const App: React.FC = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/patient" element={<PatientPage />} />
                <Route path="/tracking" element={<TrackingPage />} />
                <Route path="/patient/:id" element={<PatientPage />} />
                <Route path="/dashboard" element={<Dashboard /> } />
                <Route path="/settings" element={<SettingScreen /> } />
            </Routes>
        </Router>
    );
};

export default App;
