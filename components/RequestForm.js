import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from '@material-ui/core/MenuItem';
import fetch from 'isomorphic-unfetch'
import React, { useState } from 'react';
import Input from '~/components/Input';
import Select from 'react-select';

const amountTypeOptions = [
  {
    value: 'units',
    label: 'pc'
  },
  {
    value: 'kilo',
    label: 'kg'
  },
  {
    value: 'grams',
    label: 'g'
  },
  {
    value: 'liters',
    label: 'l'
  },
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
    margin: 'auto',
    boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.1)',
    borderRadius: 0
  },
  row2Input: {
    width: '48%'
  }
}));

const RequestForm = React.forwardRef((props, ref) => {
  const classes = useStyles();
  const [orderItems, setOrderItems] = useState(['']);
  const [possibleShoppingItemsChosen, choosePossibleItems] = useState({0: ''});
  const [deliveryTime, setDeliveryTime] = useState(0);
  const [deliveryCost, setDeliveryCost] = useState(0);
  const [values, setValues] = useState({
    donation_amount: 0
  });

  const handleChange = (value, i) => {

    choosePossibleItems({...possibleShoppingItemsChosen, [i]: value});
  };

  const handleChangeInput = (event) => {
    let { value, name } = event;
    setValues({...values, [name]: value});
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
  }

  return (
    <div className="request-form-container" ref={ref}>
      <Card className={classes.card}>
        <form className="request-info" onSubmit={submitForm}>
            <div className="row step-1">
              <h3> 1. Make a new order </h3>

              {orderItems.map((orderItem, i) => {
                return (<div className="order-item-row">

                  <Input
                    value={orderItem.amount}
                    onChange={handleChange}
                    name={`amount.${i}`}
                    id={`amount.${i}`}
                    placeholder="Amount"
                    width="120px"
                  />
                  <Select
                    className="selector-amount-type"
                    value={orderItem.amount_type || amountTypeOptions[0]}
                    onChange={handleChange}
                    styles={
                      {
                        control: (base, state) => ({
                          ...base,
                          border: '2px solid black',
                          boxShadow: state.isFocused ? 0 : 0,
                          borderLeft: '0'
                          // You can also use state.isFocused to conditionally style based on the focus state
                        }),
                        container: () => ({
                          marginRight: '5px',
                          position: 'relative',
                          width: '80px'
                        })
                      }
                    }
                    theme={(theme) => ({
                      ...theme,
                      borderRadius: 0,
                      colors: {
                      ...theme.colors,
                        color: 'black',
                      },
                    })}
                    options={amountTypeOptions}
                  />

                  <Input
                    value={orderItem.product}
                    onChange={handleChange}
                    name={`product.${i}`}
                    id={`product.${i}`}
                    placeholder="Product name"
                    marginRight="5px"
                    flex={true}
                  />

                  <Input
                    value={orderItem.comment}
                    onChange={handleChange}
                    name={`comment.${i}`}
                    id={`comment.${i}`}
                    placeholder="Comments"
                    flex={true}
                  />
                </div>);
              })}

              <Button className={`button ${classes.buttonAddItem}`} color="primary" onClick={() => setOrderItems([...orderItems, ""])}> Add Items </Button>
            </div>
            <div className="row step-2">
              <h3> 2. Delivery details </h3>
              <div className="form-group">
                  <Input
                    value={values.fullname}
                    onChange={handleChangeInput}
                    name="fullname"
                    id="fullname"
                    label="Full name"
                    width="48%"
                  />

                  <Input
                    value={values.phone}
                    onChange={handleChangeInput}
                    name="phone"
                    id="phone"
                    label="Phone number"
                    width="48%"
                  />
              </div>
              <div className="form-group">
                <Input
                  value={values.address}
                  onChange={handleChangeInput}
                  name="address"
                  id="address"
                  label="Address"
                  width="48%"
                />
                <div className="selector">
                  <span style={{ 'margin-bottom': '5px', 'display': 'block' }}>Delivery time</span>
                  <Select
                    className="selector-delivery"
                    value={values.delivery_time}
                    onChange={handleChangeInput}
                    styles={
                      {
                        control: (base, state) => ({
                          ...base,
                          border: '2px solid black'
                          // You can also use state.isFocused to conditionally style based on the focus state
                        }),
                      }
                    }
                    theme={(theme) => ({
                      ...theme,
                      borderRadius: 0,
                      colors: {
                      ...theme.colors,
                        color: 'black',
                      },
                    })}
                    options={[
                      {
                        value: 1,
                        label: '1 Day'
                      },
                      {
                        value: 3,
                        label: '3 Days'
                      },
                      {
                        value: 7,
                        label: '1 Week'
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
            <div className="row step-3">
              <h3> 3. Would you like to donate extra to help with delivery costs for others in need?</h3>
              <p>
                By choosing to pay extra – you are helping those who need supplies, but can’t afford it at this moment. You can choose to pay as much as you wish! We will let you know when we use your donation for a delivery, so that you know when you have helped someone.
              </p>
              <Input
                value={values.donation_amount}
                onChange={handleChangeInput}
                name="donation_amount"
                id="donation_amount"
                label="Free donation amount"
                width="48%"
                type="number"
              />
            </div>
            <Button className={`button ${classes.button}`} type="submit" color="primary"> Order now & pay at delivery </Button>
            <span className="price-notice">You only pay for the retail price + delivery cost ({deliveryCost} kr)</span>
        </form>
      </Card>
      <style jsx global>{`

      `}</style>
      <style jsx>{`

        .price-notice {
          text-align: center;
          margin-top: 15px;
          margin-bottom: 20px;
          display: block;
        }

        .request-form-container {
          margin: auto;
          width: 100%;
          margin-top: -20px;
          z-index: 10;
        }

        .request-info {
          display: flex;
          flex-direction: column;
        }

        .row {
          padding: 20px 40px;
          border-bottom: 2px dashed #000000;
        }

        .form-group {
          display: flex;
          flex-direction: row;
          justify-content: space-evenly;
          margin-top: 20px;
        }

        .selector {
          width: 48%;
          position: relative;
        }

        .row:nth-of-type(3) {
          border: none;
        }

        .step-2 {
          padding-bottom: 80px;
        }

        .step-3 {
          width: 60%;
        }

        .row h3 {
          font-size: 28px;
        }
        .text-input-selector {
          height: 48px !important;
        }

        .order-item-row {
          display: flex;
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
