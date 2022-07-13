import astronautaferias from '../../Img/astronautaferias';
import React from 'react';
import{ useNavigate } from 'react-router-dom';
import { home } from '../../Router/coordinator';

 function HomePage() {

    const navigate = useNavigate()
    

  return (
    <div>
        <img src={astronautaferias}/>
    </div>
  )
}
export default HomePage;