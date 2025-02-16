import { useState, ReactNode } from 'react';
import { MyContext } from './MyContext.tsx';


export const MyContextProvider = ({ children }: { children: ReactNode }) => {
    const [username, setUsername] = useState(sessionStorage.getItem('username') || 'Guest');

    const setStorage = (username: string) => {
        console.log('Setting username to', username);
        sessionStorage.setItem('username', username);
        setUsername(username);
    }

    return (
        <MyContext.Provider value={{ username, setUsername: setStorage }}>
            {children}
        </MyContext.Provider>
    );
};
