import React, { useState } from 'react';
import PaymentForm from './components/PaymentForm';
import PaymentStatus from './components/PaymentStatus';
import RetryButton from './components/RetryButton';
import './styles/App.css';  // Import the CSS file

const App = () => {
  const [status, setStatus] = useState('');

  const processPayment = async (payment) => {
    try {
      const response = await fetch('/api/payments/process', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payment),
      });
      const result = await response.text();
      setStatus(result);
    } catch (error) {
      setStatus('Error processing payment');
    }
  };

  const retryPayment = () => {
    setStatus('');
  };

  return (
    <div className="container">
      <h1>Payment Retry Mechanism</h1>
      <PaymentForm processPayment={processPayment} />
      {status && <PaymentStatus status={status} />}
      {status === 'FAILED' && <RetryButton retryPayment={retryPayment} />}
    </div>
  );
};

export default App;
