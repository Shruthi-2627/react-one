import React, {Component} from 'react';
import Classcom from "./Classcom";
import Funccom from "./Funccom";
import './App.css';

class App extends Component{
 constructor(){
      super();
      this.state={
      classcom: false,
      funccom: false
      }  
    };
    render(){
    return(
      <>
      <p className='style'>Styling using Functional and Class components</p>
      <div className="main">
        <button type="button" className="btn1" onClick={()=>this.setState({classcom: !this.state.classcom})}>To see styling in Class Component</button>
        <button type="button" className="btn2" onClick={()=>this.setState({funccom: !this.state.funccom})}>To see styling in Functional Component</button>
      </div>
      
      <div className='background'>
        {this.state.classcom && <Classcom />}
        {this.state.funccom && <Funccom />}
      </div>
      </>
    )
  }
}



export default App;