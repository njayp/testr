import { ExpandLess } from "@mui/icons-material";
import { Box, Card, CardActionArea, CardContent, Stack, SvgIconTypeMap, Typography } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import React from "react";

export interface CardItemProps {
    title: string;
    description: string;
    Icon: OverridableComponent<SvgIconTypeMap<object, "svg">> & {
        muiName: string;
    };
}

const CardItem = ({ title, description, Icon }: CardItemProps): JSX.Element => {
    const [hovered, setHovered] = React.useState(false);


    return (
        <Card sx={{ minWidth: 275, }}>
            <CardActionArea
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={() => setHovered(!hovered)}
                sx={{
                    width: "100%",
                    height: "100%",
                    minHeight: 275
                }}
            >
                <CardContent>
                    <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                        {title}
                    </Typography>
                    <Icon fontSize="large" color="primary" />
                </CardContent>
                <Box sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: hovered ? "100%" : "30px",
                    backgroundColor: "primary.main",
                    display: "flex",
                    alignItems: "top",
                    justifyContent: "center",
                    color: "white",
                    transition: "height 0.3s ease-in-out",
                }}
                >
                    <Stack
                        alignItems={"center"}>
                        <ExpandLess sx={{
                            fontSize: 32,
                            transition: "transform 0.3s ease-in-out",
                            transform: hovered ? "rotate(180deg)" : "rotate(0deg)",
                        }} />
                        {description}
                    </Stack>
                </Box>
            </CardActionArea>
        </Card>
    );
};

export default CardItem;