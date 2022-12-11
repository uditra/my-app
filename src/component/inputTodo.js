import React, {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

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
            <Stack spacing={2} direction="row" justifyContent="center"> 
                <TextField id="outlined-basic" label="name your new task" variant="outlined">
                <input type="text" value={ todo.title} placeholder="name your new task" 
                onChange={e => setTodo(todo =>({...todo,title: e.target.value}))}/>
                </TextField>
                <input type="date" value={todo.date} placeholder="" 
                onChange={e => setTodo(todo =>({...todo,date: e.target.value}))}/>
                <Button variant="contained" type="submit">add Todo item</Button>
            </Stack>
        </form>
    )
}
export default InputTodo