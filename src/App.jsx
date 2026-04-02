import { useState } from "react";

function App() {
    const [text, setText] = useState("");
    const [list, setList] = useState([]);

    return (
        <div>
            <h1>My Todo (0)</h1>
            <form
                onSubmit={e => {
                    e.preventDefault();

                    if (text === "") {
                        return;
                    }
                    setList([...list, text]);

                    setText("");
                }}>
                <input
                    placeholder="할일을입력해주세요"
                    onChange={e => {
                        setText(e.target.value);
                    }}
                    value={text}
                />

                <button>Add To do</button>
            </form>
            <hr />
            <ul>
                {list.map((value, index) => {
                    return <li key={index}>{value}</li>;
                })}
            </ul>
        </div>
    );
}

export default App;
