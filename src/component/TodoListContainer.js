import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import {fetchTodoList , addTodoItems} from '../redux/TodoListActions'
import InputTodo from "./inputTodo";
import EditInput from "./EditInpt"

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
        setIsEditing(false)
        setCurrentTodo({})
    }

    const handleEditClick =(todo) => {
        // set editing to true
        setIsEditing(true);
        // set the currentTodo to the todo item that was clicked
        setCurrentTodo({ ...todo });
        console.log(isEditing);
        console.log(currentTodo);
      }

    return TodoListData.loading ? (
        <h1>loading data</h1>
    ) : TodoListData.error ? (
        <h1>{TodoListData.error}</h1>
    ): (
        <div>
            <h1>TodoList</h1>
            <ul className="todo-list">
                {TodoListData.TodoList.map(todo => 
                (!isEditing || currentTodo.id !== todo.id )?(
                    <li key={todo.id}>
                        <p>task: {todo.title} date: {todo.date} </p>
                        {/* we are passing the entire todo object to the handleEditClick function*/}
                        <button onClick={() => handleEditClick(todo)}>Edit</button>
                        <button >Delete</button>
                    </li>
                ):(<EditInput editTodo={editTodoItem} todoItem={todo}/>)
                )}
            </ul>
            <InputTodo addTodo={addTodoItem}/>
        </div>
    )
}
export default TodoListContainer