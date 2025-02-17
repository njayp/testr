import { Button, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const EchoSocket = () => {
    const [socket, setSocket] = useState<WebSocket>();
    const [req, setReq] = useState('');
    const [resp, setResp] = useState('');

    useEffect(() => {
        console.log("WebSocket connecting...");
        const ws = new WebSocket('wss://ws.postman-echo.com/raw');

        ws.onopen = () => {
            console.log("WebSocket connected");
        };

        ws.onmessage = (event) => {
            setResp((prev) => prev + event.data);
        };

        ws.onerror = (error) => {
            console.error("WebSocket error:", error);
        };

        ws.onclose = () => {
            console.log("WebSocket closed");
        };

        setSocket(ws);

        return () => {
            ws.close();
            console.log("WebSocket cleanup: connection closed");
        };
    }, []);

    const sendMessage = () => {
        socket?.send(req);
    }

    return (
        <Stack>
            <TextField
                label="Message"
                variant="outlined"
                value={req}
                onChange={(e) => setReq(e.target.value)}
                fullWidth
                margin="normal"
                sx={{
                    '& .MuiInputBase-root': {
                        color: 'white',
                    },
                }}
            />
            <Button variant="contained" color="primary" onClick={sendMessage}>
                Send
            </Button>
            <Typography variant="body1">{resp}</Typography>
        </Stack>
    );
};

export default EchoSocket;