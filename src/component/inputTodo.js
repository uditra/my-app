import React, {useState} from "react";

import { v4 as uuidv4 } from 'uuid';


const InputTodo = ({addTodo}) => {


    const [todo,setTodo] =useState({title: "",date:"",flag:false,id:uuidv4()})

    const handleSubmit = e => {
        e.preventDefault()
        if (!todo.title || !todo.date) return
        addTodo(todo)
        setTodo({...todo, title: "",date:"",id:uuidv4()})
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={ todo.title} placeholder="add new task" 
            onChange={e => setTodo(todo =>({...todo,title: e.target.value}))}/>
            <input type="date" value={todo.date} placeholder="" 
            onChange={e => setTodo(todo =>({...todo,date: e.target.value}))}/>
            <button type="submit">add Todo item</button>
        </form>
    )
}
export default InputTodo