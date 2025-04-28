import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2'; // ✅ Important!

const ContactUs = () => {
  const [successMessage, setSuccessMessage] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "00a22c40-b7c7-4daf-9e9f-dbc47dc0d9e0");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setSuccessMessage("Thank you for contacting us! We'll get back to you soon.");
      event.target.reset(); // ✅ Clears the form

      Swal.fire({
        title: "Good job!",
        text: "Your message has been sent!",
        icon: "success"
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSuccessMessage('');
      }, 5000);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  return (
    <section className="pt-28 pb-16 px-6 md:px-16 bg-background min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Contact Us
          </h1>
          <p className="text-secondaryText max-w-2xl mx-auto text-lg">
            We’d love to hear from you! Whether you have a question or just want to say hello, feel free to reach out.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 text-sm font-medium text-secondary">Name</label>
              <input 
                name="name"
                type="text" 
                placeholder="Your Name" 
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-secondary">Email</label>
              <input 
                name="email"
                type="email" 
                placeholder="Your Email" 
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-secondary">Message</label>
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            ></textarea>
          </div>

          <button 
            type="submit"
            className="bg-primary text-white font-semibold py-3 px-8 rounded-lg hover:bg-secondary transition duration-300"
          >
            Send Message
          </button>

          {/* Success Message */}
          {successMessage && (
            <p className="text-green-600 mt-4 font-semibold">{successMessage}</p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default ContactUs;
