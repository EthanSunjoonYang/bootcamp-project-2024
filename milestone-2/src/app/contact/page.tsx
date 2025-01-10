 'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, // Service ID from EmailJS
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, // Template ID from EmailJS
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! // Public Key from EmailJS
      );
      console.log('Email successfully sent:', response);
      setStatusMessage('Success! Your message has been sent.');
      setFormData({ name: '', email: '', message: '' }); // Reset form fields
    } catch (error: any) {
      console.error('Error sending email:', error?.text || error?.message || error);
      setStatusMessage('Failed to send your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <main>
        <form id="contact-form" className="form" onSubmit={handleSubmit}>
          <div>
            <h1>Contact Us</h1>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              placeholder="Your message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submitButton" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          {statusMessage && <p>{statusMessage}</p>}
        </form>
      </main>
    </div>
  );
}