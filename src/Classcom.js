import React, {Component} from 'react';
import './App.css'

class Classcom extends Component{
    render(){
        return(
            <div className="cls">
                <h2>This is created using Class Component</h2>
                <p className="done">This is done using External CSS</p>
                <p style={{color: "blue"}}>This is done using Inline CSS</p>
            </div>
        )
    }
}

export default Classcom;