import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminHomePage = () => {
const navigate = useNavigate() ;

const createTrip = () =>{ 
  navigate('createTrip');
}
const goBack = () => {
  navigate('-1');
}
const goTripDetails = ()=>{
  navigate('tripDetail');
}

}


export default AdminHomePage