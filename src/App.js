import "./App.css";
import ProgressBar from "./progressbar";
import { useState } from "react";

function App() {
    

    return (
        <div className="App">
            <header className="App-header">
                <ProgressBar percentage={20} />
                {/* <ProgressBar value={40} minValue={0} maxValue={200} /> */}
            </header>
        </div>
    );
}

export default App;
