import { Stack } from "@mui/material";

export default function Header() {
    return (
        <Stack direction="row" spacing={2} justifyContent="space-between" alignItems="center" sx={{ backgroundColor: "maroon" }}>
            <h1>Header</h1>
        </Stack>
    );
}