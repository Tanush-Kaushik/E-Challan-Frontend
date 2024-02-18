import React from 'react'

const ButtonPair = (props) => {
    return (
        <div className={props.className}>
            <button>{props.button1}</button>
            <button>{props.button2}</button>
        </div>
    )
}

export default ButtonPair