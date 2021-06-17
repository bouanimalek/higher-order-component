import React, { Component } from 'react';
import vegeta from './vegeta.png';
import countHits from './countHits';
class Vegeta extends Component {

    // state = {
    //     hits: 0
    // }

    // addOne = () => {
    //     this.setState((prevState) => {
    //       return {
    //           hits: prevState.hits + 1
    //       }
    //     })
    // }
    render() {
        const {name, addOneHit, hocState, life} = this.props;

        const lifeValue = life > 0 ? (<td>{life} %</td>) : (<td><span className="badge badge-danger">Out</span></td>);

        const button = life > 0 ? (<button onClick={addOneHit} className="btn btn-success m-3">{name} Frappe</button>) 
        : (<button className="btn btn-danger m-3 disabled">Out</button>);
        return (
            <div className="col">
                <img src={vegeta} alt="vegeta"/><br/>
                {button}

                <table className="table table-striped">
                 <thead>
                  <tr>
                      <th scope="col">Coups</th>
                      <th scope="col">Vie</th>
                  </tr>
                 </thead>
                 <tbody>
                  <tr>
                      <td>{hocState.hits}</td>
                      {lifeValue}
                  </tr>
                 </tbody>
                </table>
            </div>
        )
    }
}

export default countHits(Vegeta, 10);
