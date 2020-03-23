import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FlipCard from '~/components/FlipCard'
import Accordion from '~/components/Accordion'

const useStyles = makeStyles(theme => ({
  driverButton: {
    marginBottom: '5px'
  }
}));

const baseClass = "user-info";

const UserInfoSection = props => {
  const classes = useStyles();
  const [shouldShowDriverForm, setShouldShowDriverForm] = useState(false);
  const applyToDrive = (callback) => {
    return true;
    callback();
  };

  return (
    <div className={`${baseClass}-container`}>
      <div className={`${baseClass}-section deliver`}>
        <div className="content-container">
          <h3>"I need a delivery!"</h3>
          <Button className={`button ${classes.driverButton}`} color="primary" onClick={props.needsADelivery}>Place an order</Button>
          <Accordion
            backgroundColor="#a6c2c6"
            accordionSections={[
            {
              summary: "I can't afford this!",
              details: `
                <p style="font-style:italic;">Coming soon; We need enough donations before we can start covering deliveries for those in need.</p>
                <h4>For those who have lost their jobs or are uncertain about their financial situation \n because of the covid-19 crisis, we have options!</h4>
              `,
              cards: [
                {
                  title: 'Pay when you can:',
                  text: "  Don't know when your next salary comes in? No problem, we allow for payment delays up to 2 months."
                },
                {
                  title: 'Pay what you can:',
                  text: "If you need to keep costs low for the next several months, we understand. Just let us know what you can pay, and donations will cover the rest"
                }
              ]
            }
          ]} />
        </div>
      </div>
      <div className={`${baseClass}`}>
        <div className={`${baseClass}-section help`}>
          <img src="/assets/help-image.jpg" />
          <div className="content-container">
            <h3>"I want to help!"</h3>
            <Accordion
              backgroundColor="#cdcee0"
              accordionSections={[
              {
                summary: "Who am I helping?",
                details: `
                  - Taxi drivers, who are currently left without any work or income because of the confinement \n
                  - People hit hard by the crisis, in bad financial situations with no clear end in sight.
                `
              },
              {
                summary: "How can I help?",
                details: `
                  By placing an order and paying for delivery, you are helping out a taxi driver that is otherwise left without work and income. \n
                  By choosing to pay extra, you are helping those who need supplies, but can’t afford it at this moment. You can choose to pay as much as you wish! \n
                  We will let you know when we use your donation for a delivery, so that you know when you have helped someone.

                `
              }
            ]} />
          </div>
        </div>
        <div className={`${baseClass}-section driver`}>
          <img src="/assets/driver-image.jpg" />
          <div className="content-container">
            <h3>Are you a driver?</h3>
            <FlipCard
              driverApplied={applyToDrive}
            />
            <p>Are you a driver without work?</p>
          </div>
        </div>
      </div>
      <style jsx>{`

        .${baseClass}-section.deliver {
          background: #a6c2c6;
          width: 80%;
          margin: 0 auto;
          margin-top: 10px;
          padding-bottom: 20px;
        }

        .${baseClass}-container {
          width: 100vw;
        }

        .${baseClass}-section.help h3,
        .${baseClass}-section.driver h3,
        .${baseClass}-section.deliver h3 {
          font-weight: 400;
          font-variant: small-caps;
        }

        .${baseClass}-section.help img,
        .${baseClass}-section.driver img {
          width: 50%;
          position: absolute;
          top: 50%;
          transform: translate(-30%,-50%);
        }

        .${baseClass}-section.help img {
          right: 0;
          transform: translate(30%,-50%);
          z-index: 10;
        }

        .${baseClass}-section.driver img {
          left: 0;
        }

        .${baseClass}-section.help {
          float: left;
          margin-right: 50px;
        }

        .${baseClass}-section.help .content-container {
          float: left
        }

        .${baseClass}-section.deliver .content-container {
          width: 70%;
          margin: auto;
        }

        .${baseClass}-section.driver,
        .${baseClass}-section.driver .content-container {
          float: right;
        }

        .deliver p {
          font-style: italic;
          width: 80%;

        }


        .${baseClass}-section.help,
        .${baseClass}-section.driver {
          background: #cdcee0;
          width: 80%;
          position: relative;
        }

        .${baseClass}-section {
          min-height 175px;
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

        @media (min-width: 600px) {

          .${baseClass}-section.deliver {
              width: 100%;
              height: auto;
              min-height: 300px;
              margin-top: 0;
          }

          .${baseClass} {
            max-width: 1200px;
            margin: auto;
          }

          .${baseClass}-section.deliver .content-container {
            align-items: center;
          }

          .${baseClass}-section .content-container {
            display: flex;
            height: 100%;
            justify-content: center;
          }

          .${baseClass}-section {
            min-height: 520px;
          }

          .${baseClass}-section.help .content-container,
          .${baseClass}-section.driver .content-container{
            align-items: center;
            display: flex;
            width: 60%;
          }

        }
      `}</style>
    </div>
  );
}

export default UserInfoSection
/*
TEMPORARY HIDE: 

<p>*I'm not sure I can afford this</p>

*/