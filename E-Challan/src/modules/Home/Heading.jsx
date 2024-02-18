import React from "react";
import { Link } from "react-router-dom";

const Heading = (props) => {

    // const linkStyle={
    //     "background-color": "#0B409C",
    //     "font-size": "1.5rem",
    //     "color": "#f8f8f8",
    //     "cursor": "pointer",
    //     "font-weight": "800",
    //     "text-decoration":"none",
    //     "padding":"0.5rem",
    // }

    return (
        <div className="">
            <h2 className="">{props.heading1}</h2>
            <div className={`${props.className}Panel mt-6`}>
                <h4>{props.heading2}</h4>
                <div className={`${props.className}Buttons`}>
                    {props.button1 && <Link to='/contactUs'>{props.button1}</Link>}
                    {props.button2 && <button>{props.button2}</button>}
                </div>
            </div>
        </div>
    )
}
export default Heading