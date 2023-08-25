import React, { useState } from "react";
import Board from "./Board";
import ClickSelector from "./ClickSelector";
import GameContextProvider from "../GameContext";
import WinnerModal from "./WinnerModal";

export default function Game() {
    const [isModal, setIsModal] = useState(false)

    function winner() {
        setIsModal(true)
    }

    return (
        <div className="game">
            <GameContextProvider>
                <ClickSelector />
                {isModal && <WinnerModal
                    setIsModal={setIsModal}
                />}
                <Board 
                    winner={winner}
                />
            </GameContextProvider>
        </div>
    )
}