import React, { useContext } from "react";
import { gameContext } from "../GameContext";

export default function ClickSelector() {

    const { selectChoice, setSelectChoice} = useContext(gameContext)

    function handleClick(selection: string) {
        setSelectChoice(selection)
    }

    return (
        <div className="container center">
            <button type="button" style={{backgroundColor: selectChoice === 'select' ? 'crimson' : ''}} className="mainbtn" onClick={() => handleClick('select')}>Select</button>
            <button type="button" style={{backgroundColor: selectChoice === 'flag' ? 'crimson' : ''}} className="mainbtn" onClick={() => handleClick('flag')}>Flag</button>
        </div>
    )
}