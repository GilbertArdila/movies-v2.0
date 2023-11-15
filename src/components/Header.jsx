'use client';
import { useContext } from 'react';

import Link from 'next/link';
import { AiFillHome } from 'react-icons/ai';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import { useTheme } from 'next-themes';
import { langContext } from '@/app/context'; 
import MenuItem from './MenuItem';
import DarkModeSwitch from './DarkModeSwitch';
import Image from 'next/image';

const Header = () => {
    const context = useContext(langContext);
    const {  theme } = useTheme();

    
    function handleLanguage() {
        if (context.language === 'en-USA') {
            context.setLanguage('es-CO');
        } else {
            context.setLanguage('en-USA');
        }

    }

    return (
        <div className={`${theme === 'dark' ? 'bg-gray-600': 'bg-white'}  flex justify-between  max-x-6xl sm:mx-auto items-center py-4 z-50`}>
            <div className='flex items-center '>
                <MenuItem title={'HOME'} address={'/'} Icon={AiFillHome} />
                <MenuItem title={'ABOUT'} address={'/about'} Icon={BsFillInfoCircleFill} />
                <div className='ml-2' onClick={handleLanguage}>
                    {context.language == 'en-USA' ? <Image src={'/spanish.png'} alt='english flag' width={24} height={24}  /> : <Image src={'/english.png'} alt='spanish flag' width={24} height={24}  />}
                </div>
            </div>

            <div className='flex items-center'>
                <DarkModeSwitch />
                <Link href='/'>
                    <h2 className='text-2xl p-1 hover:scale-95 transform transition-transform duration-300 ease-in-out'><span className='font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1 '>Movies+</span><span className='text-xl hidden sm:inline mx-2'>V2</span></h2>
                </Link>
            </div>
        </div>
    )
}

export default Header;