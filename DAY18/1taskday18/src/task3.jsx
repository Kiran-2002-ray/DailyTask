import React from "react";
import { useRef } from "react";
import './App.css'

function TextInputWithFocusButton() {

    const inputEl = useRef(null);
    const onButtonClick = () => {
        inputEl.current.focus();
        console.log(onButtonClick)
    }

    return(
        <div>
            <input ref={inputEl} type="text" />
            <button onClick={onButtonClick} >Focus on the button</button>

        </div>
    )
}

export default TextInputWithFocusButton;