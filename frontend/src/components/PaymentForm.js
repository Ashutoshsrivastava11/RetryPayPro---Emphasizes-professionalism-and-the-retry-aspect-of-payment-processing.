import React, { useState } from 'react';

const PaymentForm = ({ processPayment }) => {
  const [customerName, setCustomerName] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    processPayment({ customerName, amount });
  };

  return (
    <form onSubmit={handleSubmit} className="payment-form">
      <div>
        <label>Customer Name:</label>
        <input type="text" value={customerName} onChange={(e) => setCustomerName(e.target.value)} required />
      </div>
      <div>
        <label>Amount:</label>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
      </div>
      <button type="submit">Submit Payment</button>
    </form>
  );
};

export default PaymentForm;
