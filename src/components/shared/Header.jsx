import React from 'react';
import logo from '@/assets/logo.png'
import Image from 'next/image';
import { format } from 'date-fns';
const Header = () => {
    return (
        <div className='mx-auto container mt-20  mb-10 text-center'>
            <Image className='mx-auto' src={logo} width={400} height={300} alt='header logo' />
            <p className='text-gray-400 my-2'>Journalism Without Fear or Favour</p>
            <p>{format(new Date(), "EEEE, MMM dd, yyyy")}</p>
        </div>
    );
};

export default Header;