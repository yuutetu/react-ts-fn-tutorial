import React from "react";
import Board from "./Board";

type Props = {

}

const Game: React.VFC<Props> = (props) => {
    return (
        <div className="game">
            <div className="game-board">
                <Board />
            </div>
            <div className="game-info">
                <div>{/* status */}</div>
                <ol>{/* TODO */}</ol>
            </div>
        </div>
    )
}

export default Game;
