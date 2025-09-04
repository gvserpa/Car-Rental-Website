import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import './index.css'

const CheckoutForm = ({ amount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data } = await axios.post("http://localhost:5000/create-payment-intent", { amount });
    const clientSecret = data.clientSecret;

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (result.error) setMessage(result.error.message);
    else if (result.paymentIntent.status === "succeeded")
      setMessage("Pagamento realizado com sucesso!");
  };

  return (
    <form className="checkout-form" onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>Pagar</button>
      <p>{message}</p>
    </form>
  );
};

export default CheckoutForm;
