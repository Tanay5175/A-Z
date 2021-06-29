import React,{ useState,useEffect } from 'react';
import './Payment.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import {Link, useHistory} from 'react-router-dom';
import { CardElement ,useElements, useStripe } from '@stripe/react-stripe-js';
import { getBasketTotal } from './reducer';
import CurrencyFormat from 'react-currency-format';
import axios from './axios'
import { db } from './firebase';

function Payment() {
    const [{basket,user}, dispatch] = useStateValue();
    const history = useHistory(); 
    const stripe = useStripe();
    const elements = useElements();  

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDiasabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);
    
    useEffect(() => {
      //generate special stripe faeture to charge customer  
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [basket])

    const handleSubmit = async event => {
        //stripe functionality
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            //paymentIntent=paymentconfirmation

            db.collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
            .set({
                basket: basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created
            })

            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: 'EMPTY_CART'
            })

            history.replace('/orders')
        })
    }
    const handleChange = event => {
         //Listen for changes in CardElement
         //and dispaly any error as you type card details

         setDiasabled(event.empty);
         setError(event.error ? event.error.message : "");
    }

    return (
        <div className="payment">
           <div className="payment__container">
            <h1>
                Checkout (<Link to="/checkout">
                    {basket.length} items</Link>)
            </h1>

           <div className="payment__section">
               <div className="payment__title">
                   <h3>Email:</h3>
               </div>
               <div className="payment__address">
                   <p>{user?.email}</p>
               </div>
           </div>
           {/*Items*/}
           <div className="payment__section">
           <div className="payment__title">
               <h3>Review Items:</h3>
           </div>
           <div className="payment__items">
               {basket.map(item =>(
                 <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                /> 
               ))}
           </div>
           </div>
           {/*Payment*/}
           <div className="payment__section">
           <div className="payment__title">
               <h3>Payment Method:</h3>
           </div>
           <div className="payment__detail">
               {/*stripe feature*/}
               <form onSubmit={handleSubmit}>
                   <CardElement onChange={handleChange} />
                   <div className="payment__priceContainer">
                       <CurrencyFormat
                       renderText={(value) =>(
                           <h3>Order Total:{value}</h3>
                       )}
                       value={getBasketTotal(basket)}
                       displayType={"text"}
                       thousandSeparator={true}
                       prefix={"Rs."}
                      />
                      <button disabled={processing || disabled|| succeeded}>
                          <span>{processing ? <p>Processing</p> : "Buy Now"}
                          </span>
                      </button>
                   </div>
                   {error && <div>(error)</div>}
               </form>
           </div>
           </div>
           </div>
        </div>
    )
}

export default Payment 
