/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import PhoneInput, { Country } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

function App() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [lastCountry, setLastCountry] = useState<Country>('EG');

  useEffect(() => {
    const savedCountry = localStorage.getItem('lastCountry');
    if (savedCountry) {
      setLastCountry(savedCountry as Country);
    }
  }, []);

  const handleCountryChange = (country?: Country) => {
    if (country) {
      setLastCountry(country);
      localStorage.setItem('lastCountry', country);
    }
  };

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber) {
      const cleanNumber = phoneNumber.replace(/\D/g, '');
      window.open(`https://wa.me/${cleanNumber}`, '_blank');
      setPhoneNumber('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <div className="flex items-center justify-center mb-8">
          <div className="bg-green-500 p-3 rounded-full">
            <FaWhatsapp className="w-8 h-8 text-white" />
          </div>
        </div>
        
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">
          WhatsApp Direct Chat
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Enter a phone number to start a WhatsApp chat without saving the contact
        </p>

        <form onSubmit={handleWhatsAppRedirect} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <PhoneInput
              international
              defaultCountry={lastCountry}
              value={phoneNumber}
              onChange={(value) => setPhoneNumber(value || '')}
              onCountryChange={handleCountryChange}
              className="phone-input-container"
            />
          </div>

          <button
            type="submit"
            disabled={!phoneNumber}
            className="w-full flex items-center justify-center gap-2 bg-green-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FiSend className="w-5 h-5" />
            Open Chat
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-8">
          Your country preference will be saved automatically
        </p>
      </div>
    </div>
  );
}

export default App;