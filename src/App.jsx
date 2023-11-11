import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState('');
  const [isPalindrome, setIsPalindrome] = useState(false);
  
  // Global variable
  const message = document.querySelector('#message');

  function checkPalindrome() {
    const reversedString = input.toLowerCase().split('').reverse().join('');
    setIsPalindrome(input.toLowerCase() === reversedString);
    
    message.classList.remove('hide');
  }

  const clear = () => hideMessageArea();

  const hideMessageArea = () => message.classList.add('hide');

  return (
    <>
      <h1>Palindrome Checker</h1>
      <input type="text" value={input} onFocus={clear} onChange={e => setInput(e.target.value)} placeholder='Enter word or number' />
      <button onClick={checkPalindrome}>Submit</button>
      <p id="message" className='hide'>{isPalindrome ? `${input} is a palindrome` : `${input} is not a palindrome`}</p>
    </>
  )
}

export default App
