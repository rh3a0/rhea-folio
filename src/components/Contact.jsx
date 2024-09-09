import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">Contact Me</h2>
        <form className="mt-8 max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-bold">Name</label>
            <input
              type="text"
              id="name"
              className="w-full mt-2 p-2 border border-gray-400 rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-bold">Email</label>
            <input
              type="email"
              id="email"
              className="w-full mt-2 p-2 border border-gray-400 rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-bold">Message</label>
            <textarea
              id="message"
              className="w-full mt-2 p-2 border border-gray-400 rounded-lg"
              rows="5"
              required
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
