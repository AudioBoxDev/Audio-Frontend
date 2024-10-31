import React from 'react';

const EmailVerificationModal = ({ isOpen, onClose, onVerify, email, setEmail,loading  }:any) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 mx-5 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg max-w-md w-full">
        <h2 className="text-xl font-semibold mb-4">Verify Your Email</h2>
        <p className="mb-4">Please confirm your email to join the waitlist:</p>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="name@domain.com"
          className="w-full border border-gray-300 px-3 py-2 rounded-full mb-4 focus:outline-none focus:border-pink-500"
        />
        <div className=' grid gap-10'>

        <button
          onClick={onVerify}
          className={`bg-pink-600 text-white font-semibold px-6 py-2 rounded-full focus:outline-none hover:bg-pink-700 transition ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          >
          {loading ? "Loading..." : "Verify Email"}
          
        </button>
        <button
          onClick={onClose}
          className="w-full bg-gray-300 text-gray-800 py-2 rounded font-semibold hover:bg-gray-400 transition"
          >
          Close
        </button>
        </div>
          
      </div>
    </div>
  );
};

export default EmailVerificationModal;
