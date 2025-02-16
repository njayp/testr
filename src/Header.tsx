import { Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { MyContext } from "./ctx/MyContext";

export default function Header() {
    const { username } = useContext(MyContext) // Use the context

    return (
        <Stack direction="row" spacing={2} justifyContent="space-between" alignItems="center" p={2} sx={{ backgroundColor: "maroon" }}>
            <Typography variant="h4">Welcome, {username}!</Typography>
        </Stack>
    );
}