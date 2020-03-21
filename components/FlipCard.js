import React, { Component } from "react";
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import TextField from '@material-ui/core/TextField';
import { withStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';

const styles = theme => ({
  driverEmail: {
    width: 'calc(100% - 70px)',
    display: 'inline-block',
    float: 'left',
    marginLeft: '5px',
    "&&&:before": {
      borderBottom: "none",
      zIndex: 0
    },
    "&&:after": {
      borderBottom: "none",
      zIndex: 0
    }
  }
});
class FlipCard extends Component {

state = {
  flipped1: false,
  appliedSuccessfully: false
}

handleFlipping = id => () => {
  const cardId = `flipped${id}`;
  this.setState({ [cardId]: !this.state[cardId] });
}

render() {
  const { classes } = this.props;

  return (
    <Flippy
      flipOnClick={false} // default false
      flipDirection="horizontal" // horizontal or vertical
      ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
      // if you pass isFlipped prop component will be controlled component.
      // and other props, which will go to div/// these are optional style, it is not necessary
    >
      <FrontSide
        style={{
          width: '200px'
        }}
      >
        <Button className="button" color="primary" onClick={() => {this.flippy.toggle()}}>Get in touch!</Button>
      </FrontSide>
      <BackSide
        style={{
          width: '250px',
        }}>
          <div className="flip-card-back-container">
            <TextField
                className={classes.driverEmail}
                name="email_driver"
                type="email"
                label="Email"
                size="small"
                InputProps={classes.driverEmail}
            />
            <Button className="button" color="primary" onClick={() => {this.props.driverApplied(() => {this.setState({appliedSuccessfully: true})})}}>-></Button>
            <h5 className={`thank-you-text ${this.state.appliedSuccessfully ? 'show' : ''}`}>Thanks for applying, we'll be in touch!</h5>
        </div>
      </BackSide>
      <style jsx>{`
        .flip-card-back-container {
          overflow: hidden;
          position: relative;
        }

        .thank-you-text {
          position: absolute;
          top: 0;
          left: -250px;
          width: 0;
          transition: left 1s;
          background: #a6c2c6;
          height: 100%;
          z-index: 10;
          line-height: 45px;
          color: #176574 !important;
          margin: 0;
          white-space: nowrap;
        }

        .thank-you-text.show {
          width: 100%;
          left: 0;
        }


      `}</style>
    </Flippy>
    );
  }
}

export default withStyles(styles)(FlipCard);
