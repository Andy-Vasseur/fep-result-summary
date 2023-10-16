// Tools
import { useState } from 'react';

// Data
import data from './assets/challenge/data.json';

// Assets
import ReactionIcon from './assets/img/icon-reaction.svg';
import MemoryIcon from './assets/img/icon-memory.svg';
import VerbalIcon from './assets/img/icon-verbal.svg';
import VisualIcon from './assets/img/icon-visual.svg';

// Modal Component
function Modal({ onClose }) {
  return (
    <div className="Modal">
      <div className="Modal__content">
        <p>This functionality is not available yet.</p>
        <button onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  )
}

function App() {

  const [modalVisible, setModalVisible] = useState(false)

  const handleBtnClick = () => {
    setModalVisible(true)
  }

  const closeModal = () => {
    setModalVisible(false)
  }

  const icons = {
    Reaction: ReactionIcon,
    Memory: MemoryIcon,
    Verbal: VerbalIcon,
    Visual: VisualIcon
  }

  return (
    <div className="App">
      <div className="App__header">
        <h3>Your Result</h3>
        <div className="App__header__count">
          <h1>76</h1>
          <p>of 100</p>
        </div>
        <h2>Great</h2>
        <p>You scored higher than 65% of the people who have taken these tests.</p>
      </div>
      <div className="App__main">
        <p>Summary</p>
        <ul className="App__main__list">
          {
            data.map((item, index) => (
              <li className="App__main__list__item" key={index}>
                <div className="App__main__list__item__name">
                  <img src={icons[item.category]} alt="icon" />
                  <p>{item.category}</p>
                </div>
                <div className="App__main__list__item__score">
                  <span>{item.score}</span>
                  <p>/ 100</p>
                </div>
              </li>
            ))
          }
        </ul>
        <button onClick={handleBtnClick}>
          Continue
        </button>
        {
          modalVisible && <Modal onClose={closeModal} />
        }
      </div>
    </div>
  )
}

export default App
