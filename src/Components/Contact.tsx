import { useState, useEffect } from "react";
import { FiMessageCircle } from "react-icons/fi";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';

export default function Contact() {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handlePhoneNumberChange = (value: string) => {
    setPhoneNumber(value);
    setError('');
  };

  // Geolocation logic inside useEffect
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          console.log(`User's location: Latitude ${latitude}, Longitude ${longitude}`);
        },
        function (error) {
          if (error.code === error.PERMISSION_DENIED) {
            console.log('Geolocation permission denied. Using default location.');
          }
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }, []); // This effect runs once, when the component mounts

  const openWhatsAppChat = () => {
    const formattedNumber = phoneNumber.replace(/\D/g, '');

    // Check if the phone number is valid
    if (formattedNumber.length > 0) {
      // Detect if the user is on mobile or desktop
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      
      // WhatsApp link
      const whatsappURL = isMobile
        ? `whatsapp://send?phone=${formattedNumber}`
        : `https://wa.me/${formattedNumber}`;

      window.open(whatsappURL, '_blank');
      setPhoneNumber('');
    } else {
      setError('Please enter a valid phone number.');
    }
  };

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center p-5">
      <h1 className='text-center heading text-white'>
        WhatsApp Direct Chat <FiMessageCircle className='d-inline' />
      </h1>
      <div className="my-3">
        <PhoneInput
          country={'eg'}
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          inputProps={{
            name: 'phone',
            required: true,
            autoFocus: true,
            showDropdown: true,
            'aria-label': 'Phone number input',
          }}
        />
        {error && <div className="text-red-500">{error}</div>}
      </div>
      <button
        type="button"
        onClick={openWhatsAppChat}
        className="btn btn-success"
        aria-label="Chat on WhatsApp"
      >
        Chat on WhatsApp
      </button>
    </div>
  );
}
