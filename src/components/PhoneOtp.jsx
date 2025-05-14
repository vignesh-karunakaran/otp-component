import React, { useRef } from 'react'
import { useState, useEffect } from 'react';

const PhoneOtp = ({length= 4, onOtpSubmit}) => {
    const [otp, setOtp] = useState(Array(length).fill(""));
    const inputRefs = useRef([]);

    const handleChange = (index, e) => {
        const value = e.target.value;
        if(isNaN(value)) return;
        const newOtp = [...otp];
        newOtp[index] = value.substring(value.length - 1);
        setOtp(newOtp);
        const combinedOtp = otp.join("");
        if(combinedOtp.length == length) {
            onOtpSubmit(combinedOtp);
        }
        if(value && index < length -1 && inputRefs.current[index + 1]) {
            inputRefs.current[index + 1].focus();
        }
    };
    const handleClick = (i) => {
        return () => {
            if(inputRefs.current[i]) {
                inputRefs.current[i].focus();
            }
        }
    };
    const handleKeydown = (i, e) => {
        if(e.key === "Backspace") {
            const newOtp = [...otp];
            newOtp[i] = "";
            setOtp(newOtp);
            if(i > 0 && inputRefs.current[i - 1]) {
                inputRefs.current[i - 1].focus();
            }
        } else if(e.key === "ArrowRight") {
            if(i < length - 1 && inputRefs.current[i + 1]) {
                inputRefs.current[i + 1].focus();
            }
        } else if(e.key === "ArrowLeft") {
            if(i > 0 && inputRefs.current[i - 1]) {
                inputRefs.current[i - 1].focus();
            }
        }
    };
    console.log(inputRefs);

    useEffect(() => {
        if(inputRefs.current[0]) {
            inputRefs.current[0].focus();
        }
    }, []);
  return (
    <div>
        {otp.map((val, index) => {
          return (<input type="text" key={index} value={val} ref={(input) => inputRefs.current[index] = input}
             onChange={(e) => handleChange(index, e)} 
            onClick={handleClick(index)} 
            onKeyDown={(e) => handleKeydown(index, e)} className='otpInput'/>)
        })}

    </div>
  )
}

export default PhoneOtp;