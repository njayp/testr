import { Button, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const EchoSocket = () => {
    const [socket, _setSocket] = useState(new WebSocket('wss://ws.postman-echo.com/raw'));
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');

    useEffect(() => {
        socket.onmessage = (event) => {
            setResponse(event.data);
        }
    }, [socket]);

    const sendMessage = () => {
        socket.send(message);
    }

    return (
        <Stack>
            <TextField
                label="Message"
                variant="outlined"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                fullWidth
                margin="normal"
            />
            <Button variant="contained" color="primary" onClick={sendMessage}>
                Send
            </Button>
            <Typography variant="body1">{response}</Typography>
        </Stack>
    );
};

export default EchoSocket;