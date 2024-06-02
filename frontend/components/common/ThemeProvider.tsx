"use client";
import React, {useState, useEffect, createContext, useContext} from 'react'

interface ThemeContextType {
    isDarkMode: boolean;
    toggleTheme: () => void;
  }
  
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export default function ThemeProvider({children}: {
    children: React.ReactNode
}) {
    const [isDarkMode, setDarkMode] = useState(false);
      
        useEffect(() => {
            localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
            document.documentElement.classList.toggle('dark', isDarkMode);
        }, [isDarkMode]);
    
        const toggleTheme = () => setDarkMode(!isDarkMode);
    return (
    <ThemeContext.Provider value={{isDarkMode, toggleTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
      throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
  };
