import React from "react";
import AdminHomePage from '../Pages/AdminHomePage/AdminHomePage';
import ApplicationFormPage from '../Pages/ApplicationFormPage/ApplicationFormPage';
import CreateTripPage from '../Pages/CreateTripPage/CreateTripPage';
import HomePage from '../Pages/HomePage/HomePage';
import ListTripsPage from '../Pages/ListTripsPage/ListTripsPage';
import LoginPage from '../Pages/LoginPage/LoginPage';
import TripDetailsPage from '../Pages/TripDetailsPage/TripDetailsPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="admin" element={<AdminHomePage />} />
                <Route path="listTrip/application" element={<ApplicationFormPage />} />
                <Route path="createTrip" element={<CreateTripPage />} />
                <Route path="listTrip" element={<ListTripsPage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="login/admin" element={<TripDetailsPage />} />
            </Routes>

        </BrowserRouter>
    )
}

export default Router;
