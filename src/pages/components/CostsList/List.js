import React, { Component } from 'react';
import './List.css';
import ListItem from './ListItem';


class List extends Component {

  state = { 
      costs: this.props.COSTS,
      term: '',
  };

  handleFilterStudents = (event) => {
    this.setState({term: event.target.value});
  };

  searchFor = term => x => (x.category.toLowerCase().includes(term.toLowerCase()) || !term);

  render() {

    const {
        term,
        costs
    } = this.state;

    return (
      <div style={{textAlign: 'center',
                   marginLeft: '20%',
                   marginRight: '20%',
                   minWidth: 300}}>
        
        {/* <input type="text" placeholder="Search the student..." onChange={this.handleFilterStudents}/>
        <br/> */}
        <div >
            {
                costs.filter(this.searchFor(term)).map(s =>
                    <ListItem
                        key={s.id}
                        category={s.category}
                        cost={s.cost}
                        avatar={s.avatar}
                    />
                )
            }
        </div>
      </div>
    );
  }
}

export default List;
