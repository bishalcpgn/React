import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)


  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEF"
    if (numberAllowed) str += "1234567890"
    if (charAllowed) str += "!@#$^&*(){}%"
    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    
    setPassword(pass)
  }, [length, numberAllowed, charAllowed])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed])

  const copyToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
  }, [password])

  return (
    <>

      <div className='w-full max-w-md mx-auto px-3 py-2 text-orange-500 my-8 rounded-lg shadow-md bg-gray-700'>
        <h1 className='text-4xl text-center text-white mt-3'>Password Generator</h1>
        <br />
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            placeholder='Password'
            className='outline-none w-full  py-1 px-3'
            ref={passwordRef}
            readOnly />


          <button
            onClick={copyToClipboard}
            className='bg-color=outline-none bg-blue-700 text-white px-3 py-0'>
            Copy
          </button>

        </div>

        <input
          type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => { setLength(e.target.value) }}
        />

        <label>Length: {length}</label>


        <div className='flex items-center gap-x-1'>
          <input
            type='checkbox'
            defaultChecked={charAllowed}
            id='numberInput'
            onChange={() => setCharAllowed((prev) => !prev)}
          />
          <label>Chars</label>

          <input
            type='checkbox'
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={() => setNumberAllowed((prev) => !prev)}
          />

          <label>Numbers</label>
       
        </div>
      </div >
    </>
  )
}

export default App
