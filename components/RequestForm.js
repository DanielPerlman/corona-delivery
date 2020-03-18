import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from 'react';

const useStyles = makeStyles(theme => ({
  textInput: {
    width: "100%",
    marginTop: "10px",
  },
  button: {
    margin: 'auto'
  },
  buttonAddItem: {
    margin: 'auto'
  }
}));

const RequestForm = () => {
  const classes = useStyles();
  const [orderItems, setOrderItems] = useState(['']);

  return (
    <div className="request-form-container">
      <Card>
        <form className="request-info">
            <h2>How can we help?</h2>
            <TextField 
                className={classes.textInput}
                name="email" 
                type="email" 
                label="Email"
            />
            <TextField 
                className={classes.textInput}
                name="adress" 
                type="adress"
                label="Location" 
            />
            <TextField 
                className={classes.textInput}
                name="phoneNumber" 
                type="text" 
                label="Phone"
            />
            <div className="row">
              <h3>Order Items</h3>
              {orderItems.map((orderItem, i) =>
                (<TextField 
                    className={classes.textInput}
                    name={`orderItem${i+1}`} 
                    type="text" 
                    value={orderItem}
                    label="Any item that is accessible"
                />)
              )}
              <Button className={classes.buttonAddItem} color="primary" onClick={() => setOrderItems([...orderItems, ""])}> Add Item </Button>
            </div>
            <Button className={classes.button} type="submit" color="primary"> Submit </Button>
        </form>
      </Card>
      
      <style jsx>{`
      
        .request-form-container {
          margin-top: 50px;
        }
        .request-info {
          width: 50vw;
          padding: 20px;
          display: flex;
          flex-direction: column;
        }
        
        .row {
          margin: 20px;
          display: flex;
          flex-direction: column;
        }
        
        .row h3 {
          text-align: center;
        }
      `}</style>
    </div>
)
}

export default RequestForm
