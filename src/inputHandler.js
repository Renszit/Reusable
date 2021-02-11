import { useState } from "react";

const InputHandler = () => {
    const [text, setText] = useState();

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSubmit();
        }
    };

    const handleSubmit = (e) => {
        alert("You have typed: " + text);
        e.preventDefault();
    };

    return (
        <div>
            <form>
                <p>Text: {text}</p>
                <input
                    name="sample"
                    onKeyDown={(e) => handleKeyDown(e)}
                    onChange={(e) => setText(e.target.value)}
                    type="text"
                    placeholder="type something"
                ></input>
            </form>
        </div>
    );
};

export default InputHandler;
