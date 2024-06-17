import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [registeredEmail, setRegisteredEmail] = useState('');

  const handleForgotPassword = async () => {
    if (!email) {
      toast.error('Please enter your email');
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post('http://localhost:5000/api/forgot-password', { email });
      setLoading(false);

      if (response.status === 200) {
        toast.success(response.data.message); // Show success message using toast
        // Clear the email input after successful submission
        setEmail('');
        setRegisteredEmail('');
      }
    } catch (error) {
      setLoading(false);
      if (error.response && error.response.status === 404) {
        // Handle case where user is not found (status code 404)
        if (error.response.data && error.response.data.registeredEmail) {
          setRegisteredEmail(error.response.data.registeredEmail);
        }
        toast.error(`User with email ${email} is not registered`);
      } else {
        console.error('Error sending reset password email:', error.message);
        toast.error('Failed to send reset password email. Please try again later.');
      }
    }
  };

  return (
    <div>
      <input
        style={{ marginTop: '12px', padding: '20px' }}
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <button
        style={{ marginTop: '12px', padding: '20px', backgroundColor: '#F8D82D' }}
        onClick={handleForgotPassword}
        disabled={loading}
      >
        {loading ? 'Sending...' : 'Send Reset Email'}
      </button>

      {registeredEmail && (
        <div style={{ marginTop: '10px', color: 'green' }}>
          Registered email: {registeredEmail}
        </div>
      )}

      <ToastContainer /> {/* Container for toast notifications */}
    </div>
  );
}
