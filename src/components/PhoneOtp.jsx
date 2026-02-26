import React, { useRef } from 'react'
import { useState, useEffect } from 'react';

const PhoneOtp = ({length= 4, onOtpSubmit}) => {
    const [otp, setOtp] = useState(Array(length).fill(""));
    const inputRefs = useRef([]);

    useEffect(() => {
        if(inputRefs.current[0]) {
            inputRefs.current[0].focus();
        }
    }, []);

    const handleChange = (index, e) => {
        const value = e.target.value;
        if(isNaN(value)) return;

        const newOtp = [...otp];
        // Allow only one character
        newOtp[index] = value.substring(value.length - 1);
        setOtp(newOtp);

        // Submit trigger
        const combinedOtp = newOtp.join("");
        if(combinedOtp.length === length) {
            onOtpSubmit(combinedOtp);
        }

        // Move to next input if value is entered
        if(value && index < length -1 && inputRefs.current[index + 1]) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleClick = (index) => {
        inputRefs.current[index].setSelectionRange(1, 1);
        
        // optional: move to first empty input
        if (index > 0 && !otp[index - 1]) {
          inputRefs.current[otp.indexOf("")].focus();
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === "Backspace" && !otp[index] && index > 0 && inputRefs.current[index - 1]) {
            // Move to previous input on backspace
            inputRefs.current[index - 1].focus();
        }
    };

  return (
    <div className="otp-wrapper">
        {otp.map((val, index) => {
          return (
            <input 
              type="text" 
              key={index} 
              value={val} 
              ref={(input) => inputRefs.current[index] = input}
              onChange={(e) => handleChange(index, e)} 
              onClick={() => handleClick(index)} 
              onKeyDown={(e) => handleKeyDown(index, e)} 
              className='otpInput'
            />
          )
        })}
    </div>
  )
}

export default PhoneOtp;