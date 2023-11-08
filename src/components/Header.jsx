import Link from 'next/link';
import { AiFillHome } from 'react-icons/ai';
import { BsFillInfoCircleFill } from 'react-icons/bs';

import MenuItem from './MenuItem';
import DarkModeSwitch from './DarkModeSwitch';

const Header = () => {
    return (
        <div className='flex justify-between mx-2 max-x-6xl sm:mx-auto items-center py-6'>
            <div className='flex '>
                <MenuItem title={'HOME'} address={'/'} Icon={AiFillHome} />
                <MenuItem title={'ABOUT'} address={'/about'} Icon={BsFillInfoCircleFill} />
            </div>

            <div className='flex items-center space-x-5'>
                <DarkModeSwitch/>
                <Link href='/'>
                    <h2 className='text-2xl p-2 hover:scale-95 transform transition-transform duration-300 ease-in-out'><span className='font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1 '>Movies+</span><span className='text-xl hidden sm:inline mx-2'>V2</span></h2>
                </Link>
            </div>
        </div>
    )
}

export default Header;