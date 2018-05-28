/* eslint-disable react/no-multi-comp */

import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';


class ConfirmationDialog extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state.value = this.props.value;
  }

  state = {
    value: this.props.value,
    count: this.props.count,
    amount: '',
    avatar: ''
  };

  // TODO
  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setState({ value: nextProps.value });
    }
  }

  radioGroup = null;

  handleEntering = () => {
    this.radioGroup.focus();
  };

  handleCancel = () => {
    this.props.onClose(this.props.value);
    this.props.onCloseCount(this.props.count);
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
    const newCosts = {
      id: Date.now(),
      category: this.state.value,
      cost: this.state.amount,
      month: monthStr,
      avatar: this.state.avatar
    };
    this.props.onCostsAdd(newCosts);
    let dateNow = new Date();
    let dateNowStr = dateNow.toString();
    this.props.onClose(this.state.value);
    let count1 = parseInt(this.props.count);
    let amount1 = parseInt(this.state.amount);
    let summ = count1 - amount1;
    this.props.onCloseCount(summ);
    this.props.onCloseCosts(amount1);
    this.props.onCloseDate(dateNowStr);
  };

  handleChangeCategory = (event, value) => {
    this.setState({ value });

    if (value === "Food") {
      this.setState({ avatar: "http://adcom.co.za/media/com_jbusinessdirectory/pictures/categories/cateringicon-1492074698.png"}); 
    } else if (value === "Purchases") {
      this.setState({ avatar: "https://cdn3.iconfinder.com/data/icons/purchases-and-sales/512/transpo.png"});
    } else if (value === "Entertainment") {
      this.setState({ avatar: "https://static1.squarespace.com/static/5a157de0b7411ccec817e840/t/5a4546dd0d9297d33044ac7d/1523540988344/framed-and-focused-social-sharing-photobooth.png"});
    } else {
      this.setState({ avatar: "https://cdn3.iconfinder.com/data/icons/aami-web-internet/64/aami8-94-256.png"});
    };

  };
  
  handleChangeAmount = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  
  render() {
    console.log('categoryDialog:',this.state.value);
    console.log('amountDialog:',this.state.amount);
    console.log('amountDialog:',this.state.avatar);
    
    const options = ['Food', 'Purchases', 'Entertainment', 'Other...'];

    const { value, ...other } = this.props;

    return (
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        maxWidth="xs"
        onEntering={this.handleEntering}
        aria-labelledby="confirmation-dialog-title"
        {...other}
      >
        <DialogTitle id="confirmation-dialog-title">Enter Costs</DialogTitle>
        <DialogContent>
          <RadioGroup
            ref={node => {
              this.radioGroup = node;
            }}
            aria-label="ringtone"
            name="ringtone"
            value={this.state.value}
            onChange={this.handleChangeCategory}
          >
            {options.map(option => (
              <FormControlLabel value={option} key={option} control={<Radio />} label={option} />
            ))}
          </RadioGroup>
          <FormControl fullWidth >
              <InputLabel htmlFor="adornment-amount">Costs</InputLabel>
              <Input
                  type="number"
                  id="adornment-amount"
                  onChange={this.handleChangeAmount('amount')}
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

ConfirmationDialog.propTypes = {
  onClose: PropTypes.func,
  value: PropTypes.string,
};



export default ConfirmationDialog;
