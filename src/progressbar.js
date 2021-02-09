import "./progressbar.css";
import { useState, useEffect } from "react";

const ProgressBar = ({ percentage, value, minValue, maxValue }) => {
    const [width, setWidth] = useState();
    const [percentageCalc, setPercentageCalc] = useState();
    const [tooLarge, setTooLarge] = useState();
    const [tooSmall, setTooSmall] = useState();

    useEffect(() => {
        if (percentage) {
            if (percentage > 100) {
                console.log(
                    "percentage is too high, can not be more than 100. Your percentage is:",
                    percentage
                );
                setTooLarge(true);
            } else if (percentage < 0) {
                console.log(
                    "percentage is too low, can not be less than 0. Your percentage is:",
                    percentage
                );
                setTooSmall(true);
            } else if (percentage < 3) {
                setPercentageCalc(percentage);
                setWidth(3);
            } else {
                setTooLarge(false);
                setTooSmall(false);
                setPercentageCalc(percentage);
                setWidth(percentage);
            }
        } else {
            const percent = ((value - minValue) * 100) / (maxValue - minValue);
            if (percent > 100) {
                console.log(
                    "percentage is too high, can not be more than 100. Your percentage is:",
                    percent
                );
                setTooLarge(true);
            } else if (percent < 0) {
                console.log(
                    "percentage is too low, can not be less than 0. Your percentage is:",
                    percent
                );
                setTooSmall(true);
            } else if (percent < 3) {
                setPercentageCalc(percent);
                setWidth(3);
            } else {
                setTooLarge(false);
                setTooSmall(false);
                setPercentageCalc(percent);
                setWidth(percent);
            }
        }
    }, [percentage, value, minValue, maxValue]);

    return (
        <div>
            <div className="progressbar">
                {tooSmall && <div className="tooSmall">⚠️</div>}
                {!tooSmall && !tooLarge && (
                    <div style={{ width: `${width}%` }} className="progress">
                        {percentageCalc}%
                    </div>
                )}
                {tooLarge && <div className="tooLarge">⚠️</div>}
            </div>
        </div>
    );
};

export default ProgressBar;
