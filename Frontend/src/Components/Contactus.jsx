import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_5tkhwmx', 'template_2lyj7ng', form.current, {
        publicKey: 'XX4Te33TJzaGovfhE',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="mt-28 flex justify-center items-center">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full"
      >
        <h2 className="text-2xl font-bold text-pink-500 mb-6 text-center">Contact Us</h2>
        <label className="block text-gray-700 mb-2 font-medium">Name</label>
        <input
          type="text"
          name="from_name"
          className="w-full mb-4 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Your Name"
          required
        />

        <label className="block text-gray-700 mb-2 font-medium">Email</label>
        <input
          type="email"
          name="from_email"
          className="w-full mb-4 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Your Email"
          required
        />

        <label className="block text-gray-700 mb-2 font-medium">Message</label>
        <textarea
          name="message"
          className="w-full mb-4 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          rows="5"
          placeholder="Your Message"
          required
        ></textarea>

        <input
          type="submit"
          value="Send"
        
          className="w-full bg-pink-500 text-white font-semibold py-3 rounded-md cursor-pointer hover:bg-pink-700 transition duration-200"
          
        />
      </form>
    </div>
  );
};

export default ContactUs;
