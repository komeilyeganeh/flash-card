import { useEffect, useState } from 'react'

function Form({ setFlashCard, flashCard }) {
  const [word, setWord] = useState("");
  const [wordPersian, setWordPersian] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    flashCard.word = document.getElementById("word-input").value;
    flashCard.persianEquivalent = document.getElementById("persian-equivalent-input").value;
    setFlashCard({...flashCard})
  }

  useEffect(() => {
    document.getElementById("word-input").value = "";
    document.getElementById("persian-equivalent-input").value = "";
  }, [flashCard])

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="word-input"
        placeholder="کلمه"
        value={word}
        onChange={(e) => {setWord(e.target.value)}}
      />
      <input
        id="persian-equivalent-input"
        placeholder="معادل فارسی"
        value={wordPersian}
        onChange={(e) => { setWordPersian(e.target.value) }}
      />
      <button id="submit-btn">ثبت</button>
    </form>
  )
}

export default Form
