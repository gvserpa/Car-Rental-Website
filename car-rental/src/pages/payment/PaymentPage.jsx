import React, { useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../../components/checkout/CheckoutForm.jsx";
import { useLocation } from "react-router-dom";
import "./index.css";

const stripePromise = loadStripe("pk_test_51S3Vih3uAuTjpPh8wXlNLvL0n8uQpRcHyUO4qonHP2Y2egY3rHdpqKW83T7Qhe8OgfeHwqEROhMnPR10MwXqpvm6007DRo00uF");

const PaymentPage = () => {
  const location = useLocation();
  const { car, amount, date, img } = location.state;
  const [paymentStatus, setPaymentStatus] = useState(null); // 'success' | 'error' | null
  const [message, setMessage] = useState("");

  // Função para atualizar status após pagamento
  const handlePaymentResult = (status, msg) => {
    setPaymentStatus(status);
    setMessage(msg);
  };

  return (
    <div className="payment-page">
      <div className="payment-header">
        <h1>Finalize Your Booking</h1>
        <p>Complete your payment to reserve your car</p>
      </div>

      <div className="payment-content">
        {/* Lado esquerdo: detalhes da compra */}
        <div className="payment-details">
          {img && <img src={img} alt={car} className="car-image" />}
          <div className="car-info">
            <h2>{car}</h2>
            <p>Date: <strong>{date}</strong></p>
            <p>Price: <strong>AU${(amount / 100).toFixed(2)}</strong></p>
            <p className="extra-info">
              Thank you for choosing our service! Your booking will be confirmed once the payment is successful.
            </p>
          </div>
          {paymentStatus && (
            <p className={`payment-message ${paymentStatus}`}>
              {message}
            </p>
          )}
        </div>

        {/* Lado direito: formulário Stripe */}
        <div className="checkout-container">
          <Elements stripe={stripePromise}>
            <CheckoutForm amount={amount} onPaymentResult={handlePaymentResult} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
