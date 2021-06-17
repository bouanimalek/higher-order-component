import React, { Component } from 'react';
import Vegeta from './Vegeta';
import Goku from './Goku';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       vegeta: 100,
       goku: 100
    }
  }

  reduceThe = (param, param_) => {
    if(param === 'Goku'){
       this.setState({
         vegeta: this.state.vegeta - param_
       })
    }else{
      this.setState({
        goku: this.state.goku - param_
      })
    }
  }
  
  render(){
    
    return (
      <div className="container text-center">
       <h1>Goku Vs Vegeta</h1>
       <hr/>
       <div className="row">
        <Vegeta name="Vegeta" life={this.state.vegeta} reduceHandler={this.reduceThe}/>
        <Goku name="Goku" life={this.state.goku} reduceHandler={this.reduceThe}/>
       </div>
      </div>
    );
  }
 
}

export default App;
