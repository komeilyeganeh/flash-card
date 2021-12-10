import { useState } from 'react'
import FlashCard from './components/FlashCard'
import Form from './components/Form'


function App() {
  const [flashCard, setFlashCard] = useState({
    word: 'Hello',
    persianEquivalent: 'سلام',
  })

  return (
    <div className="container">
      <Form setFlashCard={setFlashCard} flashCard={flashCard}/>
      <FlashCard flashCard={flashCard}/>
    </div>
  )
}

export default App
