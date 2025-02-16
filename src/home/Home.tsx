import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { Link as MUILink } from "@mui/material";

export interface Route {
    path: string;
    name: string;
}

export interface HomeProps {
    routes: Route[];
}

const Home = ({ routes }: HomeProps) => {
    return (
        <Stack>
            {routes.map((route, index) => (
                <MUILink key={index} component={Link} to={route.path}>
                    {route.name}
                </MUILink>
            ))}
        </Stack>
    );
};

export default Home;