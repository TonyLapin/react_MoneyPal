import Button from '@material-ui/core/Button';
import React, { Component } from 'react';
import './CounterCosts.css';
import {cyan} from '@material-ui/core/colors/';


class CounterCosts extends Component{
   
  render(){
    return (
      <div className="counter">
        
        <Button 
          className="counter__buton"
          variant="fab" 
          color="default" 
          style={{background: cyan["A200"]}}
          aria-label="add" 
          onClick={this.props.addCounts}>
          +
        </Button>

        <span>{this.props.count}</span>
        
        <Button 
          className="counter__buton"
          variant="fab" 
          color="default" 
          aria-label="remove"
          style={{background: '#FF8A80'}} 
          onClick={this.props.deductCounts}>
          -
        </Button>
      </div>
    )
  }
}

export default CounterCosts;
