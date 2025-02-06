import Header from './Header.tsx';
import { Box, Divider } from '@mui/material';
import { Outlet } from "react-router-dom";

export default function Home() {
    return (
        <Box height="100vh" width="100vw" display="flex" flexDirection="column">
            <Header />
            <Divider />
            <Outlet />
        </Box>
    )
}