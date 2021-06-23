import React, { Component } from 'react';
import vegeta from './vegeta.png';
import countHits from './countHits';

class Vegeta extends Component {

    state = {
        saiyan: true,
        hits: 0
    }

    addOne = () => {
        this.setState((prevState) => {
          return {
              hits: prevState.hits + 1
          }
        })
    }
    render() {
        
        return (
            <div className="col">
                <img src={vegeta} alt="vegeta"/>
                <br/>
                
                <button onClick={this.addOne} className="btn btn-success m-3">{this.props.render(this.state.saiyan)} Frapper</button>

                <table className="table table-striped">
                 <thead>
                  <tr>
                      <th scope="col">Coups</th>
                  </tr>
                 </thead>
                 <tbody>
                  <tr>
                      <td>{this.state.hits}</td>
                      
                  </tr>
                 </tbody>
                </table>
            </div>
        )
    }
}

export default countHits(Vegeta, 10);
