import React, { Component } from 'react';
import './List.css';
import ListItemCosts from './ListItemCosts';

class List extends Component {

  state = { 
      costs: [],
  };


  render() {


    const list = this.props.filterMonth.map(s =>
        <ListItemCosts
            key={s.id}
            category={s.category}
            cost={s.cost}
            avatar={s.avatar}
            month={s.month}
            seeCosts={this.props.showCosts}
            seeIncomes={this.props.showIncomes}
        />
    );

    return (
      <div>
        <div style={{textAlign: 'center',
                   marginLeft: '20%',
                   marginRight: '20%',
                   minWidth: 300,
                   maxHeight: 390,
                   minHeight: 200,
                   overflow: "auto"}}>

                {list}
                
        </div>
      </div>
    );
  }
}

export default List;
