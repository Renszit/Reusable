import "./progressbar.css";
import { useState } from "react";

const ProgressBar = (props) => {
    const [percentage, setPercentage] = useState(20);

    return (
        <div>
            <div className="progressbar">
                <div style={("width:", { percentage })} className="progress">
                    {percentage}
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;
