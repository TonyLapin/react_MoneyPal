import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FormControl from '@material-ui/core/FormControl';
import Chart from './Chart';
import CostsList from './CostsList/List';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Switch from '@material-ui/core/Switch';
import green from '@material-ui/core/colors/green';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(18),
    fontWeight: theme.typography.fontWeightRegular,
  },
  margin: {
    margin: theme.spacing.unit,
    
  },
  switchBase: {
    color: green[50],
    '&$checked': {
      color: green[500],
      '& + $bar': {
        backgroundColor: green[500],
      },
    },
  },
  bar: {},
  checked: {},
  groupSelector: {
    marginLeft: 200,
    marginBottom: 20
  }
});

class SimpleExpansionPanel extends React.Component {
  state = {
    amount: '',
    month: this.props.month,
    anchorEl: this.props.anchorEl,
    checkedB: true,
    checkedA: true,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget});
  };

  handleChangeSwitcher = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  handleChangeByMoneyUp = event => {
    this.setState({ menu: "moneyUp" });
    this.setState({ anchorEl: null });
  };

  handleChangeByMoneyDown = event => {
    this.setState({ menu: "moneyDown" });
    this.setState({ anchorEl: null });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {

    const { 
      classes,
      nowMonth,
      foodCosts,
      purchasesCosts,
      entertainmentCosts,
      otherCosts} = this.props;

    const { anchorEl } = this.state;

    return (
      <div className={classes.root}>

        <ExpansionPanel defaultExpanded={true}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>List coin</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
          <FormControl fullWidth>
            <FormGroup row className={classes.groupSelector}>
              <FormControlLabel
                control={
                  <Switch
                  checked={this.state.checkedB}
                  onChange={this.handleChangeSwitcher('checkedB')}
                  value="checkedB"
                  classes={{
                    switchBase: classes.switchBase,
                    checked: classes.checked,
                    bar: classes.bar,
                  }}
                  />
                }
                label="Incomes"
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={this.state.checkedA}
                    onChange={this.handleChangeSwitcher('checkedA')}
                    value="checkedA"
                    color="secondary"
                  />
                }
                label="Costs"
              />
              <Button
                aria-owns={anchorEl ? 'simple-menu' : null}
                aria-haspopup="true"
                onClick={this.handleClick}
                id="mainButton"
              >Sort By</Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={this.handleClose}
                onClick={this.handleClose}
              >
                  <MenuItem onClick={this.props.changeMonth}>month</MenuItem>
                  <MenuItem onClick={this.props.sortByMoneyUp}>moneyUp</MenuItem>
                  <MenuItem onClick={this.props.sortByMoneyDown}>moneyDown</MenuItem>
                  <MenuItem onClick={this.props.sortByDate}>date</MenuItem>
              </Menu>
            </FormGroup>
            <CostsList 
              filterMonth={!this.props.flagFilterSortByMoney ? this.props.filterMonth : this.props.listByMoney}
              costs={this.props.costs}
              incomes={this.props.incomes}
              showIncomes={this.state.checkedB}
              showCosts={this.state.checkedA}
            />
          </FormControl>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Cost сharts</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <FormControl fullWidth>
              <Chart  
                      legendPosition="bottom"
                      month={this.state.month} 
                      labelMonth={nowMonth}
                      food={foodCosts}
                      purchases={purchasesCosts}
                      entertainment={entertainmentCosts}
                      other={otherCosts}
                      incomesChart={this.props.allIncomes}
                      costsChart={this.props.allCosts}
              />
            </FormControl>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      
      </div>
    );
  }
}

SimpleExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleExpansionPanel);
