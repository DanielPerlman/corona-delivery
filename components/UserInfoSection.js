import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
}));

const baseClass = "user-info";

const UserInfoSection = props => {
  const classes = useStyles();
  const [shouldShowDriverForm, setShouldShowDriverForm] = useState(false);

  return (
    <div className={`${baseClass}`}>
      <div className={`${baseClass}-section deliver`}>
        <div className="content-container">
          <h3>"I need a delivery!"</h3>
          <Button className="button" color="primary" onClick={props.needsADelivery}>Place an order</Button>
        </div>
      </div>
      <div className={`${baseClass}-section help`}>
        <img src="/assets/help-image.jpg" />
        <h3>"I want to help!"</h3>
      </div>
      <div className={`${baseClass}-section driver`}>
        <img src="/assets/driver-image.jpg" />
        <div className="content-container">
          <h3>Are you a driver?</h3>
          <Button className="button" color="primary" onClick={() => setShouldShowDriverForm(true)}>Get in touch!</Button>
        </div>
      </div>
      <style jsx>{`

        .${baseClass}-section.deliver {
          background: #a6c2c6;
          width: 80%;
        }

        .${baseClass}-section.help h3,
        .${baseClass}-section.driver h3 {
          font-weight: 400;
          font-size: 1.1em;
          font-variant: small-caps;
        }

        .${baseClass}-section.help img,
        .${baseClass}-section.driver img {
          height: 70%;
          position: absolute;
          top: 50%;
          transform: translate(-30%,-50%);
        }

        .${baseClass}-section.help img {
          right: 0;
          transform: translate(30%,-50%);
        }

        .${baseClass}-section.driver img {
          left: 0;
        }

        .${baseClass}-section.help {
          float: left;
        }

        .${baseClass}-section.deliver .content-container {
          width: 70%;
          margin: auto;
        }

        .${baseClass}-section.driver .content-container {
          float: right;
        }

        .${baseClass}-section.driver {
          float: right;
        }

        .${baseClass}-section.help,
        .${baseClass}-section.driver

        .${baseClass}-section.help,
        .${baseClass}-section.driver {
          background: #cdcee0;
          width: 80%;
          position: relative;
        }

        .${baseClass}-section {
          height 175px;
          margin: 10px auto;
          padding: 0 10px;
        }

        .${baseClass}-section .content-container {
          display: flex;
          flex-direction: column;
          text-align: center;
        }

        .${baseClass} {
          width: 100%;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}

export default UserInfoSection
