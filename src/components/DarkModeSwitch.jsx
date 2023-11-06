'use client';

import { BsSunFill } from 'react-icons/bs';
import { BsFillMoonFill } from 'react-icons/bs';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const DarkModeSwitch = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const currenTheme = theme === 'system' ? systemTheme : theme;

    //to avoid hydration error, theme conflicts with systemTheme
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true)
    
     
    }, [])
    

    return (
        <div className='hover:cursor-pointer hover:text-amber-500 text-xl'

        >
            {mounted && (currenTheme === 'dark' ? (<BsSunFill onClick={() => setTheme('light')} />) : (<BsFillMoonFill onClick={() => setTheme('dark')} />))}



        </div>
    )
}

export default DarkModeSwitch;