import { Check, Close } from '@mui/icons-material';
import { Box, Button, Stack, Typography } from '@mui/material';
import { DataGrid, GridColDef, GridRowSelectionModel, GridToolbar } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';

interface Poke {
    name: string;
    sprites: {
        front_default: string;
    };
    moves: {
        move: {
            name: string;
            url: string;
        };
    }[];
    types: {
        type: {
            name: string;
        };
    }[];
}

interface Move {
    name: string;
    type: {
        name: string;
    };
    // id for DataGrid
    id: string;
}

const RandomPoke = () => {
    const [poke, setPoke] = useState<Poke | undefined>(undefined);
    const [moves, setMoves] = useState<Move[] | undefined>(undefined);
    const [loading, setLoading] = useState(false);
    const [rowSelectionModel, setRowSelectionModel] = useState<GridRowSelectionModel>([]);

    // log selected rows
    useEffect(() => {
        console.log(rowSelectionModel);
    }, [rowSelectionModel]);

    const fetchRandomPoke = async () => {
        setLoading(true);

        // get poke
        const randomId = Math.floor(Math.random() * 1025) + 1;
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
        const poke = await response.json() as Poke;
        poke.name = poke.name[0].toUpperCase() + poke.name.slice(1);

        // get moves
        const moves = await Promise.all(poke.moves.map(async (move) => {
            const response = await fetch(move.move.url);
            const data = await response.json() as Move;
            // set id for DataGrid
            data.id = data.name;
            return data;
        }));

        // set state
        setPoke(poke);
        setMoves(moves);
        setLoading(false);
    };

    const typeMatch = (type: string) => {
        return poke?.types.some((pokeType) => pokeType.type.name === type);
    };

    const columns: GridColDef<Move>[] = [
        { field: 'name', width: 300, headerName: 'Move' },
        { field: 'type', width: 200, valueGetter: (_, row) => row.type.name, headerName: 'Type' },
        {
            field: 'stab', width: 100, headerName: 'STAB', align: "center", headerAlign: "center",
            renderCell: (params) => typeMatch(params.row.type.name) ?
                <Check sx={{ color: "green" }} /> :
                <Close sx={{ color: "red" }} />
        }
    ]

    return (
        <Stack spacing={0} margin="auto">
            <Button onClick={fetchRandomPoke} variant='outlined'>Random Pokemon</Button>
            {poke && (
                <>
                    <Stack alignItems={"center"} direction="row" spacing={2}>
                        <Typography variant='h3'>{poke.name}</Typography>
                        <Box>
                            <img src={poke.sprites.front_default} alt={poke.name} />
                        </Box>
                    </Stack>

                    <DataGrid
                        rows={moves}
                        columns={columns}

                        slots={{
                            toolbar: GridToolbar,
                        }}
                        slotProps={{
                            toolbar: {
                                showQuickFilter: true,
                            },
                        }}

                        initialState={{
                            pagination: {
                                paginationModel: {
                                    pageSize: 5,
                                }
                            }
                        }}
                        pageSizeOptions={[5, 20]}

                        checkboxSelection
                        onRowSelectionModelChange={(newRowSelectionModel) => {
                            setRowSelectionModel(newRowSelectionModel);
                        }}
                        rowSelectionModel={rowSelectionModel}

                        loading={loading}
                        sx={{
                            border: 0,
                            color: "teal",

                            '& .MuiDataGrid-container--top [role="row"]': {
                                background: 'none',
                            },
                            '& .MuiTablePagination-root': {
                                color: 'inherit',
                            },
                            '& .MuiInput-root': {
                                color: 'inherit',
                            },
                        }}

                    />
                </>
            )}
        </Stack>
    );
};

export default RandomPoke;