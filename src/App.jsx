import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState('');
  const [isPalindrome, setIsPalindrome] = useState(false);
  
  function checkPalindrome() {
    const reversedString = input.split('').reverse().join('');setIsPalindrome(input === reversedString);
  }

  return (
    <>
      <input type="text" value={input} onChange={e => setInput(e.target.value)} placeholder='Enter word or number' />
      <button onClick={checkPalindrome}>Submit</button>
      {isPalindrome ? <p>True</p> : <p>False</p>}
    </>
  )
}

export default App
