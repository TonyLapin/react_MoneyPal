/* eslint-disable react/no-multi-comp */

import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';



class ConfirmationAddDialog extends React.Component {

  state = {
    count: this.props.value,
    amount: '',
    avatar: 'https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/money-circle-green-3-512.png'
  };


  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleOk = () => {

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

    const newIncomes = {
      id: Date.now(),
      cost: this.state.amount,
      month: monthStr,
      avatar: this.state.avatar      
    };

    this.props.onIncomesAdd(newIncomes);

    let dateNow = new Date();
    let dateNowStr = dateNow.toString();
    let count1 = parseInt(this.props.value);
    let amount1 = parseInt(this.state.amount);
    let summ = count1 + amount1;
    this.props.onClose(amount1 ? summ : count1);
    this.props.onCloseIncomes(amount1);
    this.props.onCloseDate(dateNowStr);
    this.resetState();
  };

  handleCancel = () => {
    this.props.onClose(this.props.value);
  };

  resetState() {
    this.setState({
      amount: ''
    });
};

  render() {
    
    const { value, ...other } = this.props;
    
    return (
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        maxWidth="xs"
        aria-labelledby="confirmation-dialog-title"
        {...other}
      >
        <DialogTitle id="confirmation-dialog-title">Enter Income</DialogTitle>
        <DialogContent>
            <FormControl fullWidth >
              <InputLabel htmlFor="adornment-amount">Incomes</InputLabel>
              <Input
                  type="number"
                  id="adornment-amount"
                  onChange={this.handleChange('amount')}
                  startAdornment={<InputAdornment position="start">$</InputAdornment>}
            />
        </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleOk} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

ConfirmationAddDialog.propTypes = {
  value: PropTypes.number,
};



export default ConfirmationAddDialog;
