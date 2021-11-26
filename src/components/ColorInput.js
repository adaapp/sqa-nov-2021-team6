import React from 'react';
import ReactColorSquare from "react-color-square";

function ColorInput(props) {

    return (
        <div>
            <form className="form-input">
                <label className="color-input-label">{props.color}</label>
                <input name="color "className="color-input-field" type="text"></input>
                <div className="color-square" >
                    <ReactColorSquare height={25} width={25} color={props.color} />
                </div>
            </form>
        </div>
    )
}

export default ColorInput;
