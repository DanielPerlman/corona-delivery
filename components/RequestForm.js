import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from '@material-ui/core/MenuItem';
import fetch from 'isomorphic-unfetch'
import React, { useState, useEffect } from 'react';
import Input from '~/components/Input';
import Select from 'react-select';
import AddIcon from '@material-ui/icons/Add';
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
  },
  select: {
    height: '48px',
    width: '90px'
  },
  button: {
    margin: 'auto',
    marginTop: '30px',
    width: '100%'
  },
  buttonAddItem: {
    margin: '10px auto',
    background: '#b3d4d8',
    borderRadius: '50px',
    width: '100%',
    color: 'black',
    height: '60px',
    textTransform: 'none',
    fontSize: '20px',
    fontWeight: '400',
    '@media screen and (max-width: 767px )': {
      lineHeight: '40px',
      padding: 0,
      height: '40px'
    }
  },
  card: {
    maxWidth: '1200px',
    margin: 'auto',
    boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.1)',
    borderRadius: 0,
    background: '#d9e9eb'
  },
  row2Input: {
    width: '48%'
  }
}));

const RequestForm = React.forwardRef((props, ref) => {
  const classes = useStyles();
  const [orderItems, setOrderItems] = useState([]);
  const [deliveryTime, setDeliveryTime] = useState(0);
  const [deliveryCost, setDeliveryCost] = useState(0);
  const [values, setValues] = useState({});
  const [done, setDone] = useState(false);
  const [initial, setInitial] = useState(true);
  
  useEffect(
    () => {
      if (initial) setOrderItems([{}]);
      setInitial(false)
    },
    [initial]
  )
  const handleChange = (event, i) => {
    let {value, name} = event.target;
    let orderItemsEdited = orderItems;
    orderItems[i][name] = value;
    
    setOrderItems(orderItemsEdited);
  };
  
  const handleChangeInput = (event) => {
    
    let { value, name } = event.target;
    setValues({...values, [name]: value});
  };
  
  const handleChangeInputSelect = (selection) => {
    setValues({...values, delivery_time: selection});
  };
  
  const handleChangeInputAmountType = (selection, i) => {
    let orderItemsEdited = orderItems;
    orderItems[i]['amount_type'] = selection;
    
    setOrderItems(orderItemsEdited);
  };

  const submitForm = (e) => {
    e.preventDefault();
    let valuesFormatted = values;
    valuesFormatted.delivery_time = values.delivery_time.value;
    let body = {
      ...valuesFormatted,
      delivered: false,
      delivering: false,
      order_items: orderItems.map((orderItem) => {
        orderItem.amount_type = orderItem.amount_type.value;
        return orderItem;
      })
    };
    
    body = JSON.stringify(body);
    
    fetch(`https://coronadelivery.eu/api/v1/order`, {
      method: 'post',
      body: body,
      headers: new Headers({
        'content-type': 'application/json; charset=utf-8',
        'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
      }),
    })
    .then((res) => res.json())
    .then((res) => {
        console.log('Fetch signup result:',res)
        setDone(true);
    })
    .catch((err)=>{
        console.error('Fetch signup ERROR:',err)
});
    

  }

  return (
    <div className="request-form-container" ref={ref}>
      <Card className={classes.card}>
        {!done && <form className="request-info" onSubmit={submitForm}>
            <div className="row step-1">
              <h3> 1. Make a new order </h3>

              {orderItems.map((orderItem, i) => {
                return (<div className="order-item-row">

                  <Input
                    value={orderItem.amount}
                    onChange={(event) => handleChange(event, i)}
                    name={`amount`}
                    id={`amount.${i}`}
                    placeholder="Amount"
                    width="60px"
                    widthMobile ="60px"
                  />
                  <Select
                    required
                    className="selector-amount-type"
                    value={orderItem.amount_type}
                    onChange={(selection) => handleChangeInputAmountType(selection, i)}
                    name="amount_type"
                    isSearchable={false}
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
                    onChange={(event) => handleChange(event, i)}
                    name={`product`}
                    id={`product.${i}`}
                    placeholder="Product name"
                    marginRight="5px"
                    marginRightMobile="0px"
                    flex={true}
                  />
                  <div className="break"></div>

                  <Input
                    value={orderItem.comment}
                    onChange={(event) => handleChange(event, i)}
                    name={`comment`}
                    id={`comment.${i}`}
                    placeholder="Comments"
                    flex={true}
                    marginTopMobile="5px"
                    noRequire={true}
                  />
                </div>);
              })}

              <Button className={`button ${classes.buttonAddItem}`} color="primary" onClick={() => setOrderItems([...orderItems, { }])}> <AddIcon /> Add product </Button>
            </div>
            <div className="row step-2">
              <h3> 2. Delivery details </h3>
              <div className="form-group">
                  <Input
                    value={values.fullname}
                    onChange={handleChangeInput}
                    name="name"
                    id="name"
                    label="Full name"
                    width="48%"
                    widthMobile="100%"
                    marginTopMobile="5px"
                  />

                  <Input
                    value={values.phone}
                    onChange={handleChangeInput}
                    name="phone"
                    id="phone"
                    label="Phone number"
                    width="48%"
                    widthMobile="100%"
                    marginTopMobile="5px"
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
                  widthMobile="100%"
                  marginTopMobile="5px"
                />
                <div className="selector">
                  <span >Delivery time</span>
                  <Select
                    required
                    className="selector-delivery"
                    value={values.deliveryTime}
                    onChange={handleChangeInputSelect}
                    isSearchable={false}
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
                value={values.donation}
                onChange={handleChangeInput}
                name="donation"
                id="donation"
                label="Free donation amount"
                width="48%"
                type="number"
                defaultValue={0}
              />
            </div>
            <div className="submit-section">
              <Button className={`button default ${classes.button}`} type="submit" color="primary"> Order now & pay at delivery </Button>
              <span className="price-notice">You only pay for the retail price + delivery cost ({deliveryCost} kr)</span>
            </div>
        </form>}
        
        {done && <h4>We will be in touch shortly!</h4>}
      </Card>
      <style jsx>{`
        
        .submit-section {
          padding: 20px 40px;
        }

        .price-notice {
          text-align: center;
          margin-top: 15px;
          margin-bottom: 20px;
          display: block;
        }

        .request-form-container {
          margin: auto;
          width: 100%;
          margin-top: -50px;
          z-index: 10;
          max-width: 1000px;
          position: relative;
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
        
        .selector span {
          font-weight: 500;
          margin-bottom: 5px;
          display: block;
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
          margin-bottom: 10px;
          flex-wrap: wrap;
        }

        @media screen and (max-width: 767px ) {
          .request-form-container {
            padding: 0 10px;
          }
          .row {
            margin: 5px 0;
          }
          .break {
            flex-basis: 100%;
            height: 0;
          }
                  
          .step-3,
          .selector{
            width: 100%;
          }

          .selector {
            margin-top: 5px;
          }
        
          
          .form-group {
            flex-wrap: wrap;
          }
        }
      `}</style>
    </div>
)
})

export default RequestForm
