import { Link, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

interface Stonks {
    timestamp: number;
    stocks: {
        symbol: string;
    }[];
}

const StonksSocket = () => {
    const [data, setData] = useState<Stonks>();

    useEffect(() => {
        console.log("WebSocket connecting...");
        const ws = new WebSocket('ws://stonks.njayp.net/ws/top');

        ws.onopen = () => {
            console.log("WebSocket connected");
        };

        ws.onmessage = (event) => {
            // decode resp json
            const data = JSON.parse(event.data);
            setData(data);
        };

        ws.onerror = (error) => {
            console.error("WebSocket error:", error);
        };

        ws.onclose = () => {
            console.log("WebSocket closed");
        };

        return () => {
            ws.close();
            console.log("WebSocket cleanup: connection closed");
        };
    }, []);

    // display the timestamp and stock symbols
    return (
        <Stack>
            {data && <Typography>Last Refresh: {new Date(data.timestamp * 1000).toLocaleString()}</Typography>}
            {data && data.stocks.map((stock, i) => (
                <Link href={`https://finance.yahoo.com/quote/${stock.symbol}`} target="_blank" key={i}>
                    <Typography>{stock.symbol}</Typography>
                </Link>
            ))}
        </Stack>
    );
};

export default StonksSocket;