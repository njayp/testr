import { Stack, Typography } from "@mui/material";
import { MyContext } from "./ctx/MyContext";
import { useContext } from "react";

export default function Header() {
    const { username } = useContext(MyContext) // Use the context

    return (
        <Stack direction="row" spacing={2} justifyContent="space-between" alignItems="center" p={2} sx={{ backgroundColor: "maroon" }}>
            <Typography variant="h4" color="white">Welcome, {username}!</Typography>
        </Stack>
    );
}