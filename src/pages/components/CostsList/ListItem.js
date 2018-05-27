import React, { Component } from 'react';

class ListItem extends Component {

    render() {
      const {
          avatar,
          category,
          cost,  
      } = this.props;
  
      return (
          <div className="list">
              <div>
                <img className="list-avatar" src={avatar} alt='Avatar' />
              </div>
              <div className="list-text">
                <p>{category}</p>
              </div>
               
              <div className="list-costs" >
                <p>-{cost}</p>
              </div>
          </div>
      );
    }
  }
  
  export default ListItem;