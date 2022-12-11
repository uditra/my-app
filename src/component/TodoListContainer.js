import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import {fetchTodoList , addTodoItems} from '../redux/TodoListActions'
import InputTodo from "./inputTodo";

const TodoListContainer = () => {

    const TodoListData = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTodoList())
    },[])

    const addTodoItem = (todoItem) => {
        dispatch(addTodoItems(todoItem))
    }

    return TodoListData.loading ? (
        <h1>loading data</h1>
    ) : TodoListData.error ? (
        <h1>{TodoListData.error}</h1>
    ): (
        <div>
            <h1>TodoList</h1>
            <div>
                {TodoListData && 
                TodoListData &&
                TodoListData.TodoList.map(todo => <div key={todo.id}><p>{todo.title}</p></div>)}
            </div>
            <InputTodo addTodo={addTodoItem}/>
        </div>
    )
}
export default TodoListContainer