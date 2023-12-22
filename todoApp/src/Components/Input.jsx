import React, { useRef } from 'react'

const Input = (props) => {

  const inputBox = useRef()
  return (
    <div className='p-3 flex'>

      <input type="text"
        placeholder='Enter todos here !!'
        className='p-1 border
         focus:outline-none border-slate-400 w-full rounded'
        ref={inputBox} />
      <div className='bg-blue-400 w-1/6 ml-3 rounded text-white text-center'>

        {/* Updating todos value using users input  */}
        <button onClick={() => {
          props.addTodoHandler(inputBox.current.value)
          inputBox.current.value = ''
        }
        }>Add
        </button>

      </div>


    </div>
  )
}


export default Input