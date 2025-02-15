import { Grid2 } from "@mui/material";
import CardItem, { CardItemProps } from "./CardItem";


export interface CardGridProps {
    cards: CardItemProps[]; // 2D array of CardItemProps
}

const CardGrid = ({ cards }: CardGridProps): JSX.Element => {
    return (
        <Grid2 container spacing={2} direction={"row"}>
            {cards.map((card, i) => (
                <Grid2 key={i} size={4}>
                    <CardItem  {...card} />
                </Grid2>
            ))}
        </Grid2>
    );
};

export default CardGrid;