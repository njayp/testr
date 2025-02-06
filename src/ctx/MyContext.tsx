import { createContext } from 'react';

interface MyContextProps {
    username: string;
    setUsername: (username: string) => void;
}

export const MyContext = createContext<MyContextProps>({
    username: '',
    setUsername: () => { },
});
