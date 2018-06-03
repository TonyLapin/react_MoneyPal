import React, { Component } from 'react';

import MaterialAppBar from './components/MaterialAppBar';
import SimpleExpansionPanel from './components/SimpleExpansionPanel';
import ConfirmationDialog from './components/ConfirmationDialog';
import ConfirmationAddDialog from './components/ConfirmationAddDialog';
import SortByMonthDialog from './components/SortByMonthDialog';

import './App.css';
class App extends Component {

  state = {
      openCosts: false,
      openIncomes: false,
      openSortByMonth: false,
      count: 0,
      category: '',
      costsList: [],
      menuMonth: '',
      sortByMoney: ''
  }

  componentWillMount() {
    const savedCosts = JSON.parse(localStorage.getItem('costsList'));
    if (savedCosts) {
        this.setState({ costsList: savedCosts });
    }
    const savedCount = JSON.parse(localStorage.getItem('count'));
    if (savedCount) {
        this.setState({ count: savedCount });
    }
  };

  componentDidUpdate() {
      const costs = JSON.stringify(this.state.costsList);
      localStorage.setItem('costsList', costs);

      const count = JSON.stringify(this.state.count);
      localStorage.setItem('count', count);
  };

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

  handleCloseSortByMonthDialog = value => {
    this.setState({ menuMonth: value, openSortByMonth: false });
  };

  handleOpenDialogByMonth = event => {
    this.setState({ openSortByMonth: true });
  };

  handleSortByMoneyUp = () => {
    this.setState({ sortByMoney: "moneyUp" });
  };

  handleSortByMoneyDown = () => {
    this.setState({ sortByMoney: "moneyDown" });
  };

  handleSortByDate = () => {
    this.setState({ sortByMoney: "" });
  };

  handleCostsAdd = newCosts => {
    this.setState({
        costsList: [newCosts, ...this.state.costsList]
    });
  };

  searchForCategory = category => list => (list.category === category);
  searchForIncomes = category => list => (!list.category);
  searchForCosts = category => list => (list.category);

  searchForMonth = month => list => (list.month === month);

  sortUp = (x, y) => {
    return (parseInt(x["cost"]) - parseInt(y["cost"]))
  };

  render() {
    const { costsList, menuMonth, sortByMoney} = this.state;

    const filterMonth = costsList.filter(this.searchForMonth(menuMonth));

    const dataChartCategory = menuMonth ? filterMonth : costsList;
    
    const incomesSum = dataChartCategory.filter(this.searchForIncomes()).map(item =>  (+item.cost)).reduce((sum, current) => {return sum + current}, 0);
    const CostsSum = dataChartCategory.filter(this.searchForCosts()).map(item =>  (+item.cost)).reduce((sum, current) => {return sum + current}, 0);
    
    const sortByMoneyList = sortByMoney==="moneyUp" ?
          costsList.slice().sort(this.sortUp) : 
          costsList.slice().sort(this.sortUp).reverse()
 
    const foodCosts = dataChartCategory.filter(this.searchForCategory("Food")).map(item =>  (+item.cost)).reduce((sum, current) => {return sum + current}, 0);
    const purchasesCosts = dataChartCategory.filter(this.searchForCategory("Purchases")).map(item =>  (+item.cost)).reduce((sum, current) => {return sum + current}, 0);
    const entertainmentCosts = dataChartCategory.filter(this.searchForCategory("Entertainment")).map(item =>  (+item.cost)).reduce((sum, current) => {return sum + current}, 0);
    const otherCosts = dataChartCategory.filter(this.searchForCategory("Other...")).map(item =>  (+item.cost)).reduce((sum, current) => {return sum + current}, 0);
    

    console.log('income',incomesSum);
    console.log('income',CostsSum);
    
    return (

      <div className="app">

        <MaterialAppBar 
          openDialogCosts={this.handleOpenDialogCosts}
          openDialogIncomes={this.handleOpenDialogIncomes}
          count={this.state.count}
        />

        <SimpleExpansionPanel 
          changeMonth={this.handleOpenDialogByMonth}
          costs={costsList}
          filterMonth={menuMonth ? filterMonth : costsList}
          listByMoney={sortByMoneyList}
          flagFilterSortByMoney={sortByMoney}
          nowMonth={menuMonth}
          foodCosts={foodCosts}
          purchasesCosts={purchasesCosts}
          entertainmentCosts={entertainmentCosts}
          otherCosts={otherCosts}
          sortByMoneyUp={this.handleSortByMoneyUp}
          sortByMoneyDown={this.handleSortByMoneyDown}
          sortByDate={this.handleSortByDate}
          allIncomes={incomesSum}
          allCosts={CostsSum}
        />

        <ConfirmationDialog
          open={this.state.openCosts}
          onClose={this.handleCloseCategory}
          onCostsAdd={this.handleCostsAdd}
          onCostsChartAdd={this.handleCostsChartAdd}
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

        <SortByMonthDialog
          open={this.state.openSortByMonth}
          value={this.state.menuMonth}
          onClose={this.handleCloseSortByMonthDialog}
        />
      </div>
    );
  }
}

export default App;
