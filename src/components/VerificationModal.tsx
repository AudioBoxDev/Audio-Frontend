import React from 'react';

const EmailVerificationModal = ({ isOpen, onClose, message }:any) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg max-w-md w-full">
        {/* <h2 className="text-xl font-semibold mb-4">Verify Your Email</h2>
        <p className="mb-4">Enter the verification code sent to your email:</p>
        <input
          type="text"
          value={verificationCode}
          onChange={(e) => setVerificationCode(e.target.value)}
          placeholder="Verification Code"
          className="w-full border border-gray-300 px-3 py-2 rounded mb-4 focus:outline-none focus:border-pink-500"
        />
        <button
          onClick={onVerify}
          className="w-full bg-pink-600 text-white py-2 rounded font-semibold hover:bg-pink-700 transition mb-4"
        >
          Verify Code
        </button> */}
        {message && <p className="text-green-600 text-center pb-6 text-2xl mt-2">{message}</p>}
        <button
          onClick={onClose}
          className="w-full bg-gray-300 text-gray-800 py-2 rounded font-semibold hover:bg-gray-400 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default EmailVerificationModal;
