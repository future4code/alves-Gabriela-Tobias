import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="littlecard-container">
            <img src={ props.email } />
            <div>
                <h4>{ props.texto }</h4>

             </div>
           <div className="littlecard-container2">
           <img src={ props.endereco } />
           <div>
               <h4>{ props.texto }</h4>

           </div>
       </div>
       </div>
    )
}

export default CardPequeno;