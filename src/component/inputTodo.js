import React, {useState} from "react";

const InputTodo = addTodo => {


    const [todo,setTodo] =useState({title: "",date:"",flag:false})

    const handleSubmit = e => {
        e.preventDefault()
        console.log(todo)
        if (!todo.title || !todo.date) return
        console.log(todo)
        addTodo(todo)
        setTodo({...todo, title: "",date:""})
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