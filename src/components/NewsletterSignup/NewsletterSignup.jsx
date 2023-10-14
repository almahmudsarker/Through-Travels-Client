import React, { useState } from "react";
import backgroundImage from "../../../src/assets/images/banner1.jpg";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSignup = () => {
    // Handle email to server.
    console.log(`Subscribed with email: ${email}`);
    setEmail("");
  };

  return (
    <section
      className="bg-cover h-[600px] my-20 overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="max-w-2xl mx-auto text-center py-28">
        <h2 className="animated-text text-center text-3xl mt-20">
          Newsletter Signup
        </h2>
        <p className="animated-text text-center text-lg">
          Encourage visitors to subscribe to your newsletter for travel updates,
          exclusive offers, and tips.
        </p>
        <div className="mt-6">
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={handleEmailChange}
            className="lg:w-full md:w-[600px] sm:w-[400px] w-[300px] p-2 border border-gray-200 rounded my-2"
          />
          <button
            onClick={handleSignup}
            className="my-4 py-2 px-4 bg-[#0ea5e9] text-white rounded hover:bg-sky-600 focus:outline-none"
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
