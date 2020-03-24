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
    
      <style jsx>{`
        
      `}</style>
    </div>
  );
}

export default UserInfoSection
/*
TEMPORARY HIDE: 

<p>*I'm not sure I can afford this</p>

*/