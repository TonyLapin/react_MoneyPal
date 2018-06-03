import React, { Component } from 'react';

class ListItemCosts extends Component {
  
    render() {
      const {
          avatar,
          category,
          cost,
          month,
          seeCosts,
          seeIncomes
      } = this.props;

      return (
          <div className={cost ? "visible" :  "hidden"}>
            <div className={!category ? "visible" : (seeCosts? "visible": "hidden")}>
              <div className={category ? "list" : (seeIncomes ? "list__incomes": "hidden")} >
                <div>
                  <img className="list-avatar" src={avatar} alt='Avatar' />
                </div>
                <div className={category ? "list-text" : "list-text__incomes"}>
                  <p>{category}</p>
                </div>
                <div className="list-text1">
                  <i>in:{month}</i>
                </div>
                <div className={category ? "list-costs" : "list-costs__incomes"} >
                  <p>{category ? "-" : "+"}{cost}</p>
                </div>
              </div>
            </div>
          </div>
      );
    }
  }
  
  export default ListItemCosts;