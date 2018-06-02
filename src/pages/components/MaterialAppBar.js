import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';



const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
    textAlign: "center",
    fontSize: "18px"

  },
};

class MaterialAppBar extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        
        <AppBar position="static">
          <Toolbar>
            <IconButton
              color="inherit" 
              aria-label="Menu"
              onClick={this.props.openDialogIncomes}>

              <SentimentSatisfiedIcon />

            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
                <p style={{fontSize: 28}}>Money Pal</p>
                <p 
                  style={(this.props.count>=0) ? 
                    {color: '#2be013',fontSize: 22} : 
                    {color: '#f44336',fontSize: 28}}
                >{this.props.count}</p>
            </Typography>

            <IconButton 
              color="inherit" 
              aria-label="Menu"
              onClick={this.props.openDialogCosts}>

              <SentimentDissatisfiedIcon />

            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}



export default withStyles(styles)(MaterialAppBar);