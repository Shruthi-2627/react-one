import './App.css'
import React from 'react';

function Funccom(){
    return(
        <div className="func">
            <h2>This is created using Functional Component</h2>
            <p className="okay">This is done using External CSS</p>
            <p style={{color: "blue"}}>This is done using Inline CSS</p>
        </div>
    )
}

export default Funccom;

