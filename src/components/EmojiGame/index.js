/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.
const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import './index.css'
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {selectedList: [], score: 0, topscore: 0, status: 'playing'}

  emojiSelected = id => {
    const {selectedList, score} = this.state
    if (selectedList.includes(id)) {
      this.setState(prev => ({
        status: 'Lose',
        selectedList: [],
      }))
    } else if (!selectedList.includes(id) && score !== 11) {
      this.setState(prev => ({
        selectedList: [...prev.selectedList, id],
        score: prev.score + 1,
      }))
    } else {
      this.setState({
        score: 12,
        selectedList: [],
        status: 'Won',
        topscore: 12,
      })
    }
  }

  playAgain = () => {
    this.setState(prev => ({
      status: 'playing',
      selectedList: [],
      score: 0,
      topscore: prev.score > prev.topscore ? prev.score : prev.topscore,
    }))
  }

  render() {
    const {selectedList, score, topscore, status} = this.state
    console.log(this.state)
    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }
    const shuffledEmojiList = shuffledEmojisList()
    return (
      <div className="main-container">
        <NavBar status={status} score={score} topscore={topscore} />
        <div className="emojicontainer">
          {status === 'playing' ? (
            <ul type="none">
              {shuffledEmojiList.map(each => (
                <EmojiCard
                  details={each}
                  emojiSelected={this.emojiSelected}
                  key={each.id}
                />
              ))}
            </ul>
          ) : (
            <WinOrLoseCard
              status={status}
              score={score}
              playAgain={this.playAgain}
            />
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
