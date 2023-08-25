import React, { useContext, useEffect, useState } from "react";
import { cellType } from "../types/cellType";
import { gameContext } from "../GameContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBomb } from '@fortawesome/free-solid-svg-icons'
import { faFlag } from '@fortawesome/free-regular-svg-icons'


type propsType = {
    cellData: cellType,
    setBoardData: React.Dispatch<React.SetStateAction<cellType[][]>>,
    boardData: cellType[][],
    mineFound: () => void
}

export default function Cell({cellData, setBoardData, boardData, mineFound}: propsType) {

    const [locked, setLocked] = useState(false)
    const { selectChoice } = useContext(gameContext)

    //check if all bombs are flagged
    useEffect(() => {
        const bombs = boardData.map(row => {
            return row.filter(cell => cell.isMine)
        })
        let bombsFound = 0
        for(let i = 0; i < 8; i++) {
            for(let j = 0; j < bombs[i].length; j++) {
                if(bombs[i][j].isFlagged) {
                    bombsFound++
                }
            }
        }
        if(bombsFound === 10) {
            console.log('you win')
        }

    }, [boardData, handleFlag])

    function handleClick() {
        if(locked) {
            if(cellData.isHidden) {
                setLocked(false)
            } else return
        }
        if(cellData.isHidden) {
            let newData = [...boardData]
            newData[cellData.x][cellData.y].isHidden = false
            setBoardData(newData)
            if(selectChoice === 'select') {
                setLocked(true)
                if(cellData.isMine) {
                    mineFound()
                }
            }
        }
        if(selectChoice === 'flag') {
            handleFlag()
        } 
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    function handleFlag() {
        let newData = [...boardData]
        const theCell = boardData[cellData.x][cellData.y].isFlagged
        if(theCell) {
            newData[cellData.x][cellData.y].isHidden = true
        }
        boardData[cellData.x][cellData.y].isFlagged = !theCell
        setBoardData(newData)
    }

    return (
        <div className="cell" onClick={handleClick} >
            {!cellData.isHidden && <p className="value">{cellData.isFlagged ? <FontAwesomeIcon icon={faFlag} className="icon" /> : cellData.isMine ? <FontAwesomeIcon icon={faBomb} className="icon" /> : cellData.num}</p>}
        </div>
    )
}