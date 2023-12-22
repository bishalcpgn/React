import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { addTodo } from '../features/todo/todoSlice'

function AddTodoRegion() {

  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const addTodoHandler = (e) => {
    e.preventDefault()
    
    dispatch((addTodo(input)))
    setInput('')
  }

  return (

    <div>
      <form onSubmit={addTodoHandler}>
        <input type="text"
          placeholder='Enter Todos Here ...'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit"> Add Todos </button>
      </form>


    </div>
  )
}

export default AddTodoRegion