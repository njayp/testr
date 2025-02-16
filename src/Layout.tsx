import Header from './Header.tsx';
import { Divider, Stack } from '@mui/material';
import { useEffect } from 'react';
import { Outlet } from "react-router-dom";

const Layout = () => {
    useEffect(() => {
        // set body style
        const style = document.body.style
        style.margin = '0';
        style.backgroundColor = "#242424";
        style.color = "white";
    }, []);

    return (
        <Stack>
            <Header />
            <Divider />
            <Outlet />
        </Stack>
    )
}

export default Layout;