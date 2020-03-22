import React, { useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Card from '@material-ui/core/Card';

const ExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    textAlign: 'left',
  },
  content: {
    lineHeight: '1rem'
  }
}))(MuiExpansionPanelDetails);

const useStyles = makeStyles({
  accordionStyle: {
    // CSS property
    background: props => props.backgroundColor
  },
  accordionCard: {
    display: 'inline-block',
    padding: '20px',
    '@media (min-width: 600px)': {
      width: '300px',
      marginLeft: '40px',
    }
  }
});

const Accordion = props => {
  const [expanded, setExpanded] = React.useState('');
  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const classes = useStyles(props);

  return (
    <div className="accordion">
      {props.accordionSections.map((accordionSection, i) => {
        return (
        <ExpansionPanel
          className={classes.accordionStyle}
          square
          expanded={expanded === `accordionSection${i}`}
          onChange={handleChange(`accordionSection${i}`)}
        >
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{accordionSection.summary}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              <div dangerouslySetInnerHTML={{__html: accordionSection.details}} />
              {accordionSection.cards &&
                <div className="accordion-cards">
                  {accordionSection.cards.map((card) => (
                    <Card className={classes.accordionCard}>
                      <h4>{card.title}</h4>
                      <p>{card.text}</p>
                    </Card>
                  ))}
                </div>
              }
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        );
      })}
      <style jsx>{`
        .accordion {
          margin-bottom: 20px;
          margin-top: 10px;
          white-space: pre-line;
        }

        .accordion p {
          width: 100%;
        }
        .accordion-cards {
          width: 100%;
        }

        @media (min-width: 600px) {
          .accordion-cards {
            display: flex;
            justify-content: center;
          }
          .accordion {
            width: 80%;
            margin: 0 auto;
          }
        }
      `}</style>
    </div>
  );
}

export default Accordion
