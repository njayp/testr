import { useState, ReactNode } from 'react';
import { MyContext } from './MyContext.tsx';


export const MyContextProvider = ({ children }: { children: ReactNode }) => {
    const [username, setUsername] = useState('');

    return (
        <MyContext.Provider value={{ username, setUsername }}>
            {children}
        </MyContext.Provider>
    );
};
