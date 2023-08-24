import React from "react";
import { cellType } from "../types/cellType";

type propsType = {
    cellData: cellType,
    setBoardData: React.Dispatch<React.SetStateAction<cellType[][]>>,
    boardData: cellType[][]
}

export default function Cell({cellData, setBoardData, boardData}: propsType) {

    function handleClick() {
        if(cellData.isHidden) {
            let newData = [...boardData]
            newData[cellData.x][cellData.y].isHidden = false
            setBoardData(newData)
        }
    }

    function handleFlag() {
        let newData = [...boardData]
        boardData[cellData.x][cellData.y].isFlagged = !boardData[cellData.x][cellData.y].isFlagged
        setBoardData(newData)
    }

    return (
        <div className="cell" onClick={handleClick} onContextMenu={handleFlag}>
            {!cellData.isHidden && <p>{cellData.isMine ? 'bomb' : cellData.isFlagged ? 'flag' : cellData.num}</p>}
        </div>
    )
}