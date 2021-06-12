import React, { useState, useMemo } from "react";
import Board from "./Board";

type Props = {

}

const Game: React.VFC<Props> = (props) => {
    const [squares, setSquares] = useState(Array<string | null>(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)
    const handleClick = (i: number) => {
        if (squares[i] != null || calculateWinner(squares)) {
            return;
        }

        const baseSquares = squares.slice()
        baseSquares[i] = xIsNext ? "X" : "O"
        setSquares(baseSquares)
        setXIsNext(!xIsNext)
    };
    const status = (() => {
        const winner = calculateWinner(squares)
        if (winner) {
            return "Winner: " + winner
        } else {
            return 'Next player: ' + (xIsNext ? "X" : "O")
        }
    })();

    return (
        <div className="game">
            <div className="game-board">
                <Board squares={squares} handleClick={handleClick} />
            </div>
            <div className="game-info">
                <div>{status}</div>
                <ol>{/* TODO */}</ol>
            </div>
        </div>
    )
}

const calculateWinner = (squares: Array<string | null>) => {
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
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

export default Game;
