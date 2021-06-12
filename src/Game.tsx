import React, { useCallback, useState } from "react";
import Board from "./Board";

type Props = {

}

const Game: React.VFC<Props> = (props) => {
    const [squares, setSquares] = useState(Array<string | null>(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)
    const handleClick = (i: number) => {
        const baseSquares = squares.slice()
        baseSquares[i] = xIsNext ? "X" : "O"
        setSquares(baseSquares)
        setXIsNext(!xIsNext)
    };
    const status = 'Next player: ' + (xIsNext ? "X" : "O");

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

export default Game;
