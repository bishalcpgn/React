import { createSlice, nanoid } from "@reduxjs/toolkit";


const todoSlice = createSlice({
    name : "todo",
    initialState : {todos : [{id: 1, text: "Hello"}]},
    
    reducers: {
        addTodo: (state, action) => {
            const todo = {id: nanoid(), text: "action.payload.text"}
            state.todos.push(todo)
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id != action.payload)
        }
    }
})

// exporting reducers which will be used in components 
export const {addTodo, removeTodo} = todoSlice.actions

// exporting reducers only to import in store 
export default todoSlice.reducer