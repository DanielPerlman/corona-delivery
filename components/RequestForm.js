import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import fetch from 'isomorphic-unfetch'
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
  textInputItem: {
    width: `calc(100% - 100px)`,
    marginLeft: '10px',
    marginTop: '5px',
    '@media (min-width: 600px)': {
      marginTop: 0
    }
  },
  select: {
    height: '48px',
    width: '90px'
  },
  button: {
    margin: 'auto',
    marginTop: '30px'
  },
  buttonAddItem: {
    margin: '10px auto'
  },
  card: {
    maxWidth: '1200px',
    margin: 'auto'
  }
}));

const RequestForm = React.forwardRef((props, ref) => {
  const classes = useStyles();
  const [orderItems, setOrderItems] = useState(['']);
  const [possibleShoppingItemsChosen, choosePossibleItems] = useState({0: ''});

  const handleChange = (value, i) => {

    choosePossibleItems({...possibleShoppingItemsChosen, [i]: value});
  };

  const submitForm = (e) => {
    e.preventDefault();
    let { email, location, phone } = event.target;
    let body = {
      email: email.value,
      location: phone.value,
      phone: phone.value,
      accessible_item: orderItems.map((orderItem, i) => {
        return { type: possibleShoppingItemsChosen[i], comment: orderItem }
      })
    };
    /*
    fetch('http://localhost:3001/v1/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then( r => {
      debugger;
      open(r.headers.get('location'));
      return r.json();
    })*/
  }

  return (
    <div className="request-form-container" ref={ref}>
      <h2 className="form-title">Make an order</h2>
      <Card className={classes.card}>
        <form className="request-info" onSubmit={submitForm}>
            <div className="row">
              {orderItems.map((orderItem, i) => {
                return (<div>
                  <Select
                    value={possibleShoppingItemsChosen[i]}
                    onChange={(event) => handleChange(event.target.value, i)}
                    className={classes.select}
                    name={`accessible_item${i}.type`}
                  >
                    {possibleShoppingItems.map((possibleShoppingItem, index) => {
                      return (<MenuItem value={possibleShoppingItem.name}>{possibleShoppingItem.name}</MenuItem>)
                    })}
                  </Select>

                  <TextField
                      className={`text-input-selector ${classes.textInputItem}`}
                      name={`accessible_item${i}.type`}
                      key={`o${i}`}
                      type="text"
                      value={orderItem}
                      label="Any item that is accessible"
                      InputProps={{ classes: { input: classes.textInput } }}
                  />
                </div>);
              })}

              <Button className={`button ${classes.buttonAddItem}`} color="primary" onClick={() => setOrderItems([...orderItems, ""])}> Add Items </Button>
            </div>
            <TextField
                className={classes.textInput}
                name="email"
                type="email"
                label="Email"
            />
            <TextField
                className={classes.textInput}
                name="location"
                type="adress"
                label="Location"
            />
            <TextField
                className={classes.textInput}
                name="phone"
                type="text"
                label="Phone"
            />
            <Button className={`button ${classes.button}`} type="submit" color="primary"> Submit </Button>
        </form>
      </Card>

      <style jsx>{`

        .request-form-container {
          margin: auto;
          margin-top: 50px;
          width: 100%;
          background: #d9e9eb;
          padding: 100px;
        }

        .form-title {
          width: 100%;
          text-align: center;
          font-weight: normal;
          text-transform: uppercase;
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
        .text-input-selector {
          height: 48px !important;
        }
        @media screen and (max-width: 767px ) {
          .request-form-container {
            padding: 100px 10px;
          }
          .row {
            margin: 5px 0;
          }
        }
      `}</style>
    </div>
)
})

export default RequestForm
