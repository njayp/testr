import CardItem, { CardItemProps } from "./CardItem";


export interface CardGridProps {
    cards: CardItemProps[][]; // 2D array of CardItemProps
}

const CardGrid = ({ cards }: CardGridProps): JSX.Element => {
    return (
        <div>
            {cards.map((row, i) => (
                <div key={i} style={{ display: "flex", gap: "1rem" }}>
                    {row.map((card, j) => (
                        <CardItem key={j} {...card} />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default CardGrid;