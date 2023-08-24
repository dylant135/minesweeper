import React from "react";
import { cellType } from "../types/cellType";

type propsType = {
    cellData: cellType
}

export default function Cell({cellData}: propsType) {
    return (
        <div className="cell">
            {cellData.isMine ? 'bomb' : cellData.num}
        </div>
    )
}