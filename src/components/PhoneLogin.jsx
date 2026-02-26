import React from 'react'
import { useState } from 'react';
import PhoneOtp from './PhoneOtp';
const PhoneLogin = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [showOTPField, setOTPField] = useState(false);
    
    const handlePhoneSubmit = (e) => {
        e.preventDefault();
        if(phoneNumber.length < 10) {
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
            <div className="form-group">
                <input 
                    type="text" 
                    className="netflix-input"
                    placeholder="Phone number" 
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
            </div>
            <button type="submit" className="netflix-button">Next</button>
        </form>: <div>
            <p className="otp-info">Enter OTP sent to: {phoneNumber}</p>
            <PhoneOtp length={4} onOtpSubmit={onOtpSubmit}/>
            <button className="netflix-button" onClick={() => setOTPField(false)}>Change Phone Number</button>
            </div>}
    </div>
  )
};

export default PhoneLogin;