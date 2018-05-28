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
    
  }
});

class SimpleExpansionPanel extends React.Component {
  state = {
    amount: '',
    month: this.props.month,
    
    
  };

  // handleChange = prop => event => {
  //   this.setState({ [prop]: event.target.value });
  // };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>

        <ExpansionPanel defaultExpanded={true}>
          <ExpansionPanelSummary >
            <Typography className={classes.heading}>List</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
          <FormControl fullWidth>
            <CostsList 
              costs={this.props.costs}
              incomes={this.props.incomes}
            />
          </FormControl>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Chart</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <FormControl fullWidth>
              <Chart  chartData={this.state.chartData}
                      month={this.state.month} 
                      labelMonth={this.props.nowMonth}
                      legendPosition="bottom"/>
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
