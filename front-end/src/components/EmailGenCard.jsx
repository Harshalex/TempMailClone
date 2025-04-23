import React, { useEffect, useState } from "react";

import { FaCopy } from "react-icons/fa";

function EmailGenCard({ email, setEmail, generateEmail }) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      alert("Text copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };
  return (
    <div className="w-full h-80 flex flex-col items-center">
      <div className="w-[45%] h-fit flex flex-col gap-4">
        {/* Email Display Section */}
        <div className="w-full flex flex-col items-center gap-5 border-2 border-[#5f5f74] border-dashed p-8">
          <h1 className="text-xl font-semibold">
            Your Temporary Email Address
          </h1>
          <div className="flex gap-3">
            <input
              className="bg-[#393946] border-none py-3 outline-none rounded-full px-6 text-[#d4d4eb]"
              type="text"
              value={email || "Click to generate"}
              readOnly
              placeholder="Your Email"
            />
            {email ? (
              <>
                <button
                  onClick={handleCopy}
                  className="bg-green-300 text-2xl px-3 rounded-full text-white hover:bg-green-600 active:bg-green-800"
                >
                  <FaCopy />
                </button>
              </>
            ) : (
              <>
                <div className="flex justify-center">
                  <button
                    onClick={generateEmail}
                    className="px-6 text-sm py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all"
                  >
                    Generate Email
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
        {/* Info Section */}
        <div>
          <p className="text-center text-[#7e7e91]">
            Forget about spam, advertising mailings, hacking and attacking
            robots. Keep your real mailbox clean and secure. Temp Mail provides
            temporary, secure, anonymous, free, disposable email address.
          </p>
        </div>
      </div>
    </div>
  );
}

export default EmailGenCard;
