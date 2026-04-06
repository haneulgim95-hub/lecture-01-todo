import { useState } from "react";

function App() {
    const [userChoice, setUserChoice] = useState("");
    const [computerChoice, setComputerChoice] = useState("");
    const [result, setResult] = useState("");
    const [win, setWin] = useState(0);
    const [lose, setLose] = useState(0);
    const [draw, setDraw] = useState(0);

    const play = user => {
        const choices = ["가위", "바위", "보"];
        const computer = choices[Math.floor(Math.random() * 3)];

        setUserChoice(user);
        setComputerChoice(computer);

        if (user === computer) {
            setResult("무승부");
            setDraw(prev => prev + 1);
        } else if (
            (user === "가위" && computer === "보") ||
            (user === "바위" && computer === "가위") ||
            (user === "보" && computer === "바위")
        ) {
            setResult("승리");
            setWin(prev => prev + 1);
        } else {
            setResult("패배");
            setLose(prev => prev + 1);
        }
    };

    const resetGame = () => {
        setUserChoice("");
        setComputerChoice("");
        setResult("");
        setWin(0);
        setLose(0);
        setDraw(0);
    };

    // 👉 버튼 스타일 함수
    const getButtonStyle = choice => {
        return {
            padding: "10px 20px",
            margin: "5px",
            fontSize: "16px",
            cursor: "pointer",
            border: userChoice === choice ? "3px solid blue" : "1px solid gray",
            backgroundColor: userChoice === choice ? "#d0e6ff" : "white",
        };
    };

    return (
        <div>
            <h1>가위바위보 게임</h1>

            <button style={getButtonStyle("가위")} onClick={() => play("가위")}>
                가위
            </button>
            <button style={getButtonStyle("바위")} onClick={() => play("바위")}>
                바위
            </button>
            <button style={getButtonStyle("보")} onClick={() => play("보")}>
                보
            </button>

            <hr />

            <h2>내 선택 : {userChoice}</h2>
            <h2>컴퓨터 선택 : {computerChoice}</h2>

            <h2
                style={{
                    color:
                        result === "승리"
                            ? "green"
                            : result === "패배"
                              ? "red"
                              : result === "무승부"
                                ? "gray"
                                : "black",
                    fontSize: "24px",
                    fontWeight: "bold",
                }}>
                결과 : {result}
            </h2>

            <button onClick={resetGame}>게임 다시하기</button>

            <hr />

            <h2>승 : {win}</h2>
            <h2>패 : {lose}</h2>
            <h2>무 : {draw}</h2>
            <h2>총 게임 수 : {win + lose + draw}</h2>
        </div>
    );
}

export default App;