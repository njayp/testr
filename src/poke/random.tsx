import { Button, Stack, Typography } from '@mui/material';
import { useState } from 'react';

interface Poke {
    name: string;
    sprites: {
        front_default: string;
    };
}

const RandomPoke = () => {
    const [poke, setPoke] = useState<Poke | null>(null);

    const fetchRandomPoke = async () => {
        const randomId = Math.floor(Math.random() * 1025) + 1;
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
        const data = await response.json();
        setPoke(data);
    };

    return (
        <Stack spacing={2} margin="auto">
            <Button onClick={fetchRandomPoke}>Random Pokemon</Button>
            {poke && (
                <>
                    <Typography variant='h2'>{poke.name}</Typography>
                    <img src={poke.sprites.front_default} alt={poke.name} />
                </>
            )}
        </Stack>
    );
};

export default RandomPoke;