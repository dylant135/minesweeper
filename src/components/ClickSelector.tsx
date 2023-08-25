import React, { useContext } from "react";
import { gameContext } from "../GameContext";

export default function ClickSelector() {

    const { selectChoice, setSelectChoice} = useContext(gameContext)

    function handleClick(selection: string) {
        setSelectChoice(selection)
    }

    return (
        <div className="container center">
            <button type="button" style={{backgroundColor: selectChoice === 'select' ? '#797cb2' : 'white'}} className="selectbtn" onClick={() => handleClick('select')}>Select</button>
            <button type="button" style={{backgroundColor: selectChoice === 'flag' ? '#797cb2' : 'white'}} className="selectbtn" onClick={() => handleClick('flag')}>Flag</button>
        </div>
    )
}