// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {status, score, playAgain} = props
  const playagain = () => {
    playAgain()
  }
  return (
    <div className="result-card">
      <div className="scorecard-details">
        <h1 className="head">You {status}</h1>
        {status === 'Lose' ? (
          <p className="para">Score</p>
        ) : (
          <p className="para">Best Score</p>
        )}
        <p className="score">{score}/12</p>
        <button type="button" className="play-again" onClick={playagain}>
          Play Again
        </button>
      </div>
      <img
        src={
          status === 'Lose'
            ? 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
        }
        className="scorecard-img"
        alt="win or lose"
      />
    </div>
  )
}

export default WinOrLoseCard
