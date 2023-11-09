'use client';
import { createContext, useState, useEffect } from 'react';

export const langContext = createContext();

export const LangProvider=({children})=>{
    const [language, setLanguage] = useState();

    useEffect(() => {
        const userLanguage = navigator.language;
        setLanguage(userLanguage);
      }, []);

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