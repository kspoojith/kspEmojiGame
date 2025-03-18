// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {details, emojiSelected} = props
  const {id, emojiName, emojiUrl} = details
  const emojiselected = () => {
    emojiSelected(id)
  }
  return (
    <li onClick={emojiselected}>
      <button type="button">
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
