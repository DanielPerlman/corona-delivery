import React, { Component } from "react";
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import TextField from '@material-ui/core/TextField';
import { withStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import '../node_modules/react-flippy/dist/styles.css';

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


          .flippy-card {
            padding: 0 !important;
          }
          .flippy-front .button {
            width: 100% !important;
          }

          .flippy-container *
          {
              box-sizing: border-box;
          }

          .flippy-cardContainer-wrapper
          {
            position: relative;
            height: 100%;
              width: 100%;
          }

          .flippy-cardContainer
          {
              height: 100%;
              width: 100%;
              position: relative;

              -webkit-transition: .6s;
                 -moz-transition: .6s;
                  -ms-transition: .6s;
                   -o-transition: .6s;
                      transition: .6s;
              -moz-transform: perspective(1000px);
                   transform: perspective(1000px);

              -webkit-transform-style: preserve-3d;
                 -moz-transform-style: preserve-3d;
                  -ms-transform-style: preserve-3d;
                   -o-transform-style: preserve-3d;
                      transform-style: preserve-3d;
          }

          .flippy-front,
          .flippy-back
          {
              position: relative;

              width: 100%;
              height: 100%;
              padding: 1em;

              -webkit-transform: rotateY(0deg);
                 -moz-transform: rotateY(0deg);
                  -ms-transform: rotateY(0deg);
                   -o-transform: rotateY(0deg);
                      transform: rotateY(0deg);

              background: transparent;
              box-shadow: 0 4px 8px 0 rgba(0,0,0,.2);

              -webkit-backface-visibility: hidden;
                 -moz-backface-visibility: hidden;
                  -ms-backface-visibility: hidden;
                      backface-visibility: hidden;
              -webkit-transform-style: preserve-3d;
                 -moz-transform-style: preserve-3d;
                   -o-transform-style: preserve-3d;
                  -ms-transform-style: preserve-3d;
                      transform-style: preserve-3d;
          }

          .flippy-front
          {
              -webkit-transform: rotateY(0deg);
                  -ms-transform: rotateY(0deg);
                      transform: rotateY(0deg);
          }

          .flippy-back
          {
              position: absolute;
              top: 0;
              left: 0;

              -webkit-transform: rotateY(-180deg);
                 -moz-transform: rotateY(-180deg);
                  -ms-transform: rotateY(-180deg);
                   -o-transform: rotateY(-180deg);
                      transform: rotateY(-180deg);
          }

          .flippy-cardContainer.isActive:not(.istouchdevice) .flippy-back,
          .flippy-cardContainer.isActive.istouchdevice .flippy-back
          {
              -webkit-transform: rotateY(0deg);
                 -moz-transform: rotateY(0deg);
                  -ms-transform: rotateY(0deg);
                   -o-transform: rotateY(0deg);
                      transform: rotateY(0deg);
          }

          .flippy-cardContainer.isActive:not(.istouchdevice) .flippy-front,
          .fflippy-cardContainer.isActive.istouchdevice .flippy-front
          {
              -webkit-transform: rotateY(180deg);
                 -moz-transform: rotateY(180deg);
                  -ms-transform: rotateY(180deg);
                   -o-transform: rotateY(180deg);
                      transform: rotateY(180deg);
          }

          .flippy-cardContainer-wrapper.vertical .flippy-back
          {
              -webkit-transform: rotateX(-180deg);
                 -moz-transform: rotateX(-180deg);
                  -ms-transform: rotateX(-180deg);
                   -o-transform: rotateX(-180deg);
                      transform: rotateX(-180deg);
          }

          .flippy-cardContainer-wrapper.vertical .flippy-cardContainer.isActive:not(.istouchdevice) .flippy-back,
          .flippy-cardContainer-wrapper.vertical .flippy-cardContainer.isActive.istouchdevice .flippy-back
          {
              -webkit-transform: rotateX(0deg);
                 -moz-transform: rotateX(0deg);
                  -ms-transform: rotateX(0deg);
                   -o-transform: rotateX(0deg);
                      transform: rotateX(0deg);
          }

          .flippy-cardContainer-wrapper.vertical .flippy-cardContainer.isActive:not(.istouchdevice) .flippy-front,
          .flippy-cardContainer-wrapper.vertical .flippy-cardContainer.isActive.istouchdevice .flippy-front
          {
              -webkit-transform: rotateX(180deg);
                 -moz-transform: rotateX(180deg);
                   -o-transform: rotateX(180deg);
                      transform: rotateX(180deg);
                      transform: rotateX(180deg);
          }

      `}</style>
    </Flippy>
    );
  }
}

export default withStyles(styles)(FlipCard);
