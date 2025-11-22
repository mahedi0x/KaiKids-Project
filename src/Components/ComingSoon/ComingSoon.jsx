import React from 'react';
import comingSoon from "../../assets/animations/comingSoon.json"; 
import Lottie from 'lottie-react';

const ComingSoon = () => {
    return (
        <div className='flex justify-center'>
            <Lottie animationData={comingSoon} loop={true} className='w-full p-20'/>
        </div>
    );
};

export default ComingSoon;