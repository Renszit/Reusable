import "./progressbar.css";
import { useState, useEffect } from "react";

const ProgressBar = ({ width, percentage }) => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        setValue(percentage * width);
    }, [percentage, width]);

    return (
        <div>
            <div className="progressbar">
                <div style={{ width: `${value}px` }} className="progress">
                    {value}%
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;
