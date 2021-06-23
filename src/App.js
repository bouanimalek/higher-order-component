import React, { Component } from 'react';
import Vegeta from './Vegeta';
import Goku from './Goku';
import AddHits from './AddHits';
import './App.css';

class App extends Component {

  
  render(){
    
    return (
      <div className="container text-center">
       <h1>Goku Vs Vegeta</h1>
       
       <div className="row">
        <AddHits 
        render={(hits, addOne, saiyan) => (
          saiyan.vegeta && <Vegeta hits={hits} addOne={addOne} name="Vegeta"/>

        )

        }/>

        <AddHits render={(hits, addOne, saiyan) => (
          saiyan.goku && <Goku hits={hits} addOne={addOne} name="Goku"/> 
        )}/>

       </div>
      </div>
    );
  }
 
}

export default App;
