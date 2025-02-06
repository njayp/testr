import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyContext } from './ctx/MyContext.tsx';

const LoginPage = () => {
    const [inputUsername, setInputUsername] = useState('');
    const { setUsername } = useContext(MyContext);
    const navigate = useNavigate();

    const handleLogin = () => {
        setUsername(inputUsername);
        navigate('/app');
    };

    return (
        <div>
            <h1>Login</h1>
            <input
                type="text"
                value={inputUsername}
                onChange={(e) => setInputUsername(e.target.value)}
                placeholder="Enter your username"
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default LoginPage;
