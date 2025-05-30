import { useState } from "react"

const initialBoard = () => Array(9).fill(null);

const winningcombos = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

function checkWinner(board) {
  for (let [a, b, c] of winningcombos) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}

const useTikToe = () => {
  const [board, setBoard] = useState(initialBoard());
  const [winnerList, setWinner] = useState({});
  const [isX, setX] = useState(true);
  const [winner, setWinnerState] = useState(null);

  const currentPlayer = isX ? "X" : "O";
  const isDraw = !winner && board.every(Boolean);

  const handleClick = index => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    const result = checkWinner(newBoard);
    if (result) {
      setWinnerState(result);
      setWinner(prev => ({
        ...prev,
        [result]: (prev[result] || 0) + 1
      }));
    } else {
      setX(prev => !prev);
    }
  };

  const reset = () => {
    setBoard(initialBoard());
    setX(true);
    setWinnerState(null);
  };

  return {
    board,
    handleClick,
    currentPlayer,
    winner,
    isDraw,
    reset,
    winnerList
  };
};

export default useTikToe;
