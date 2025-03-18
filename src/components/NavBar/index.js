// Write your code here.
import './index.css'

const NavBar = props => {
  const {status, score, topscore} = props
  if (status === 'playing') {
    return (
      <div className="nav-bar">
        <div className="inner-nav">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1>Emoji Game</h1>
        </div>
        <div className="inner-nav">
          <p>Score: {score}</p>
          <p>Top Score: {topscore}</p>
        </div>
      </div>
    )
  }
  return (
    <div className="nav-bar">
      <div className="inner-nav">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1>Emoji Game</h1>
      </div>
    </div>
  )
}

export default NavBar
