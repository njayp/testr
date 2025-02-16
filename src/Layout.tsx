import Header from './Header.tsx';
import { Divider, Stack } from '@mui/material';
import { useEffect } from 'react';
import { Outlet } from "react-router-dom";

const Layout = () => {
    useEffect(() => {
        // ensure no margin on body
        document.body.style.margin = '0';
    }, []);

    return (
        <Stack height="100vh" bgcolor="#242424" color="white">
            <Header />
            <Divider />
            <Outlet />
        </Stack>
    )
}

export default Layout;