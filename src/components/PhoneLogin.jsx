import React from 'react'
import { useState } from 'react';
import PhoneOtp from './PhoneOtp';
const PhoneLogin = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [showOTPField, setOTPField] = useState(false);
    const handlePhoneSubmit = (e) => {
        e.preventDefault();
        if(phoneNumber < 10) {
            alert("Please enter a valid phone number");
            return;
        }
        setOTPField(true);
    };

    const onOtpSubmit = (otp) => {
        console.log(`Login successful ${otp}`);
    }
  return (
    <div>
        {!showOTPField ? <form onSubmit={handlePhoneSubmit}>
            <input type="text" placeholder="Enter your phone number" value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}/>
            <button onClick={handlePhoneSubmit}>submit</button>
        </form>: <div>
            <p>Enter otp send to number: {phoneNumber}</p>
            <PhoneOtp length={4} onOtpSubmit={onOtpSubmit}/>
            </div>}
    </div>
  )
};

export default PhoneLogin;