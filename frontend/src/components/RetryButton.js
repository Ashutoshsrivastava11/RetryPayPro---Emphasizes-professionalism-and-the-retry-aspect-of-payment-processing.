import React from 'react';

const RetryButton = ({ retryPayment }) => (
  <button onClick={retryPayment} className="retry-button">Retry Payment</button>
);

export default RetryButton;
