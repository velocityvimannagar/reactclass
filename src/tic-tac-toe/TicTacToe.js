import { useState } from "react";
import "./TicTacToe.css";
function TicTacToe() {
  const [board, setBoard] = useState([
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1],
  ]);
  const [winner, setWinner] = useState(-1);
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const winningCombinations = [
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = () => {
    const flatArray = board.flat();
    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (flatArray[a] !== -1) {
        if (flatArray[a] === flatArray[b] && flatArray[b] === flatArray[c]) {
          return true;
        }
      }
    }
    return false;
  };
  const handleClick = (rowIndex, cellIndex) => {
    board[rowIndex][cellIndex] = currentPlayer;
    setBoard(JSON.parse(JSON.stringify(board)));
    // Check if win => alert(X is winner)
    if (checkWinner()) {
      setWinner(currentPlayer);
    } else {
      setCurrentPlayer(currentPlayer == 0 ? 1 : 0);
    }
  };

  const getText = (cellValue) => {
    switch (cellValue) {
      case -1:
        return "";
      case 0:
        return "X";
      case 1:
        return "O";
    }
  };
  return (
    <div className="parent-tictac-div">
      <br></br>
      <h3>Current Player: {getText(currentPlayer)}</h3>

      {winner >= 0 && <h4> Winner is {getText(winner)}</h4>}
      {board.map((row, rowIndex) => {
        return (
          <div className="row">
            {row.map((cell, cellIndex) => {
              return (
                <div
                  className="cell"
                  onClick={() => {
                    handleClick(rowIndex, cellIndex);
                  }}
                >
                  {getText(cell)}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
export default TicTacToe;
