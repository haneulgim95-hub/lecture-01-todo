import { useState } from "react";

function App() {
    // state라고 하는 특수 변수를 만들 때 useState()
    // const [앞으로 사용할 변수명, 그 변수의 값을 변경할수 있는 함수명] = useState(초기값);
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Counter : {count}</h1>
            {/*
                태그의 속성을 적어줄 때 그 안에 javascript를 작성을 해야된다면, ""로 써주는게 아니라, {}로 써줘야 함
                => 컴포넌트의 return 문 안에 작성하는 {} 는 이 안에 javascript를 쓰겠다는 의미
            */}
            <button
                onClick={() => {
                    // count라고 하는 변수에 지금 현재 count의 값 -1게 저장되면 됨
                    // 일반 변수라면, count = count - 1
                    setCount(count - 1);
                    // 버튼을 누르면 count의 값이 실시간으로 변화한다. (화면의 count값도 변화한다.)
                    // 리렌더링이란 컴포넌트 전체를 다시 그리는게 아니라, 변경된 값만 감지를 해서 리엑트 엔진이 다시 그려주는 것이다.(state를 쓰는 이유)
                }}>
                -
            </button>
            <button
                onClick={() => {
                    setCount(0);
                }}>
                Reset
            </button>
            <button
                onClick={() => {
                    setCount(count + 1);
                }}>
                +
            </button>
        </div>
    );
}

export default App;
