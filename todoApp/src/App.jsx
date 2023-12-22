import './index.css'
import Input from './Components/Input'
import Box from './Components/Box'
import { useState } from 'react'


import React from 'react'

const App = () => {
  const [todos, setTodos] = useState([])

  // handler for updating todos 
  const addTodoHandler = (data) => {
    if (data) {
      setTodos([
        ...todos,
        { data, time: new Date().toLocaleTimeString() }
      ])
    }
  }

  // handler for removing todos 
  const removeHandler = (id) => {
    const newTodos = todos.filter((eachTodo, index) => {
      if (index === id) return false
      else return true
    })
    setTodos(newTodos)
  }


  return (
    <div className='bg-black h-screen p-3'>
      <div className='bg-white shadow-2xl mx-auto max-w-2xl min-h-max rounded'>

        < Input addTodoHandler={addTodoHandler} />

        <Box todos={todos} removeHandler={removeHandler} />

      </div>

    </div>
  )
}

export default App



