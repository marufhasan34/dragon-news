import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import avatar from '@/assets/user.png'
import NavLink from './NavLink';
const Navbar = () => {
    return (
        <div>
           <nav className='flex container mx-auto mt-10 mb-20 justify-between items-center '>
            <div></div>
            <div>
                <ul className='flex gap-3 text-gray-500 items-center'>
                    <li>
                      <NavLink href={'/'}>Home</NavLink>
                    </li>
                    <li>
                      <NavLink href={'/about'}>About</NavLink>
                    </li>
                    <li>
                      <NavLink href={'/career'}>Career</NavLink>
                    </li>
                </ul>
            </div>
            <div className='flex items-center gap-3'>
                 <Image src={avatar} width={40} height={40} alt='user avatar' />
                 <Link href={'/login'}><button className='btn text-lg text-white bg-gray-700'>Login</button></Link>
            </div>
           </nav>
        </div>
    );
};

export default Navbar;