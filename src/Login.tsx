import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import { Stack, Typography } from '@mui/material';
import { MyContext } from './ctx/MyContext';

const Login = () => {
    const [inputUsername, setInputUsername] = useState('');
    const { setUsername } = useContext(MyContext);
    const navigate = useNavigate();

    const handleLogin = () => {
        setUsername(inputUsername);
        navigate('/home');
    };

    return (
        <Stack spacing={2} justifyContent="center" alignItems="center">
            <img src={reactLogo} className="logo react" alt="React logo" style={{
                width: '100px',
                height: '100px',
            }} />
            <Stack spacing={1}>
                <Typography variant="h4">Login</Typography>
                <Stack spacing={2} direction="row">
                    <input
                        type="text"
                        value={inputUsername}
                        onChange={(e) => setInputUsername(e.target.value)}
                        placeholder="Enter your username"
                    />
                    <button onClick={handleLogin}>Login</button>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default Login;
