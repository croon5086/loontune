// app/buy/page.tsx
"use client"; // use client if you need interactivity like state
import { useState } from "react";

export default function BuyPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would send the email to your backend or an API endpoint
    setMessage("Thank you for your interest! We will be in touch.");
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-marion-light p-6 flex items-center justify-center">
      <div className="max-w-xl w-full bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-marion text-center mb-6">
          Get Your LoonTune Now!
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <label htmlFor="email" className="text-marion font-medium">
            Enter your email to order:
          </label>
          <input
            type="email"
            id="email"
            placeholder="info@loontune.com"
            className="border border-gray-300 rounded p-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-marion text-white rounded p-2 hover:bg-marion-dark transition-colors"
          >
            Submit
          </button>
          {message && <p className="text-green-600 text-center">{message}</p>}
        </form>
      </div>
    </div>
  );
}
