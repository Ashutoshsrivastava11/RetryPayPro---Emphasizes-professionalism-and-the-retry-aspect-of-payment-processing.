import React from 'react';

const PaymentStatus = ({ status }) => (
  <div className={`payment-status ${status.toLowerCase()}`}>
    <h3>{status}</h3>
  </div>
);

export default PaymentStatus;
