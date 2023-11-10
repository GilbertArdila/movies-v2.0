'use client';
import { createContext, useState} from 'react';

export const langContext = createContext();

export const LangProvider=({children})=>{
    const [language, setLanguage] = useState('en-USA');

   

      return (
        <langContext.Provider value={
            {
                language,
                setLanguage
            }
        }>
            {children}
        </langContext.Provider>
      )
}
