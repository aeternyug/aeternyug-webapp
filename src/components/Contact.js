// src/components/Contact.js
import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios'; // For handling form submissions

const ContactSection = styled.section`
  padding: 100px 20px;
  background: #F6F1F1;
  text-align: center;
`;

const ContactContent = styled.div`
  max-width: 600px;
  margin: auto;
  
  h2 {
    font-size: 2.5em;
    color: #0D3B66;
    margin-bottom: 20px;
  }
  
  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  
  input, textarea {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1em;
    width: 100%;
  }
  
  button {
    padding: 10px 20px;
    background: #0D3B66;
    color: #FFD700;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    font-size: 1em;
    
    &:hover {
      background: #FFD700;
      color: #0D3B66;
    }
  }
  
  .success-message, .error-message, .loading-message {
    margin-top: 20px;
    font-size: 1em;
    color: green;
  }
  
  .error-message {
    color: red;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [status, setStatus] = useState(null); // 'success', 'error'
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    setLoading(true);
    
    try {
      const response = await axios.post(process.env.REACT_APP_FORMSPREE_ENDPOINT, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (response.status === 200) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      }
    } catch (error) {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <ContactSection id="contact">
      <ContactContent>
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
        {loading && <p className="loading-message">Sending...</p>}
        {status === 'success' && <p className="success-message">Your message has been sent successfully!</p>}
        {status === 'error' && <p className="error-message">Something went wrong. Please try again later.</p>}
      </ContactContent>
    </ContactSection>
  );
};

export default Contact;
