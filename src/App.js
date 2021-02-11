import "./App.css";
import ProgressBar from "./progressbar";
import Button from "./button";
import InputHandler from "./inputHandler";
import { useState } from "react";

function App() {
    const [percent, setPercent] = useState(10);

    return (
        <div className="App">
            <header className="App-header">
                <h1>Reusable components</h1>
            </header>
            <div className="componentContainer">
                <code>progressbar</code>
                <input
                    placeholder="fill in a number"
                    type="number"
                    onChange={(e) => setPercent(e.target.value)}
                ></input>
                <ProgressBar percentage={percent} />
                <ProgressBar value={40} minValue={0} maxValue={200} />
                <p></p>
                <code>button</code>
                <Button />
                <p></p>
                <code>inputfield</code>
                <InputHandler />
            </div>
        </div>
    );
}
export default App;
