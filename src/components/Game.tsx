import React from "react";
import Board from "./Board";
import ClickSelector from "./ClickSelector";
import GameContextProvider from "../GameContext";

export default function Game() {
    return (
        <div className="game">
            <GameContextProvider>
                <ClickSelector />
                <Board />
            </GameContextProvider>
        </div>
    )
}