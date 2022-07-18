import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const TripDetailsPage = () => {
    const navigate = useNavigate();
    return (
      <div>
        <h1>TRIP DETAILS PAGE</h1>
        <p>EM breve mais infos!</p>
        <button onClick={() => navigate('/')}>VOLTAR</button>
      </div>
    );
  };
  
  export default TripDetailsPage;

