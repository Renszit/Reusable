import "./App.css";
import ProgressBar from "./progressbar";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <ProgressBar percentage={30} />
                <ProgressBar value={88} minValue={0} maxValue={100} />
            </header>
        </div>
    );
}

export default App;
