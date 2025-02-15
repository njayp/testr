import { useState } from 'react';
import {
    Button,
    Card,
    CardContent,
    CardHeader,
    Typography,
    Alert,
    Paper,
    Grid2
} from '@mui/material';

const TicTacToe = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const [winner, setWinner] = useState("");

    const calculateWinner = (squares: string[]) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (const [a, b, c] of lines) {
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }

        if (squares.every(square => square !== null)) {
            return 'draw';
        }

        return null;
    };

    const handleClick = (index: number) => {
        if (board[index] || winner) return;

        const newBoard = [...board];
        newBoard[index] = xIsNext ? 'X' : 'O';
        setBoard(newBoard);

        const gameWinner = calculateWinner(newBoard);
        if (gameWinner) {
            setWinner(gameWinner);
        }

        setXIsNext(!xIsNext);
    };

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setXIsNext(true);
        setWinner("");
    };

    const getStatus = () => {
        if (winner === 'draw') {
            return "Game ended in a draw!";
        } else if (winner) {
            return `Winner: ${winner}`;
        } else {
            return `Next player: ${xIsNext ? 'X' : 'O'}`;
        }
    };

    return (
        <Card sx={{ maxWidth: 400, margin: 'auto', mt: 2 }}>
            <CardHeader
                title="Tic Tac Toe"
                sx={{ textAlign: 'center' }}
            />
            <CardContent>
                <Grid2 container spacing={1} sx={{ mb: 2 }}>
                    {board.map((square, index) => (
                        <Grid2 size={4} key={index}>
                            <Paper
                                elevation={3}
                                sx={{
                                    height: 80,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <Button
                                    onClick={() => handleClick(index)}
                                    disabled={!!winner || !!square}
                                    variant="text"
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        fontSize: '1.5rem',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    {square}
                                </Button>
                            </Paper>
                        </Grid2>
                    ))}
                </Grid2>

                <Alert
                    severity={winner ? (winner === 'draw' ? 'info' : 'success') : 'info'}
                    sx={{ mb: 2 }}
                >
                    <Typography>{getStatus()}</Typography>
                </Alert>

                <Button
                    variant="contained"
                    fullWidth
                    onClick={resetGame}
                    sx={{ mt: 2 }}
                >
                    Reset Game
                </Button>
            </CardContent>
        </Card>
    );
};

export default TicTacToe;