import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { FiMessageCircle } from "react-icons/fi";

export default function InputsField() {
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  const handlePhoneNumberChange = (value: string) => {
    setPhoneNumber(value);
  };

  const openWhatsAppChat = () => {
    if (phoneNumber) {
      const formattedNumber = phoneNumber.replace(/\D/g, '');
      
      // Detect if the user is on mobile or desktop
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      
      // WhatsApp link
      const whatsappURL = isMobile 
        ? `whatsapp://send?phone=${formattedNumber}`  // Opens WhatsApp app on mobile
        : `https://wa.me/${formattedNumber}`;  // Fallback to WhatsApp Web on desktop

      window.open(whatsappURL, '_blank'); 
    } else {
      alert('Please enter a valid phone number.');
    }
  };

  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='text-2xl border-b-2 border-slate-600 py-5 text-center my-4 w-fit text-slate-600'>
        WhatsApp Direct Chat <FiMessageCircle className='inline' />
      </h1>
      <PhoneInput
        country={'eg'}
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        inputProps={{
          name: 'phone',
          required: true,
          autoFocus: true,
          showDropdown: true,
        }}
      />
      <button
        type="button"
        onClick={openWhatsAppChat}
        className="text-white duration-300 bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 my-4 dark:bg-slate-600 dark:hover:bg-slate-700 focus:outline-none dark:focus:ring-slate-800"
      >
        Chat on WhatsApp
      </button>
    </div>
  );
}
