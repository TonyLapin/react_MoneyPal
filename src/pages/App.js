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



      chartData:{
        labels: ['Food', 'Purchases', 'Entertainment', 'Other...'],
        datasets:[
          {
            data:[
              17594,
              481045,
              153060,
              95072
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              '#4af07c'
            ]
          }
        ]
      },

      COSTS: [
        {
            id: 1,
            category: 'Food',
            avatar: 'http://adcom.co.za/media/com_jbusinessdirectory/pictures/categories/cateringicon-1492074698.png',
            cost: 2800,     
        },
        {
            id: 2,
            category: 'Purchases',
            avatar: 'https://cdn3.iconfinder.com/data/icons/purchases-and-sales/512/transpo.png',
            cost: 300,
        },
        {
            id: 3,
            category: 'Entertainment',
            avatar: 'https://static1.squarespace.com/static/5a157de0b7411ccec817e840/t/5a4546dd0d9297d33044ac7d/1523540988344/framed-and-focused-social-sharing-photobooth.png',
            cost: 1000,
        },
        {
            id: 4,
            category: 'Other',
            avatar: 'https://cdn3.iconfinder.com/data/icons/aami-web-internet/64/aami8-94-256.png',
            cost: 100,
        },
      ],
      id: '',
      category: 'Choose category',
      costs: 0,
      incomes:0,
    }
  }

  
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



  render() {
   console.log('countApp', this.state.count);
   console.log('categoryApp', this.state.category);
   console.log('incomes:', this.state.incomes);
   console.log('costs:', this.state.costs);
   console.log('id:', this.state.id);
   
    return (
      <div className="app">
        <MaterialAppBar 
          openDialogCosts={this.handleOpenDialogCosts}
          openDialogIncomes={this.handleOpenDialogIncomes}
          count={this.state.count}
          category={this.state.category}
          date={this.state.id}
        />

        <SimpleExpansionPanel 
          costs={this.state.COSTS}
          month={this.state.month}
          nowMonth={monthStr}
        />

        <ConfirmationDialog
          open={this.state.openCosts}
          onClose={this.handleCloseCategory}
          onCloseCount={this.handleCloseCount}
          onCloseCosts={this.handleCloseCosts}
          onCloseDate={this.handleCloseDate}
          value={this.state.category}
          count={this.state.count}
          dialogOptions={this.state.chartData.labels}
        />
        <ConfirmationAddDialog
          open={this.state.openIncomes}
          onClose={this.handleCloseCount}
          onCloseIncomes={this.handleCloseIncomes}
          onCloseDate={this.handleCloseDate}
          value={this.state.count}
        />
      </div>
    );
  }
}

export default App;
