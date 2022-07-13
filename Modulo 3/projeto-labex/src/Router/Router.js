import React from "react";
import AdminHomePage from '../Pages/AdminHomePage';
import ApplicationFormPage from '../Pages/ApplicationFormPage';
import CreateTripPage from '../Pages/CreateTripPage';
import HomePage from '../Pages/HomePage';
import ListTripsPage from '../Pages/ListTripsPage';
import LoginPage from '../Pages/LoginPage';
import TripDetailsPage from '../Pages/TripDetailsPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="admin" element={<AdminHomePage />} />
                <Route path="application" element={<ApplicationFormPage />} />
                <Route path="createTrip" element={<CreateTripPage />} />
                <Route path="listTrip" element={<ListTripsPage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="tripDetail" element={<TripDetailsPage />} />
            </Routes>

        </BrowserRouter>
    )
}

export default Router;
