import React, { Component } from 'react';

import './App.css';


import MaterialAppBar from './components/MaterialAppBar';
import SimpleExpansionPanel from './components/SimpleExpansionPanel';
import ConfirmationDialog from './components/ConfirmationDialog';
import ConfirmationAddDialog from './components/ConfirmationAddDialog';


const today = new Date();
const month = today.getMonth()+1;
const arr = [ 'January',
              'February',  
              'March', 
              'April', 
              'May',
              'June',  
              'July',  
              'August', 
              'September',  
              'October',  
              'November',
              'December'
            ];
let monthStr = arr[month-1];


class App extends Component {
  constructor(){
    super();
    this.state = {

      openCosts: false,
      openIncomes: false,
      month: undefined,
      count: 5000,

      id: '',
      category: 'Choose category',
      costs: 0,
      incomes:0,
      costsList: [],
    }
  }
//   componentDidMount() {
//     const savedNotes = JSON.parse(localStorage.getItem('notes'));

//     if (savedNotes) {
//         this.setState({ notes: savedNotes });
//     }
// };

// componentDidUpdate() {
//     const notes = JSON.stringify(this.state.notes);

//     localStorage.setItem('notes', notes);
// };

  
  handleOpenDialogCosts = () => {
    this.setState({ openCosts: true });
  };

  handleOpenDialogIncomes = () => {
    this.setState({ openIncomes: true });
  };

  handleCloseCount = count => {
    this.setState({ count: count, openCosts: false, openIncomes: false });
  };

  handleCloseCosts = costs => {
    this.setState({ costs: costs, openCosts: false, openIncomes: false });
  };

  handleCloseCategory = value => {
    this.setState({ category: value, openCosts: false, openIncomes: false });
  };

  handleCloseIncomes = value => {
    this.setState({ incomes: value });
  };

  handleCloseDate = date => {
    this.setState({ id: date });
  };

  handleCostsAdd = newCosts => {
    this.setState({
        costsList: [newCosts, ...this.state.costsList]
    });
  };

  handleIncomesAdd = newIncomes => {
    this.setState({
        incomesList: [newIncomes, ...this.state.incomesList]
    });
  };


  render() {

    return (
      <div className="app">
        <MaterialAppBar 
          openDialogCosts={this.handleOpenDialogCosts}
          openDialogIncomes={this.handleOpenDialogIncomes}
          count={this.state.count}
        />

        <SimpleExpansionPanel 
          costs={this.state.costsList}
          incomes={this.state.incomesList}
          month={this.state.month}
          nowMonth={monthStr}
        />

        <ConfirmationDialog
          open={this.state.openCosts}
          onClose={this.handleCloseCategory}
          onCostsAdd={this.handleCostsAdd}
          onCloseCount={this.handleCloseCount}
          onCloseCosts={this.handleCloseCosts}
          onCloseDate={this.handleCloseDate}
          value={this.state.category}
          count={this.state.count}
        />

        <ConfirmationAddDialog
          open={this.state.openIncomes}
          onClose={this.handleCloseCount}
          onCloseIncomes={this.handleCloseIncomes}
          onCloseDate={this.handleCloseDate}
          onIncomesAdd={this.handleCostsAdd}
          value={this.state.count}
        />
      </div>
    );
  }
}

export default App;
