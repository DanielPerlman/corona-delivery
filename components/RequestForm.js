import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import React, { useState } from 'react';

const possibleShoppingItems = [
  {
    'name': 'pasta'
  },
  {
    'name': 'milk'
  },
  {
    'name': 'other'
  }
];

const useStyles = makeStyles(theme => ({
  textInput: {
    marginTop: "10px",
    height: '30px'
  },
  textInputItem: {
    width: `calc(100% - 100px)`,
    marginLeft: '10px'
  },
  select: {
    height: '48px',
    width: '90px'
  },
  button: {
    margin: 'auto'
  },
  buttonAddItem: {
    margin: 'auto'
  }
}));

const RequestForm = props => {
  const classes = useStyles();
  const [orderItems, setOrderItems] = useState(['']);
  const [possibleShoppingItemsChosen, choosePossibleItems] = useState({});

  const handleChange = (value, i) => {

    choosePossibleItems({...possibleShoppingItemsChosen, [i]: value});
  };
  return (
    <div className="request-form-container">
      <Card className={classes.card}>
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
              {orderItems.map((orderItem, i) => {
                return (<div>
                  <Select
                    value={possibleShoppingItemsChosen[i]}
                    onChange={(event) => handleChange(event.target.value, i)}
                    className={classes.select}
                  >
                    {possibleShoppingItems.map((possibleShoppingItem, index) => {
                      return (<MenuItem value={possibleShoppingItem.name}>{possibleShoppingItem.name}</MenuItem>)
                    })}
                  </Select>

                  {possibleShoppingItemsChosen[i] == 'other' && <TextField
                      className={classes.textInputItem}
                      name={`orderItem${i+1}`}
                      key={`o${i}`}
                      type="text"
                      value={orderItem}
                      label="Any item that is accessible"
                  />}
                </div>);
              })}
              <Button className={classes.buttonAddItem} color="primary" onClick={() => setOrderItems([...orderItems, ""])}> Add Item </Button>
            </div>
            <Button className={classes.button} type="submit" color="primary"> Submit </Button>
        </form>
      </Card>

      <style jsx>{`

        .request-form-container {
          margin: auto;
          margin-top: 50px;
          width: 90%;
        }

        .request-info {
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
