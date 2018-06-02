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



class SortByMonthDialog extends React.Component {
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
    this.props.onClose('');
  };

  handleOk = () => {
    this.state.value === 'All month' ? 
    this.props.onClose('') : 
    this.props.onClose(this.state.value)
  };

  handleChangeMonth = (event, value) => {
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
     const options =[ 'All month',
                      'January',
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
        <DialogTitle id="confirmation-dialog-title">Choose month</DialogTitle>
        <DialogContent>
          <RadioGroup
            ref={node => {
              this.radioGroup = node;
            }}
            aria-label="ringtone"
            name="ringtone"
            value={this.state.value}
            onChange={this.handleChangeMonth}
          >
            {options.map(option => (
              <FormControlLabel value={option} key={option} control={<Radio />} label={option} />
            ))}
          </RadioGroup>
          {/* <FormControl fullWidth >
              <InputLabel htmlFor="adornment-amount">Costs</InputLabel>
              <Input
                  type="number"
                  id="adornment-amount"
                  onChange={this.handleChangeAmount('amount')}
                  startAdornment={<InputAdornment position="start">$</InputAdornment>}
            />
        </FormControl> */}
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

SortByMonthDialog.propTypes = {
  onClose: PropTypes.func,
  value: PropTypes.string,
};



export default SortByMonthDialog;
