import { useState } from "react";
import "./button.css";

const Button = () => {
    const [active, setActive] = useState();

    const handleClick = () => {
        if (active) {
            setActive(false);
        } else {
            setActive(true);
        }
    };
    
    return (
        <div>
            <button onClick={() => handleClick()}>click me</button>
            {!active && <div className="lighterGreen"></div>}
            {active && <div className="lighter"></div>}
        </div>
    );
};

export default Button;
