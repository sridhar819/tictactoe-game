import useTikToe from "./useTikToe"


const App = () => {
  const { board, reset, handleClick, winnerList, currentPlayer, winner, isDraw } = useTikToe();

  return (
    <div className='min-h-screen bg-gradient-to-r from-purple-300 to-pink-200 flex flex-col pt-3'>
      <h1 className="text-red-600 mb-3 font-bold text-2xl text-center hover:underline">TIC TOE</h1>
      <div className="px-3  flex justify-around">
        <p className="text-md font-bold hover:text-red-400">Player {currentPlayer} turn </p>
        <button onClick={reset} className="bg-green-400 px-3 py-1 rounded text-white font-semibold hover:bg-green-600" type="button">Reset</button>
        <button onClick={reset} className="bg-green-400 px-3 py-1 rounded text-white font-semibold hover:bg-green-600" type="button">Play again</button>
      </div>
      <div className="grid grid-cols-3 gap-4 w-full px-3 mt-3">
        {board.map((each, index) =>
          <button onClick={() => handleClick(index)} className="bg-teal-500 text-3xl h-[150px] font-bold rounded hover:bg-teal-700 text-white" key={index}>
            {each}
          </button>)}
      </div>
      {winner && <p className="text-xl px-3 font-bold mt-3 text-blue-500">
        WINNER IS : X
      </p>}
      {isDraw && <p className="text-orange-500 px-3 font-bold text-xl">IT'S DRAW</p>}
      <p className="text-red-400 font-semibold px-3 mt-3 text-md">X wins: <mark className="text-xl px-3">{winnerList.O ||0}</mark></p>
      <p className="text-violet-500 font-semibold px-3 text-md">O wins: <mark className="text-xl px-3">{winnerList.O ||0}</mark></p>
    </div>
  )
}

export default App