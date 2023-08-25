import React, { useState } from "react";
import { cellType } from "../types/cellType";
import Cell from "./Cell";

export default function Board() {
    const [boardData, setBoardData] = useState(generateBoard())


    function generateBoard() {
        const data = emptyArr()
        plantBombs(data)
        calculateNums(data)
        return data
    }

    function emptyArr() {
        let data:cellType[][] = []
        for(let i = 0; i < 8; i++) {
            data.push([])
            for(let j = 0; j < 8; j++) {
                data[i][j] = {
                    x: i,
                    y: j,
                    isMine: false,
                    isFlagged: false,
                    isHidden: true,
                    num: 0
                }
            }
        }
        return data
    }

    function plantBombs(data:cellType[][]) {
        let bombs = 10
        while(bombs > 0) {
            //Math.floor(Math.random() * (max - min + 1) + min)
            const x = Math.floor(Math.random() * (8))
            const y = Math.floor(Math.random() * (8))
            if(data[x][y].isMine === false) {
                data[x][y].isMine = true
                bombs--
            }
        }
    }

    function calculateNums(data:cellType[][]) {
        for(let i = 0; i < 8; i++) {
            for(let j = 0; j < 8; j++) {
                let num = 0
                const arr = traverse(data, i, j)
                arr.forEach(cell => {
                    if(cell.isMine) {
                        num++
                    }
                })
                data[i][j].num = num
            }
        }
    }

    function traverse(data: cellType[][], x: number, y: number) {
        let arr = []
        //up
        if(x > 0) {
            arr.push(data[x - 1][y])
        }
        //up right
        if(x > 0 && y < 7) {
            arr.push(data[x - 1][y + 1])
        }
        //up left
        if(x > 0 && y > 0) {
            arr.push(data[x - 1][y - 1])
        }
        //right
        if(y < 7) {
            arr.push(data[x][y + 1])
        }
        //left
        if(y > 0) {
            arr.push(data[x][y - 1])
        }
        //bottom
        if(x < 7) {
            arr.push(data[x + 1][y])
        }
        //bottom right
        if(x < 7 && y < 7) {
            arr.push(data[x + 1][y + 1])
        }
        //bottom left
        if(x < 7 && y > 0) {
            arr.push(data[x + 1][y - 1])
        }

        return arr
    }

    const displayBoard = boardData.map(row => {
        return row.map(cell => {
            return (
                <Cell
                    cellData={cell}
                    setBoardData={setBoardData}
                    boardData={boardData}
                />
            )
        })
    })

    return (
        <div className="board center">
            {displayBoard}
        </div>
    )
}