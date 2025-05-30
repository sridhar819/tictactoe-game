import useTikToe from "./useTikToe"

const App = () => {
  const { board, reset, handleClick, winnerList, currentPlayer, winner, isDraw } = useTikToe();

  return (
    <div className='min-h-screen bg-gradient-to-r from-purple-300 to-pink-200 flex flex-col items-center pt-6'>
      <h1 className="text-red-600 mb-4 font-bold text-3xl text-center hover:underline">TIC TAC TOE</h1>

      <div className="flex items-center justify-between w-[90%] max-w-xl mb-4">
        <p className="text-md font-bold hover:text-red-400">Player {currentPlayer}'s turn</p>
        <button
          onClick={reset}
          className="bg-green-400 px-4 py-2 rounded text-white font-semibold hover:bg-green-600"
          type="button"
        >
          Reset Game
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4 w-full max-w-xl px-4">
        {board.map((each, index) => (
          <button
            key={index}
            disabled={each !== null}
            onClick={() => handleClick(index)}
            className="bg-teal-500 text-4xl h-[120px] md:h-[150px] md:w-full font-bold rounded hover:bg-teal-700 text-white self-center"
          >
            {each}
          </button>
        ))}
      </div>

      {winner && (
        <p className="text-xl px-3 font-bold mt-6 text-blue-600">
          WINNER IS: {winner}
        </p>
      )}

      {isDraw && !winner && (
        <p className="text-orange-500 px-3 font-bold text-xl mt-4">IT'S A DRAW</p>
      )}

      <div className="mt-6 text-center">
        <p className="text-red-400 font-semibold text-md">X wins: <mark className="text-xl px-2">{winnerList.X || 0}</mark></p>
        <p className="text-violet-500 font-semibold text-md">O wins: <mark className="text-xl px-2">{winnerList.O || 0}</mark></p>
      </div>
    </div>
  )
}

export default App;
