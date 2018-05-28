import React, { Component } from 'react';

class ListItemCosts extends Component {
  
    render() {
      const {
          avatar,
          category,
          cost,  
      } = this.props;
  
  
      return (
        
          <div className={cost ? "visible" : "hidden"}>
            <div className={category ? "list" : "list__incomes"} >
              <div>
                <img className="list-avatar" src={avatar} alt='Avatar' />
              </div>
              <div className={category ? "list-text" : "list-text__incomes"}>
                <p>{category}</p>
              </div>
               
              <div className={category ? "list-costs" : "list-costs__incomes"} >
                <p>{category ? "- " : "+ "}{cost}</p>
              </div>
            </div>
          </div>
      );
    }
  }
  
  export default ListItemCosts;