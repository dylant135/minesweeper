import React from "react";

type propType = {
    setIsModal: React.Dispatch<React.SetStateAction<boolean>>
}

export default function WinnerModal({setIsModal}: propType) {
    return (
        <div className="winnerModal">
            <button type="button" className="xbtn" onClick={() => setIsModal(false)}>X</button>
            <h2>You Won the Game!</h2>
        </div>
    )
}