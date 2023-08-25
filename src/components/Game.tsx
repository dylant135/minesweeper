import React, { useState } from "react";
import Board from "./Board";
import ClickSelector from "./ClickSelector";
import GameContextProvider from "../GameContext";

export default function Game() {
    const [isModal, setIsModal] = useState(false)

    function winner() {
        setIsModal(true)
    }

    return (
        <div className="game">
            <GameContextProvider>
                <ClickSelector />
                <Board 
                    winner={winner}
                />
            </GameContextProvider>
        </div>
    )
}