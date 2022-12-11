import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import {fetchTodoList , addTodoItems} from '../redux/TodoListActions'
import InputTodo from "./inputTodo";
import EditInput from "./EditInpt"
import apiRequest from "../redux/TodoListActions";
import Checkbox from '@mui/material/Checkbox';

const TodoListContainer = () => {

    const [currentTodo, setCurrentTodo] = useState({});
    const [isEditing, setIsEditing] = useState(false);
    const TodoListData = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTodoList())
    },[])

    const addTodoItem = (todoItem) => {
        dispatch(addTodoItems(todoItem))
    }

    const editTodoItem = (todoItem) => {
        const update = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todoItem)
        }
        const reqUrl = `http://localhost:3333/TodoList/${todoItem.id}`
        const result = apiRequest(reqUrl,update).then(dispatch(fetchTodoList()))
        if (result) console.log(result)
        setIsEditing(false)
        setCurrentTodo({})
    }

    const handleEditClick =(todo) => {
        setIsEditing(true);
        setCurrentTodo({ ...todo });
      }

    const handleDeleteClick =(todo) => {
        const update = { method: 'DELETE' }
        const reqUrl = `http://localhost:3333/TodoList/${todo.id}`
        const result = apiRequest(reqUrl,update).then(dispatch(fetchTodoList()))
        if (result) console.log(result)
    }

    return TodoListData.loading ? (
        <h1>loading data</h1>
    ) : TodoListData.error ? (
        <h1>{TodoListData.error}</h1>
    ): (
        <div>
            <h1>TodoList</h1>
            <ul className="todo-list" >
                {TodoListData.TodoList.map(todo => 
                (!isEditing || currentTodo.id !== todo.id )?(
                    <li key={todo.id}>
                        <h3>{todo.title} {todo.date} <Checkbox onClick={() => editTodoItem({...todo,flag: !todo.flag})} color="success" checked={todo.flag}/></h3>
                        <button onClick={() => handleEditClick(todo)}>Edit</button>
                        <button onClick={() => handleDeleteClick(todo)}>Delete</button>
                    </li>
                ):(<EditInput editTodo={editTodoItem} todoItem={todo}/>)
                )}
            </ul>
            <InputTodo addTodo={addTodoItem}/>
        </div>
    )
}
export default TodoListContainer