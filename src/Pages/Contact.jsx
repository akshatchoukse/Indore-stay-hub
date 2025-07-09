import React, { useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields.');
      return;
    }

    console.log('Form data submitted:', formData);

    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div>
      <Header />

<div className="max-w-md mx-auto p-4 bg-white rounded shadow mt-26 mb-26">
  <div className="mb-4">
    <label className="block mb-2" htmlFor="name">Name</label>
    <input
      id="name"
      name="name"
      type="text"
      className="w-full p-2 border rounded"
      placeholder="Your Name"
      required
    />
  </div>

  <div className="mb-4">
    <label className="block mb-2" htmlFor="email">Email</label>
    <input
      id="email"
      name="email"
      type="email"
      className="w-full p-2 border rounded"
      placeholder="Your Email"
      required
    />
  </div>

  <div className="mb-4">
    <label className="block mb-2" htmlFor="message">Message</label>
    <textarea
      id="message"
      name="message"
      rows="4"
      className="w-full p-2 border rounded"
      placeholder="Your Message"
      required
    />
  </div>

  <div>
    <button
      type="button"
      className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
    >
      Send
    </button>
  </div>
</div>

      <Footer />
    </div>
  );
}

export default Contact;
