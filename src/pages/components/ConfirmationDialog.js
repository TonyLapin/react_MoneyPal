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
    count: this.props.count,
    amount: '',
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
  };
  
  handleChangeAmount = prop => event => {
    this.setState({ [prop]: event.target.value });
    
  };

  
  render() {
    console.log('categoryDialog:',this.state.value);
    console.log('amountDialog:',this.state.amount);
    
    const options = this.props.dialogOptions;

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
