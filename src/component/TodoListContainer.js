import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import {fetchTodoListSuccess, fetchTodoListFailure , addTodoItemSuccess, addTodoItemFailure, editItem, deleteItem} from '../redux/TodoListActions'
import InputTodo from "./inputTodo";
import EditInput from "./EditInpt"
import apiRequest from "../redux/api";
import Checkbox from '@mui/material/Checkbox';
import axios from "axios"

const TodoListContainer = () => {

    const [currentTodo, setCurrentTodo] = useState({});
    const [isEditing, setIsEditing] = useState(false);
    const TodoListData = useSelector(state => state)
    const dispatch = useDispatch()
    const url ="http://localhost:3333/TodoList"

    useEffect(() => {
        const pull = async () => {
        try{
            const response = await axios.get(`${url}`)
            dispatch(fetchTodoListSuccess(response.data))
        } catch (err) {
            dispatch(fetchTodoListFailure(err.massage))
        } }
        pull()
    },[])

    const addTodoItem = (todoItem) => {
        const push = async () => {
        try{
            const response = await axios.post(`${url}`,todoItem)
            dispatch(addTodoItemSuccess(response.data))
        } catch (err) {
            dispatch(addTodoItemFailure(err.massage))
        } }
        push()
    }

    const editTodoItem = (todoItem) => {
        const update = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todoItem)
        }
        const reqUrl = `${url}/${todoItem.id}`
        const result = apiRequest(reqUrl,update).then(dispatch(editItem(todoItem)))
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
        const reqUrl = `${url}/${todo.id}`
        const result = apiRequest(reqUrl,update).then(dispatch(deleteItem(todo)))
        if (result) console.log(result)

    }

    return TodoListData.loading ? (
        <div>
            <h1>TodoList</h1>
            <h1>loading data</h1>
        </div>
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
                ):(<EditInput key={todo.id} editTodo={editTodoItem} todoItem={todo}/>)
                )}
            </ul>
            <InputTodo addTodo={addTodoItem}/>
        </div>
    )
}
export default TodoListContainer