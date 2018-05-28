import React, { Component } from 'react';
import './List.css';
import ListItemCosts from './ListItemCosts';

class List extends Component {

  state = { 
      costs: this.props.costs,
  };

  render() {
    const list = this.props.costs.map(s =>
        <ListItemCosts
            key={s.id}
            category={s.category}
            cost={s.cost}
            avatar={s.avatar}
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
