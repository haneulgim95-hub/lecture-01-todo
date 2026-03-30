import { useState } from "react";

function App() {
    const [todo, setTodo] = useState('');
    const [list, setList] = useState([]);

    return (
        <div>
            <h1>To do List (0)</h1>
            <form onSubmit={(e) => {
                e.preventDefault();

                if (todo === "") {
                    return;
                }
                setList([...list, todo]);
                setTodo('');

            }}>
                <input onChange={(e) => {
                    setTodo(e.target.value);
                }} value={todo}/>
                <button>추가</button>
            </form>
            <hr/>
            <ul>
                {
                    list.map((value, index) => {
                       return <li key={index}>{value}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default App;
