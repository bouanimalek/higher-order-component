import React, { Component } from 'react';
import vegeta from './vegeta.png';
import countHits from './countHits';

class Vegeta extends Component {

    
    render() {
        
        const {hits, addOne, name} = this.props;

        return (
            <div className="col">
                <img src={vegeta} alt="vegeta"/>
                <br/>
                
                <button onClick={addOne} className="btn btn-success m-3">{name} Frapper</button>

                <table className="table table-striped">
                 <thead>
                  <tr>
                      <th scope="col">Coups</th>
                  </tr>
                 </thead>
                 <tbody>
                  <tr>
                      <td>{hits}</td>
                      
                  </tr>
                 </tbody>
                </table>
            </div>
        )
    }
}

export default countHits(Vegeta, 10);
