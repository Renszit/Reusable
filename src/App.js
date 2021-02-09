import "./App.css";
import ProgressBar from "./progressbar";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Reusable components</h1>
            </header>
            <code>progressbar</code>
            <ProgressBar percentage={30} />
            <ProgressBar value={40} minValue={0} maxValue={200} />
            <code>/progressbar</code>
        </div>
    );
}
export default App;
